"use client"; // Client Component directive for interactivity

import { client } from "@/sanity/lib/client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
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

const Essential = () => {
  const [products, setProducts] = React.useState<Product[]>([]); // State for products

  // Fetch data from Sanity
  React.useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        colors,
        _id,
        status,
        category,
        price,
        description,
        "image": image.asset->url,
        inventory,
        productName
      }`;
      const sanityProducts = await client.fetch(query);
      setProducts(sanityProducts);
    };

    fetchProducts();
  }, []);

  // Filter products to exclude "Shoes" category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() !== "shoes"
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Latest Products</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex">
          {filteredProducts.slice(4, 9).map((product) => (
            <div key={product._id} className="w-1/3 flex-shrink-0 px-2">
              <div className="bg-[#f5f5f5] rounded-lg mb-4">
                <Link href={`/allproduct/${product._id}`}>
                  <Image
                    src={product.image}
                    alt={product.productName}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </Link>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{product.productName}</h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="font-medium">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essential;
