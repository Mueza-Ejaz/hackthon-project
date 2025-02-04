'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  _id: string;
  image: string;
  productName: string;
  category: string;
  price: number;
}

const AutoSlider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        "image": image.asset->url,
        productName,
        category,
        price
      }`;
      const sanityProducts = await client.fetch(query);
      setProducts(sanityProducts);
    };

    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-60">
                <Link href={`/allproduct/${product._id}`}>
                  <Image
                    src={product.image}
                    alt={product.productName}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-center font-semibold text-gray-800 truncate">
                  {product.productName}
                </h3>
                <p className="text-center text-sm text-gray-600 truncate">
                  {product.category}
                </p>
                <p className="text-center font-semibold text-gray-900">
                  RS {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
