import { atom } from "jotai";
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
export interface Billing{
  fullName: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
}



const initialBillingDetails:Billing = {
  fullName: "shahoz",
  phoneNumber: "03003666930",
  email: "s@gmail.com",
  addressLine1: "12",
  addressLine2: "",
  city: "karachi",
}


export const customerFormDetails = atom<Billing>(initialBillingDetails);





// Cart Item Type (extending Product)
export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

// Cart items atom (using local storage)
export const cartsItems = atomWithStorage<CartItem[]>("cartItems", []);

// Wishlist items atom (using local storage)
export const wishlistItems = atomWithStorage<Product[]>("wishlistItems", []);
export const searchValue = atom<string>('');
