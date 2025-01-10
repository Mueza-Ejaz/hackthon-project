import React from "react"
import Image from "next/image"

const Feature = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Featured</h2>
      <div className="space-y-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            alt="Runner on a trail"
            className="object-cover w-full h-full mb-2"
            src="/features.png"
            width={1344}
            height={700}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight ">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-lg text-muted-foreground">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="rounded-full p-2 px-6 bg-black text-white hover:bg-black/90">
            Find Your Shoe
          </button>
        </div>
      </div>
    </section>
  );
};
export default Feature