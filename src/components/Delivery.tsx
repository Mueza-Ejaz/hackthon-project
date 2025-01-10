import { Heart, Trash2 } from "lucide-react";
import Image from "next/image";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8 ">
        {/* Free Delivery Banner */}

        <div className="bg-gray-100 py-2 px-4 mb-2 w-full md:w-[45rem] lg:w-[52rem] ">
          <div className="container  flex items-start justify-start text-md font-semibold">
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600">
              Applies to orders of ₹14,995.00 or more
            </span>
            <button className="text-gray-600 underline">View Details</button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 ">
          {/* Main Cart Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bag Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Bag</h2>
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex gap-4 border-b pb-4 ">
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/images/order1.png"
                      alt="Nike DRI-FIT ADV TechKnit Ultra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">
                          Nike DRI-FIT ADV TechKnit Ultra
                        </h3>
                        <p className="text-sm text-gray-500">
                          Mens Short-Sleeve Running Top
                        </p>
                        <p className="text-sm text-gray-500">
                          Ashen Slate/Glacier Blue
                        </p>
                        <div className="mt-1 flex gap-4 text-sm text-gray-500">
                          <p>Size: L</p>
                          <p>Quantity: 1</p>
                        </div>
                      </div>
                      <p className="font-medium">MRP:₹3995.00</p>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                        <Heart className="h-6 w-6" />
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600">
                        <Trash2 className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 border-b pb-4 ">
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/men1.png"
                      alt="Nike Air Max 97 SE"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Nike Air Max 97 SE</h3>
                        <p className="text-sm text-gray-500">Mens Shoes</p>
                        <p className="text-sm text-gray-500">
                          Flat Pewter/Light Bone/Black/White
                        </p>
                        <div className="mt-1 flex gap-4 text-sm text-gray-500">
                          <p>Size: 9</p>
                          <p>Quantity: 1</p>
                        </div>
                      </div>
                      <p className="font-medium">MRP:₹16995.00</p>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                        <Heart className="h-6 w-6" />
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600">
                        <Trash2 className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Summary Section */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹20990.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Delivery & Handling</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹20990.00</span>
                  </div>
                </div>
                <button className="w-full bg-black p-2 py-3 text-white hover:bg-gray-700 rounded-3xl">
                  Member Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delivery
