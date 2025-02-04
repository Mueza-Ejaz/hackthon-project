'use client';

import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import ClipLoader from 'react-spinners/ClipLoader';
import { Billing, cartsItems, customerFormDetails } from '@/statelibrary';

interface CheckoutButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onClick }) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [carts] = useAtom(cartsItems);
  const [billingDetails] = useAtom<Billing>(customerFormDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load Stripe.js with publishable key
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      .then((loadedStripe) => setStripe(loadedStripe))
      .catch((error) => console.error('Error loading Stripe:', error));
  }, []);

  const handleCheckout = async () => {
    if (!stripe) {
      console.error('Stripe has not loaded yet!');
      return;
    }

    if (carts.length === 0) {
      console.error('No items in the cart!');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addCart: carts, billingDetails }),
      });

      if (!res.ok) {
        console.error('Failed to create checkout session');
        setLoading(false);
        return;
      }

      const { sessionId } = await res.json();

      if (sessionId) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe Checkout Error:', error);
          setLoading(false);
        }
      } else {
        console.error('No session ID returned from server');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      setLoading(false);
    }
  };

  // Reverse logic for disabling button
  const isDisabled = stripe && carts.length > 0 && !loading;
  const handleClick = isDisabled ? handleCheckout : onClick;

  return (
    <motion.button
      className={`${
        isDisabled ? 'bg-blue-500 hover:bg-green-700' : 'bg-gray-500 cursor-not-allowed'
      } w-full text-white p-3 rounded-md mt-4 flex justify-center items-center`}
      onClick={handleClick}
      disabled={!isDisabled}
      initial={{ scale: 1 }}
      whileHover={{ scale: isDisabled ? 1.03 : 1 }}
      whileTap={{ scale: isDisabled ? 0.98 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {loading ? <ClipLoader size={30} color="#fff" loading={loading} /> : 'Checkout'}
    </motion.button>
  );
};

export default CheckoutButton;
