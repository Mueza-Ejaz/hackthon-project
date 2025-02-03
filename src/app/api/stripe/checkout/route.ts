// /src/app/api/stripe/checkout/route.ts

import { Product } from '@/statelibrary';
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

    // Map cart items to Stripe line items
    const lineItems = addCart.map((item: Product) => {
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
            },
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: 1, // or use item.quantity if needed
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
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
