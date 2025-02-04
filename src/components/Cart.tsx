'use client'
import { wishlistItems } from '@/statelibrary';  // Import wishlist atom
import { useAtom } from 'jotai'; // Use atom hook
import { FaHeart } from 'react-icons/fa'; 
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    // Prevent duplicate addition
    const itemExists = wishlist.some((wishlistItem) => wishlistItem._id === item._id);
    if (!itemExists) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  };

  return (
    <motion.div
      key={item._id}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#f5f5f5]">
        <Link href={`/allproduct/${item._id}`}>
          <Image
            src={item.image}
            alt={item.productName}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{item.productName}</h2>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-sm mt-1 text-gray-700 line-clamp-2">{item.description}</p>
        <p className="text-xl font-semibold mt-2 text-gray-800">RS {item.price}</p>
        <p className="text-sm text-gray-500 mt-1">Status: {item.status}</p>
        <p className="text-sm text-gray-500">Inventory: {item.inventory}</p>
        {item.colors.length > 0 && (
          <div className="mt-2">
            <span className="text-sm font-semibold text-gray-700">Available Colors:</span>
            <div className="flex gap-2 mt-1">
              {item.colors.map((color: string, index: number) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
        {/* Heart Icon to Add Item to Wishlist */}
        <button
          onClick={addToWishlist}
          className={`absolute top-3 right-3 p-1 rounded-full bg-white shadow-md ${
            isInWishlist ? 'text-red-500' : 'text-gray-500'
          }`}
          title="Add to Wishlist"
        >
          <FaHeart size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default Cart;
