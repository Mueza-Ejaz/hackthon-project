"use client"
import { wishlistItems } from '@/statelibrary';  // Import wishlist atom
import { useAtom } from 'jotai'; // Use atom hook
import { FaHeart } from 'react-icons/fa'; 
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface Product {
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

const Cart = (item: Product) => {
  const [wishlist, setWishlist] = useAtom(wishlistItems);  // Access the wishlist atom

  // Check if the item is in the wishlist
  const isInWishlist = wishlist.some((wishlistItem) => wishlistItem._id === item._id);

  // Function to add item to wishlist
  const addToWishlist = () => {
    // Check if the item is already in the wishlist to prevent duplicates
    const itemExists = wishlist.some((wishlistItem) => wishlistItem._id === item._id);
    
    if (!itemExists) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);  // Add the item to wishlist
    }
  };

  return (
    <div key={item._id} className="bg-white rounded-lg shadow-md relative">
      <div className="bg-[#f5f5f5] rounded-t-lg">
        <Link href={`/allproduct/${item._id}`}>
        <Image
          src={item.image}
          alt={item.productName}
          width={300}
          height={300}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        </Link>
      </div>
      <div className="px-4 py-3">
        <h2 className="text-md font-bold">{item.productName}</h2>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-sm mt-1 text-gray-700 line-clamp-2">
          {item.description}
        </p>
        <p className="text-lg font-semibold mt-2 text-gray-800">
          RS {item.price}
        </p>
        <p className="text-sm text-gray-500">Status: {item.status}</p>
        <p className="text-sm">Inventory: {item.inventory}</p>
        {item.colors.length > 0 && (
          <div className="mt-2">
            <span className="text-sm font-semibold">
              Available Colors:
            </span>
            <div className="flex gap-2 mt-1">
              {item.colors.map((color: string, index: number) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
        {/* Heart Icon to Add Item to Wishlist */}
        <button
          onClick={addToWishlist}
          className={`absolute top-2 right-2 ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`}
          title="Add to Wishlist"
        >
          <FaHeart size={24} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
