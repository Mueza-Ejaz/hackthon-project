"use client"; // Client Component directive for interactivity

import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const Products = () => {
  const [products, setProducts] = React.useState<Product[]>([]); // State for products
  const [currentIndex, setCurrentIndex] = React.useState(0); // State for slider index
  const slideRef = React.useRef<HTMLDivElement>(null); // Reference for slider

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

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  React.useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Best of Air Max</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Shop</span>
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-gray-100 bg-gray-200"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-gray-100 bg-gray-200"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-300 ease-out"
        >
          {products.map((product) => (
            <div key={product._id} className="w-1/3 flex-shrink-0 px-2">
              <div className="bg-[#f5f5f5] rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.productName}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{product.productName}</h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="font-medium">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className={`absolute left-0 top-1/3 p-2 rounded-full bg-white shadow-md transform -translate-y-1/2 ${
            currentIndex === 0 ? "invisible" : "visible"
          }`}
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className={`absolute right-0 top-1/3 p-2 rounded-full bg-white shadow-md transform -translate-y-1/2 ${
            currentIndex >= products.length - 3 ? "invisible" : "visible"
          }`}
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Products;
