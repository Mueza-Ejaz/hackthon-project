'use client';

import { useAtom } from 'jotai';
import { cartsItems } from '@/statelibrary';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function CartPage() {
  const [carts, setCarts] = useAtom(cartsItems);
  const ClickSound = ()=>{
    const audio = new Audio('/sounds/mouse.mp3');
    audio.play();
  }
  const DeleteSound = ()=>{
    const audio = new Audio('/sounds/sound.wav');
    audio.play();
  }

  const updateQuantity = (id: string, amount: number) => {
    ClickSound()
    setCarts((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCarts((prevCart) => prevCart.filter((item) => item._id !== id));
    DeleteSound()
  };



  const subtotal = carts.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 md:p-6 min-h-screen">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" /> Your Cart
      </h1>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-6">
          <div className="md:col-span-2 space-y-3 md:space-y-4">
            {carts.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-white p-3 md:p-4 rounded-lg shadow-md border"
              >
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
                  <Image 
                    src={item.image} 
                    alt={item.productName} 
                    width={80} 
                    height={80} 
                    className="rounded-lg w-16 h-16 md:w-20 md:h-20"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-base md:text-lg font-medium text-gray-900">{item.productName}</h2>
                    <p className="text-sm md:text-base text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3 md:mt-0">
                  <button
                    className="border border-gray-300 bg-gray-200 text-gray-700 p-1.5 md:p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-base md:text-lg font-medium min-w-[30px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    className="border border-gray-300 bg-gray-200 text-gray-700 p-1.5 md:p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    className="bg-red-500 text-white p-1.5 md:p-2 rounded-md hover:bg-red-600 ml-2"
                    onClick={() => removeItem(item._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border h-fit md:sticky md:top-20">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm md:text-base text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base text-gray-600 mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-gray-900 text-base md:text-lg mb-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale:1 }}>
      <Link
        href="/checkout"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none block text-center"
      >
        Place Order
      </Link>
    </motion.div>
            
          </div>
        </div>
      )}
    </div>
  );
}