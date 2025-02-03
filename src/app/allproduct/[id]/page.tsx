"use client";

import { client } from "@/sanity/lib/client";
import { cartsItems } from "@/statelibrary";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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

interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

interface Params {
  id: string;
}

const ProductDetail = ({ params }: { params: Params }) => {
  const [cart, setCart] = useAtom<CartItem[]>(cartsItems);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == "${params.id}"]{
          colors,_id, status, category, price, description,
          "image":image.asset->url, inventory, productName
        }[0]`;

        const fetchedProduct: Product = await client.fetch(query);
        setProduct(fetchedProduct);


        if (fetchedProduct?.colors?.length > 0) {
          setSelectedColor(fetchedProduct.colors[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);


  const playSound = (filePath: string) => {
    const audio = new Audio(filePath);
    audio.play().catch((error) => console.error("Audio play error:", error));
  };

  const handleAddToCart = () => {
    if (!product || !selectedColor) return;

    const existingItem = cart.find(
      (item) => item._id === product._id && item.selectedColor === selectedColor
    );

    if (existingItem) {
      if (existingItem.quantity + quantity > product.inventory) {
        toast.error("Exceeds available inventory");
        return;
      }

      const updatedCart = cart.map((item) =>
        item._id === product._id && item.selectedColor === selectedColor
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      const newItem: CartItem = {
        ...product,
        quantity,
        selectedColor,
      };
      setCart([...cart, newItem]);
    }

    toast.success("Added to cart!");
    playSound("/sounds/sound.wav");
  };

  const increaseQuantity = () => {
    if (product && quantity < product.inventory) {
      setQuantity(quantity + 1);
      playSound("/sounds/mouse.mp3");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      playSound("/sounds/mouse.mp3");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-40 min-h-screen">
        <ClipLoader color="#3b82f6" size={50} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto text-center py-8">
        <p className="text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <motion.div
          className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={product.image}
            alt={product.productName}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.productName}
          </h1>

          <p className="text-2xl font-semibold text-blue-600">
            Rs {product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            {/* Colors */}
            <div className="flex items-center gap-2">
              <span className="font-medium">Colors:</span>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center gap-3 border rounded-lg px-4 py-2">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= product.inventory}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.inventory} available
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            disabled={!selectedColor}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default ProductDetail;
