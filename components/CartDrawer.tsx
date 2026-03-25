"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
// import { getFinalPrice } from "@/lib/pricing"
export default function CartDrawer({ open, setOpen }: any) {

  const { cart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <>
      {/* Background overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          <h2 className="text-xl font-semibold mb-6">
            Your Cart
          </h2>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto space-y-4">

            {cart.length === 0 && (
              <p className="text-gray-500">
                Your cart is empty
              </p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                />

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    ₹{item.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="border-t pt-4">

            <p className="font-semibold mb-4">
              Total: ₹{total.toLocaleString()}
            </p>

            <Link
              href="/cart"
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg mb-3"
            >
              View Cart
            </Link>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg">
              Checkout
            </button>

          </div>

        </div>
      </div>
    </>
  )
}