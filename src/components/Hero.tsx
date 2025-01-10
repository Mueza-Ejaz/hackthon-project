import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-8">
    <div className="text-center mb-4">
      <p className="text-md font-semibold">Hello Nike App</p>
      <p className="text-sm text-gray-800">Download the app to receive everything Nike. Get Your Great!</p>
    </div>

    <div className="relative w-full aspect-[16/9] mb-8">
      <Image
        src="/nike.png"
        alt="Nike Air Max Pulse"
        height={977}
        width={1344}
      />

    </div>

    <div className="text-center max-w-2xl mx-auto mb-8">
      <p className="text-xs uppercase tracking-wider mb-4">First Look</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
      <p className="text-gray-800 mb-8">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        — designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex justify-center gap-4">
        <button  className="bg-black text-white hover:bg-gray-800 p-2 px-6 rounded-3xl">
          Notify Me
        </button>
        <button  className="bg-black text-white hover:bg-gray-800 p-2 px-6 rounded-3xl">
          Shop Air Max
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero