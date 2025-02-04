'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Billing, cartsItems, customerFormDetails } from '@/statelibrary';
import CheckoutButton from '@/components/CheckOutButton';

const BillingSummary = () => {
  const [addCart] = useAtom(cartsItems);
  const [billingDetails, setBillingDetails] = useAtom<Billing>(customerFormDetails);
  const [cashOnDeliveryClicked, setCashOnDeliveryClicked] = useState(false);
  const [payWithStripeClicked, setPayWithStripeClicked] = useState(false);

  // Validation: required fields are Full Name, Phone Number, Email, Address Line 1 and City.
  const phoneRegex = /^[0-9]{11}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid = () => {
    const { fullName, phoneNumber, email, addressLine1, city } = billingDetails;
    return (
      fullName.trim() !== '' &&
      phoneRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      addressLine1.trim() !== '' &&
      city.trim() !== ''
    );
  };

  const handleCashOnDeliveryClick = () => {
    if (!isFormValid()) return;
    setCashOnDeliveryClicked(true);
    setPayWithStripeClicked(false);
    // Add any additional Cash on Delivery logic here.
  };

  const handleStripeClick = () => {
    if (!isFormValid()) return;
    setPayWithStripeClicked(true);
    setCashOnDeliveryClicked(false);
    // Additional logic if needed.
  };

  // Form must be valid for buttons to be enabled.
  const isButtonEnabled = isFormValid();

  return (
    <div className="bg-[#f7f7f7] min-h-screen overflow-x-hidden max-w-[800px] mx-auto text-black">
      <motion.div
        className="container mx-auto px-2 sm:px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <Link href="/carts" className="text-[#333] hover:underline transition-all">
            <FaArrowLeft className="text-lg sm:text-xl" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#333]">
            Your Cart Summary
          </h1>
        </div>
      </motion.div>

      {/* Cart Items */}
      <motion.div
        className="container mx-auto px-2 sm:px-4 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="w-full min-w-[600px] text-left table-auto">
            <thead className="bg-[#1f2937] text-white uppercase text-sm sm:text-base">
              <tr>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {addCart.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-xl text-gray-500">
                    Your Cart Is Empty
                  </td>
                </tr>
              ) : (
                addCart.map((item) => (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <td className="py-3 px-4">{item.productName}</td>
                    <td className="py-3 px-4">${item.price}</td>
                    <td className="py-3 px-4 text-center">{item.quantity}</td>
                    <td className="py-3 px-4">${item.price * item.quantity}</td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Billing Form */}
      <motion.div
        className="container mx-auto px-2 sm:px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Billing Details</h2>
          <form className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={billingDetails.fullName}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, fullName: e.target.value })
              }
              className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={billingDetails.phoneNumber}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, phoneNumber: e.target.value })
              }
              className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={billingDetails.email}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition"
              required
            />
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={billingDetails.addressLine1}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, addressLine1: e.target.value })
              }
              className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, city: e.target.value })
              }
              className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition"
              required
            />
          </form>

          <div className="flex flex-col space-y-4 mt-6">
            {/* Pay with Stripe Button */}
            <div onClick={handleStripeClick}>
              {isButtonEnabled && !cashOnDeliveryClicked ? (
                <CheckoutButton />
              ) : (
                <motion.button
                  className="bg-gray-500 cursor-not-allowed w-full text-white p-3 rounded-md flex justify-center items-center"
                  disabled
                >
                  Pay with Stripe
                </motion.button>
              )}
            </div>

            {/* Cash on Delivery Button */}
            <div onClick={handleCashOnDeliveryClick}>
              <Link href={isButtonEnabled && !payWithStripeClicked ? '/success' : '#'}>
                <motion.button
                  className={`w-full mt-4 py-3 rounded-md text-white ${
                    isButtonEnabled && !payWithStripeClicked
                      ? 'bg-[#007BFF] hover:bg-green-600'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!isButtonEnabled || payWithStripeClicked}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: isButtonEnabled && !payWithStripeClicked ? 1.03 : 1 }}
                  whileTap={{ scale: isButtonEnabled && !payWithStripeClicked ? 0.98 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Cash on Delivery
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BillingSummary;
