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
}

// Cart Item Type (extending Product)
export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

// Cart items atom (using local storage)
export const cartsItems = atomWithStorage<CartItem[]>("cartItems", []);

// Wishlist items atom (using local storage)
export const wishlistItems = atomWithStorage<Product[]>("wishlistItems", []);
