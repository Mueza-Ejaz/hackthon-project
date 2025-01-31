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

interface Params {
  id: string;
}

const ProductDetail = async ({ params }: { params: Params }) => {
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

  const product: Products = await client.fetch(Querry);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={product.image}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">{product.productName}</h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{product.description}</p>
          
          <p className="text-xl md:text-2xl font-semibold text-blue-600">RS {product.price.toFixed(2)}</p>
          <div className="flex flex-col text-gray-600 space-y-1 md:space-y-2">
            <p>Category: <span className="font-medium text-gray-800">{product.category}</span></p>
            <p>Status: <span className={`font-medium ${product.status === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>{product.status}</span></p>
            <p>Inventory: <span className="font-medium text-gray-800">{product.inventory}</span></p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Available Colors:</span>
            <div className="flex space-x-1 md:space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
