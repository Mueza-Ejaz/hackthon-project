"use client";

import { useState } from "react";
import Image from "next/image";

const CheckoutForm = () => {
  const [] = useState("pickup");

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Form Section */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                How would you like to get your order?
              </h2>
              <p className="mr-16">
                Customs regulation for India require a copy of the recipients
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs including sharing it with
                customs officials for all orders and returns. If your KYC does
                not match your shipping address please click the link for more
                information. Learn More
              </p>
            </div>

            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Enter your name and address
              </h2>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      placeholder="First name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      placeholder="Last name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 1
                  </label>
                  <input
                    id="address1"
                    placeholder="Street address"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 2
                  </label>
                  <input
                    id="address2"
                    placeholder="Apartment suite etc."
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 3
                  </label>
                  <input
                    id="address3"
                    placeholder="Additional address info"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      placeholder="Postal code"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="locality"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Locality
                    </label>
                    <input
                      id="locality"
                      placeholder="City/Town"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Whats your contact information?
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* PAN Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Whats your PAN?</h2>
              <div>
                <label
                  htmlFor="pan"
                  className="block text-sm font-medium text-gray-700"
                >
                  PAN
                </label>
                <input
                  id="pan"
                  placeholder="Enter your PAN"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Continue
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="relative h-24 w-20 overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src="/images/order1.png"
                      alt="Gray T-shirt"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Acme Men - Neck T-Shirt</h3>
                    <p className="text-sm text-gray-500">Size: M | Qty: 1</p>
                    <p className="font-medium">₹599.00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="relative h-24 w-20 overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src="/images/order2.png"
                      alt="Gray Sneakers"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Nike Air Max</h3>
                    <p className="text-sm text-gray-500">Size: 9 | Qty: 1</p>
                    <p className="font-medium">₹7995.00</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹8594.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Taxes</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total</span>
                    <span>₹8594.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutForm;
