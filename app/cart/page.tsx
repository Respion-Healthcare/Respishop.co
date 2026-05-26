"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react"

export default function CartPage() {

  const { cart, removeFromCart, addToCart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {

    return (

      <div className="min-h-screen bg-gray-50 pt-28 px-6">

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-14 text-center">

          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-500" />
          </div>

          <h1 className="text-3xl font-semibold mb-3">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mb-8">
            Looks like you haven’t added anything yet.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-900 transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    )
  }

  return (

    <div className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-sm border p-5 flex gap-5"
              >

                {/* Image */}
                <div className="w-[120px] h-[120px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />

                </div>

                {/* Content */}
                <div className="flex-1">

                  <h2 className="font-semibold text-lg leading-snug">
                    {item.name}
                  </h2>

                  {item.packageName && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.packageName}
                    </p>
                  )}

                  <p className="text-2xl font-bold mt-3">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  {/* Qty */}
                  <div className="flex items-center justify-between mt-5">

                    <div className="flex items-center border rounded-xl overflow-hidden">

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-5 font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          addToCart({
                            ...item,
                            quantity: 1,
                          })
                        }
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Summary */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <h2 className="text-2xl font-semibold mb-8">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t pt-5 flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

              </div>

              <Link
                href="/checkout"
                className="mt-8 block w-full text-center bg-black text-white py-4 rounded-2xl font-medium hover:bg-gray-900 transition"
              >
                Proceed to Checkout
              </Link>

            </div>

            {/* Trust */}
            <div className="bg-white rounded-3xl shadow-sm border p-6 space-y-5">

              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5" />
                <p className="text-sm text-gray-700">
                  Fast delivery across India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                <p className="text-sm text-gray-700">
                  100% Secure Payments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="w-5 h-5" />
                <p className="text-sm text-gray-700">
                  Genuine ResMed Products
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}