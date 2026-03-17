"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function CheckoutPage() {

  const { cart } = useCart()

  const [form, setForm] = useState<any>({})
  const [payment, setPayment] = useState("cod")
  const [agree, setAgree] = useState(false)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const placeOrder = () => {

  if (!agree) {
    alert("Please accept terms & conditions")
    return
  }

  const order = {
    id: Date.now(),
    items: cart,
    total,
    date: new Date().toLocaleString(),
    status: "Processing",
    address: form,
    paymentMethod: payment
  }

  const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
  const updatedOrders = [order, ...existingOrders]

  localStorage.setItem("orders", JSON.stringify(updatedOrders))

  localStorage.removeItem("cart")

  alert("Order placed successfully 🚀")

  // 🔥 FORCE reload so dashboard reads new data
  window.location.href = "/account/dashboard"
}

  return (

    <div className="min-h-screen bg-gray-50 pt-28 px-6">

      <div className="max-w-6xl mx-auto">

        

        <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

        {/* Coupon */}
        <div className="bg-white p-4 rounded-lg mb-6 text-sm">
          Have a coupon?{" "}
          <span className="text-blue-600 cursor-pointer">
            Click here to enter your code
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* Billing Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm">

              <h2 className="text-xl font-semibold mb-6">
                Billing details
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <input name="firstName" placeholder="First name *" onChange={handleChange} className="border p-3 rounded" />
                <input name="lastName" placeholder="Last name *" onChange={handleChange} className="border p-3 rounded" />

                <input name="company" placeholder="Company name (optional)" className="border p-3 rounded col-span-2" />

                <input value="India" readOnly className="border p-3 rounded col-span-2 bg-gray-100" />

                <input name="address1" placeholder="Street address *" onChange={handleChange} className="border p-3 rounded col-span-2" />
                <input name="address2" placeholder="Apartment, suite, unit, etc. (optional)" className="border p-3 rounded col-span-2" />

                <input name="city" placeholder="Town / City *" onChange={handleChange} className="border p-3 rounded" />
                <input value="Odisha" readOnly className="border p-3 rounded bg-gray-100" />

                <input name="pincode" placeholder="PIN Code *" onChange={handleChange} className="border p-3 rounded" />
                <input name="phone" placeholder="Phone *" onChange={handleChange} className="border p-3 rounded" />

                <input name="email" placeholder="Email address *" onChange={handleChange} className="border p-3 rounded col-span-2" />

              </div>

              {/* Additional Info */}
              <div className="mt-6">
                <h3 className="font-medium mb-2">Additional information</h3>
                <textarea
                  name="notes"
                  placeholder="Order notes (optional)"
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />
              </div>

            </div>

            {/* Payment */}
            <div className="bg-white p-6 rounded-xl shadow-sm">

              <h2 className="text-xl font-semibold mb-4">
                Payment information
              </h2>

              <label className="flex gap-2 mb-2">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                Cash on delivery
              </label>

              <p className="text-sm text-gray-500 mb-4">
                Pay with cash upon delivery.
              </p>

              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                I have read and agree to the website terms and conditions *
              </label>

            </div>

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">

            <h2 className="text-xl font-semibold mb-4">
              Order summary
            </h2>

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}