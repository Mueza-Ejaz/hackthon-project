
import { atomWithStorage } from "jotai/utils";



// types.ts
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

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export const cartsItems = atomWithStorage<CartItem[]>("cartItems", []);
