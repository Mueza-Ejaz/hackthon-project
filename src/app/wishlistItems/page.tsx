// pages/wishlist.tsx
"use client"
import { wishlistItems } from '@/statelibrary'; // Import the wishlist atom
import { useAtom } from 'jotai'; // Use atom hook
import { FaTrash } from 'react-icons/fa'; // Icon for deleting items
import Image from 'next/image';
import Link from 'next/link';

const Wishlist = () => {
  const [wishlist, setWishlist] = useAtom(wishlistItems); // Get wishlist from atom

  // Function to remove item from wishlist
  const removeFromWishlist = (itemId: string) => {
    setWishlist(wishlist.filter(item => item._id !== itemId)); // Remove item by ID
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
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

                {/* Button to remove item from wishlist */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="text-red-500 mt-2 flex items-center gap-2"
                >
                  <FaTrash size={16} /> Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
