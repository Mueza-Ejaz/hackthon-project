import React from "react"
import Image from "next/image"

export function DontMiss() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-lg font-medium">Don&apos;t Miss</h2>
        
        <div className=" ">
          <div className="relative  w-full overflow-hidden">
            <Image
              alt="Person wearing Jordan Brand clothing by the waterfront"
              className="object-cover w-full h-full"
              src="/essantial.png"
              height={700}
              width={1344}
            />
          </div>
          
        
        </div>
        
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-lg text-muted-foreground">
            Your built-to-last, all-week wants—but with style only Jordan Brand can deliver.
          </p>
          <button  className="rounded-full bg-black text-white font-medium hover:bg-black/90 p-2 px-6">
            Shop
          </button>
        </div>
      </div>
    </section>
  )
}