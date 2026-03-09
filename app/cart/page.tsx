"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
      </div>
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-3xl font-semibold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-6">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b pb-6"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
            />

            <div className="flex-1">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-gray-600">
                ₹{item.price}
              </p>
            </div>

            <p>Qty: {item.quantity}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}

      </div>

      <div className="mt-10 text-right">
        <h2 className="text-2xl font-semibold">
          Total: ₹{total.toLocaleString()}
        </h2>
      </div>

    </div>
  )
}