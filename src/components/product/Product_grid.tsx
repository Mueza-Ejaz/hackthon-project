"use client";

import { client } from "@/sanity/lib/client";
import Cart from "../Cart";
import { searchValue } from "@/statelibrary";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

interface Products {
  id: number;
  image: string;
  description: string;
  price: number;
  category: string;
  status: string;
  inventory: number;
  colors: string[];
  productName: string;
  _id: string;
}

export function ProductGrid() {
  const [products, setProducts] = useState<Products[]>([]);
  const [searchVal] = useAtom(searchValue);

  useEffect(() => {
    const dataFetch = async () => {
      const query: string = `*[_type == "product"]{
        colors,
        _id,
        status,
        category,
        price,
        description,
        "image":image.asset->url,
        inventory,
        productName
      }`;
      const res: Products[] = await client.fetch(query);
      setProducts(res);
    };
    dataFetch();
  }, []);

  // **Filter products based on search value**
  const filteredProducts = searchVal
    ? products.filter((item) =>
        item.productName.toLowerCase().includes(searchVal.toLowerCase())
      )
    : products;

  // **Check if no products available**
  if (filteredProducts.length === 0) {
    return <div className="text-center text-gray-500">No Products Found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {filteredProducts.map((product) => (
        <Cart {...product} key={product._id} />
      ))}
    </div>
  );
}
