"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react"

import AddToCartButton from "./AddToCartButton"

export default function ProductOptions({ product }: any) {
console.log(JSON.stringify(product, null, 2))  
  const [qty, setQty] = useState(1)
  const [pincode, setPincode] = useState("")
  const [accepted, setAccepted] = useState(false)

  const isMachine =
    product.category === "cpap-machine" ||
    product.category === "bipap-machine"

  const packageOptions = [
    {
      name: "AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube",
      price: "₹84,300",
    },
    {
      name: "AirSense™ 11 AutoSet™ 4G Tripack with One Mask",
      price: "₹88,235",
    },
    {
      name: "AirSense™ 11 AutoSet™ Combo (2 Masks + Extended Warranty)",
      price: "₹99,999",
    },
  ]

  const [selectedPackage, setSelectedPackage] = useState(
    packageOptions[0]
  )
const [wish, setWish] = useState(false)

const handleWishlist = () => {
  const wishlist = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  )

  const exists = wishlist.find(
    (item: any) => item.slug === product.slug
  )

  if (exists) {
    const updated = wishlist.filter(
      (item: any) => item.slug !== product.slug
    )

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    )

    setWish(false)
  } else {
    localStorage.setItem(
      "wishlist",
      JSON.stringify([...wishlist, product])
    )

    setWish(true)
  }
}
useEffect(() => {
  const wishlist = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  )

  const exists = wishlist.find(
    (item: any) => item.slug === product.slug
  )

  setWish(!!exists)
}, [product.slug])

  return (

    <div className="mt-6">

      {/* Package Offer */}
      {isMachine && (

        <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-5 shadow-sm">

          <div className="inline-flex items-center bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Limited Period Offer
          </div>

          <h3 className="mt-4 font-semibold text-gray-900">
            Select Package
          </h3>

          <select
            className="w-full mt-3 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black bg-white"
            value={selectedPackage.name}
            onChange={(e) => {
              const found = packageOptions.find(
                (item) => item.name === e.target.value
              )

              if (found) setSelectedPackage(found)
            }}
          >
            {packageOptions.map((item) => (
              <option
                key={item.name}
                value={item.name}
              >
                {item.name} | {item.price}
              </option>
            ))}
          </select>

        </div>

      )}

              {/* Wishlist */}
              <button
          onClick={handleWishlist}
          className="flex items-center gap-2 mt-5 text-sm text-gray-600 hover:text-red-500 transition"
        >
          <Heart
            className={`w-5 h-5 ${
              wish ? "fill-red-500 text-red-500" : ""
            }`}
          />

          {wish ? "Wishlisted" : "Add to Wishlist"}
        </button>

      {/* Quantity */}
      <div className="mt-7">

        <h3 className="font-medium text-gray-900 mb-3">
          Quantity
        </h3>

        <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden w-fit shadow-sm">

          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-5 py-3 hover:bg-gray-100 transition"
          >
            -
          </button>

          <span className="px-6 font-semibold">
            {qty}
          </span>

          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-5 py-3 hover:bg-gray-100 transition"
          >
            +
          </button>

        </div>

      </div>

      {/* Pincode */}
      <div className="mt-7">

        <h3 className="font-medium text-gray-900 mb-3">
          Check Availability
        </h3>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
          />

          <button
            className="bg-black text-white px-6 rounded-2xl hover:opacity-90 transition"
          >
            Check
          </button>

        </div>

      </div>

      {/* Consent */}
      {isMachine && (

        <div className="mt-6 flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4">

          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="mt-1"
          />

          <p className="text-xs text-gray-500 leading-relaxed">
            I accept that I am over 18 years of age,
            have read and accepted the Privacy Policy
            and Terms of Use, and consent to data sharing
            for delivery and communication purposes.
          </p>

        </div>

      )}

      {/* Buttons */}
      <div className="mt-7 space-y-3">

        <AddToCartButton
          product={product}
          quantity={qty}
          packageName={selectedPackage.name}
          disabled={isMachine ? !accepted : false}
        />

        <button
          className="w-full border border-black py-3.5 rounded-2xl font-medium hover:bg-black hover:text-white transition"
        >
          Enquire Now
        </button>

      </div>

      {/* Trust Badges */}
      <div className="mt-8 border-t border-gray-100 pt-6 space-y-4">

        <div className="flex items-center gap-3 text-sm text-gray-700">

          <Truck className="w-5 h-5 text-gray-500" />

          <span>
            Fast delivery across India
          </span>

        </div>

        <div className="flex items-center gap-3 text-sm text-gray-700">

          <ShieldCheck className="w-5 h-5 text-gray-500" />

          <span>
            100% Secure Payments
          </span>

        </div>

        <div className="flex items-center gap-3 text-sm text-gray-700">

          <BadgeCheck className="w-5 h-5 text-gray-500" />

          <span>
            Genuine ResMed Products
          </span>

        </div>

      </div>

    </div>

  )
}