"use client";

import { client } from "@/sanity/lib/client";
import { cartsItems } from "@/statelibrary";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface Products {
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

const ProductDetail = ({ params }: { params: Params }) => { 
  const [carts, setCarts] = useAtom<Products[]>(cartsItems);
  const [product, setProduct] = useState<Products | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);  // Default quantity
  const [selectedColor, setSelectedColor] = useState<string | null>(null);  // For color selection

  useEffect(() => {
    const fetchProduct = async () => {
      const query: string = `*[_type == "product" && _id == "${params.id}"]{
        colors,_id,
        status,
        category,
        price,
        description,
        "image":image.asset->url,
        inventory,
        productName
      }[0]`;

      const fetchedProduct: Products = await client.fetch(query);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);

    // Correct cart quantity calculation
    const totalItems = cartData.reduce((acc: number, item: any) => acc + (item.quantity || 0), 0);
    const totalPrice = cartData.reduce((acc: number, item: any) => acc + ((item.price || 0) * (item.quantity || 1)), 0);

    setCartCount(totalItems);
    setCartTotal(totalPrice);
  }, []);

  const addToCart = () => {
    if (!product) {
      console.error("Product is undefined, cannot add to cart.");
      return;
    }

    setCart([...carts, product]);
  };

  const handleAddToCart = () => {
    if (!product || !selectedColor) return;

    const cartItem = {
      _id: product._id,
      productName: product.productName,
      price: product.price * quantity,
      image: product.image,
      quantity,
      color: selectedColor,  // Store the selected color
    };

    let updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item: any) => item._id === cartItem._id && item.color === cartItem.color
    );

    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setIsAddedToCart(true);

    // Update cart count and total
    const totalItems = updatedCart.reduce((acc: number, item: any) => acc + item.quantity, 0);
    const totalPrice = updatedCart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

    setCartCount(totalItems);
    setCartTotal(totalPrice);

    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const increaseQuantity = () => {
    if (product?.inventory && quantity < product.inventory) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto flex justify-center items-center h-40 min-h-screen">
        <ClipLoader color="#3b82f6" size={50} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={product.image}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-sm border-2 border-zinc-900 "
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">{product.productName}</h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{product.description}</p>
          
          <p className="text-xl md:text-2xl font-semibold text-blue-600">RS {product.price.toFixed(2)}</p>

          {/* Quantity Adjuster */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
            >
              +
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <span className="text-gray-700">Select Color:</span>
            <div className="flex space-x-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Centered Add to Cart Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleAddToCart}
              className="w-1/2 sm:w-1/3 lg:w-1/4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
            </button>
          </div>

          {isAddedToCart && (
            <p className="text-green-600 mt-2 text-center">Product added to your cart!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
