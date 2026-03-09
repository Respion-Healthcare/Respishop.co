"use client"

import { useEffect } from "react"

type Props = {
  show: boolean
  onClose: () => void
}

export default function AddToCartPopup({ show, onClose }: Props) {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <div
      className={`fixed top-24 left-0 z-[100] transform transition-transform duration-300 ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-green-600 text-white px-6 py-4 rounded-r-lg shadow-xl flex items-center gap-3">

        <span className="text-lg">✅</span>

        <div>
          <p className="font-semibold">
            Added to Cart
          </p>
          <p className="text-sm text-green-100">
            Product successfully added
          </p>
        </div>

      </div>
    </div>
  )
}