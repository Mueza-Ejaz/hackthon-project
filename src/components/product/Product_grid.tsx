import { client } from "@/sanity/lib/client";
import Cart from "../Cart";
import Link from "next/link";

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

export async function ProductGrid() {
  const Querry: string = `*[_type == "product"]{
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
  const products: Products[] = await client.fetch(Querry);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
 
          <Cart {...product} key={product._id} />
      
      ))}
    </div>
  );
}
