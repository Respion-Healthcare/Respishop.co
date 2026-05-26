"use client"

import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function CartDrawer({ open, setOpen }: any) {

  const { cart, removeFromCart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">

            <div>
              <h2 className="text-2xl font-semibold">
                Your Cart
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {cart.length} item(s)
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

            {cart.length === 0 && (
              <div className="text-center mt-20">

                <h3 className="text-lg font-medium">
                  Your cart is empty
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Add products to continue shopping
                </p>

              </div>
            )}

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 border rounded-2xl p-4"
              >

                <div className="w-[85px] h-[85px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-medium text-sm leading-snug">
                    {item.name}
                  </h3>

                  {item.packageName && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.packageName}
                    </p>
                  )}

                  <p className="text-lg font-semibold mt-2">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div className="flex items-center justify-between mt-3">

                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-3 text-sm">
                        {item.quantity}
                      </span>

                    </div>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Footer */}
          <div className="border-t p-6 bg-white">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-600">
                Total
              </p>

              <p className="text-2xl font-bold">
                ₹{total.toLocaleString("en-IN")}
              </p>

            </div>

            <div className="space-y-3">

              <Link
                href="/cart"
                className="block w-full text-center border border-black py-3 rounded-2xl font-medium hover:bg-black hover:text-white transition"
              >
                View Cart
              </Link>

              <button
                className="w-full bg-black text-white py-3 rounded-2xl font-medium hover:bg-gray-900 transition"
              >
                Checkout
              </button>

            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Secure checkout powered by Respishop
            </p>

          </div>

        </div>

      </div>
    </>
  )
}