import { atomWithStorage } from "jotai/utils";

// Product Type
export interface Product {
  _id: string;
  image: string;
  description: string;
  price: number;
  category: string;
  status: string;
  inventory: number;
  colors: string[];
  productName: string;
  // Add any other fields from your Sanity schema
}

// Cart Item Type (extending Product)
export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

// Wishlist Item Type (same structure as CartItem)
export interface WishlistItem extends Product {}

// Cart items atom (using local storage)
export const cartsItems = atomWithStorage<CartItem[]>("cartItems", []);

// Wishlist items atom (using local storage)
export const wishlistItems = atomWithStorage<WishlistItem[]>("wishlistItems", []);
