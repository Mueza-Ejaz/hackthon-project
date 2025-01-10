import React from "react"
import Image from "next/image"


const AddToCart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/p3.png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={653}
            height={653}
            className="object-contain p-8"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6 mx-20">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nike Air Forces 1 PLT.AF.ORM
            </h1>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add elevated appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹ 8,695.00</div>
            </div>
            
            <button className="w-full md:w-auto px-8 bg-black hover:bg-gray-600 rounded-3xl text-white p-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default AddToCart