// /src/app/api/stripe/checkout/route.ts

import { CartItem } from '@/statelibrary';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!stripeSecretKey) throw new Error("Stripe Secret Key is missing");
if (!baseUrl) throw new Error("Base URL is missing");

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-01-27.acacia",
});

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body
    const { addCart, billingDetails } = await req.json();

    // Validate addCart and billingDetails
    if (!addCart || !Array.isArray(addCart)) {
      return NextResponse.json({ error: "Invalid cart data" }, { status: 400 });
    }

    if (!billingDetails || typeof billingDetails !== "object") {
      return NextResponse.json({ error: "Invalid billing details" }, { status: 400 });
    }

    // Calculate the overall total price (in dollars)
    const totalPrice = addCart.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );

    // Map cart items to Stripe line items
    const lineItems = addCart.map((item: CartItem) => {
      if (isNaN(item.price)) {
        throw new Error(`Invalid price for item: ${item.productName}`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
            images: [item.image],
            metadata: {
              heading: 'Product Details',
              // You can add more metadata if needed (for example, selectedColor)
            },
          },
          // Use the unit price (in cents)
          unit_amount: Math.round(item.price * 100),
        },
        // Pass the actual quantity of the item
        quantity: item.quantity,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      // Append the total amount (in cents) as a query parameter to the success URL
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      // Alternatively, you can pass the total in metadata:
      // metadata: { total: Math.round(totalPrice * 100).toString() },
    });

    // Return session ID
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};
