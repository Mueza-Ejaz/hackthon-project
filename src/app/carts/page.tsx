'use client';

import { useAtom } from 'jotai';
import { cartsItems } from '@/statelibrary';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
  const [carts, setCarts] = useAtom(cartsItems);

  const updateQuantity = (id: string, amount: number) => {
    setCarts((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCarts((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = carts.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6" /> Your Cart
      </h1>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2 space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border"
              >
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="border border-gray-300 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    className="border border-gray-300 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-gray-900 text-lg mb-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}