import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Products {
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

const ProductDetail = async ({ params }: any) => {
  const Querry: string = `*[_type == "product" && _id == "${params.id}"]{
  colors,_id,
  status,
  category,
  price,
  description,
  "image":image.asset->url,
  inventory,
  productName
  }[0]`;

  const product: Products = await client.fetch(Querry); // Allow null type for product

  // Check if product is null or undefined
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
          <p className="text-gray-700 mb-4">Category: {product.category}</p>
          <p className="text-gray-700 mb-4">Status: {product.status}</p>
          <p className="text-gray-700 mb-4">Inventory: {product.inventory}</p>
          <div className="flex items-center space-x-2 mb-4">
            <span>Colors:</span>
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
