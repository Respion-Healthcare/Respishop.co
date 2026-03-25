"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { getFinalPrice } from "@/lib/pricing"

export default function CartPage() {

  const { cart, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white p-10 rounded-xl shadow-sm">

          <h1 className="text-2xl font-semibold mb-4">
            Your cart is empty
          </h1>

          <Link
            href="/products"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>

        </div>
      </div>
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-semibold mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6"
              >

                <div className="w-24 h-24 flex items-center justify-center border rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">

                  <h2 className="font-medium text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-red-500 font-semibold mt-1">
                   ₹{item.price.toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* TOTAL BOX */}
          <div className="bg-white rounded-xl shadow-sm p-8 h-fit">

            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-6 text-lg font-semibold">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

           <Link
  href="/checkout"
  className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
  Proceed to Checkout
</Link>

          </div>

        </div>

      </div>

    </div>
  )
}