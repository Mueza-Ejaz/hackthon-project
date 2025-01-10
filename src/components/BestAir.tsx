"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
    image: "/product1.png",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    image: "/product1.png",
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 18995,
    image: "/product2.png",
  },
  {
    id: 4,
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: 16995,
    image: "/product3.png",
  },
  {
    id: 5,
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: 16995,
    image: "/product1.png",
  },
  {
    id: 6,
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: 16995,
    image: "/product1.png",
  },
  
]

const BestAir = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const slideRef = React.useRef<HTMLDivElement>(null)

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }


  const next = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  React.useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`
    }
  }, [currentIndex])

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
            aria-label="Next products"
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
            <div
              key={product.id}
              className="w-1/3 flex-shrink-0 px-2"
            >
              <div className="bg-[#f5f5f5] rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="font-medium">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prev}
          className={`absolute left-0 top-1/3 p-2 rounded-full bg-white shadow-md transform -translate-y-1/2 ${
            currentIndex === 0 ? 'invisible' : 'visible'
          }`}
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

      
        
        <button
          onClick={next}
          className={`absolute right-0 top-1/3 p-2 rounded-full bg-white shadow-md transform -translate-y-1/2 ${
            currentIndex >= products.length - 3 ? 'invisible' : 'visible'
          }`}
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default BestAir