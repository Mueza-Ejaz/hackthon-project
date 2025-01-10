import { ProductCard } from "./Product_Card"



const products = [
  {
    name: "Nike Air Force 1 Mid '07",
    price: "9,695.00",
    imageUrl: "/p1.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/p2.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 PLT.AF.ORM",
    price: "8,195.00",
    imageUrl: "/p3.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 React",
    price: "11,895.00",
    imageUrl: "/p4.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Air Jordan 1 Elevate Low",
    price: "7,995.00",
    imageUrl: "/p5.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Standard Issue",
    price: "3,695.00",
    imageUrl: "/p6.png",
    category: "Women's Dress",
    isNewArrival: false
  },
  {
    name: "Nike Dunk Low Retro SE",
    price: "9,695.00",
    imageUrl: "/p7.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    price: "5,695.00",
    imageUrl: "/p17.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Dri-FIT UV Hyverse",
    price: "8,195.00",
    imageUrl: "/p8.png",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    isNewArrival: true
  },
  {
    name: "Nike Court Vision Low",
    price: "11,895.00",
    imageUrl: "/p9.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Dri-FIT Ready",
    price: "7,995.00",
    imageUrl: "/p10.png",
    category: "Men's Short-Sleeve Fitness Top",
    isNewArrival: false
  },
  {
    name: "Nike One Leak Protection: Period",
    price: "3,695.00",
    imageUrl: "/p11.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 LV8 3",
    price: "5,695.00",
    imageUrl: "/p12.png",
    category: "Older Kids' Shoe",
    isNewArrival: true
  },
  {
    name: "Nike Blazer Low Platform",
    price: "8,195.00",
    imageUrl: "/p13.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07",
    price: "11,895.00",
    imageUrl: "/p14.png",
    category: "Women's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Pro Dri-FIT",
    price: "7,995.00",
    imageUrl: "/p16.png",
    category: "Men's Tight-Fit Sleeveless Top",
    isNewArrival: false
  },
  {
    name: "Nike Dunk Low Retro",
    price: "3,695.00",
    imageUrl: "/p17.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Air Max SC",
    price: "3,695.00",
    imageUrl: "/p18.png",
    category: "Women's Dress",
    isNewArrival: true
  },
  {
    name: "Nike Air Force 1 '07",
    price: "7,995.00",
    imageUrl: "/p19.png",
    category: "Men's Shoes",
    isNewArrival: false
  },
  {
    name: "Nike Air Max SYSTM",
    price: "3,695.00",
    imageUrl: "/p2.png",
    category: "Older Kids' Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Alate All U",
    price: "5,695.00",
    imageUrl: "/p21.png",
    category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    isNewArrival: true
  },
  {
    name: "Nike Court Legacy Lift",
    price: "8,195.00",
    imageUrl: "/p22.png",
    category: "Women's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Swoosh",
    price: "5,695.00",
    imageUrl: "/p23.png",
    category: "Women's Medium-support Padded Sports Bra Tank",
    isNewArrival: true
  },
  {
    name: "Nike SB Zoom Janoski OG+",
    price: "8,195.00",
    imageUrl: "/p24.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Dri-FIT Run Division Rise 365",
    price: "11,895.00",
    imageUrl: "/p25.png",
    category: "Men's Running Tank",
    isNewArrival: false
  },
  {
    name: "Nike Dri-FIT Challenger",
    price: "7,995.00",
    imageUrl: "/p26.png",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    isNewArrival: false
  },
  {
    name: "Jordan Series ES",
    price: "3,695.00",
    imageUrl: "/p27.png",
    category: "Men's Shoes",
    isNewArrival: true
  },
  {
    name: "Nike Outdoor Play",
    price: "3,695.00",
    imageUrl: "/p28.png",
    category: "Older Kids' Oversized Woven Jacket",
    isNewArrival: true
  },
  {
    name: "Nike Sportswear Trend",
    price: "5,695.00",
    imageUrl: "/p29.png",
    category: "Older Kids' (Girls') High-waisted Woven Shorts",
    isNewArrival: true
  },
  {
    name: "Nike Blazer Low '77 Jumbo",
    price: "8,195.00",
    imageUrl: "/p30.png",
    category: "Women's Shoes",
    isNewArrival: true
  },

]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
  )
}