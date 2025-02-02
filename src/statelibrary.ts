import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'



interface Products {
    name: string;
    quantity: number;
    id: string;
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
  
  interface Params {
    id: string;
  }



export const cartsItems = atomWithStorage<Products []>('cartsItems', [])