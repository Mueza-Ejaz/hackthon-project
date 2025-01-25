"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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

const GearUp = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc)[0...4] {
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

  const next = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Gear Up</h2>
      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Product Row */}
        <div className="">
          <div
            ref={slideRef}
            className="flex transition-transform duration-300 ease-out space-x-3"
            style={{ width: `${products.length * 37.43}%` }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                className="w-1/4 flex-shrink-0 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
              >
                <div
                  className="relative bg-gradient-to-br  via-gray-300 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center shadow-md"
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <Link href={`/allproduct/${product._id}`}>
                    <Image
                      src={product.image}
                      alt={product.productName}
                      layout="fill"
                      objectFit="contain"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <h3 className="font-semibold text-sm truncate text-center">
                  {product.productName}
                </h3>
                <p className="text-xs text-gray-600 truncate text-center">
                  {product.category}
                </p>
                <p className="font-semibold text-sm mt-2 text-center">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          disabled={currentIndex >= products.length - 3}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GearUp;
