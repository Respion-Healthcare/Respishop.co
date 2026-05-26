"use client"

import { useCart } from "@/context/CartContext"
import { useState } from "react"
import CartDrawer from "./CartDrawer"
import AddToCartPopup from "./AddToCartPopup"
import { getFinalPrice } from "@/lib/pricing"
import { Loader2 } from "lucide-react"

interface Props {
  product: any
  quantity: number
  packageName?: string
  disabled?: boolean
}

export default function AddToCartButton({
  product,
  quantity,
  packageName,
  disabled,
}: Props) {

  const { addToCart } = useCart()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAdd = async () => {

    if (disabled) return

    setLoading(true)

    addToCart({
      id: product.id,
      name: product.name,
      price: getFinalPrice(product),
      image: product.images[0],
      quantity: quantity,
      packageName: packageName || null,
    })

    setShowPopup(true)

    setTimeout(() => {
      setDrawerOpen(true)
    }, 700)

    setTimeout(() => {
      setLoading(false)
    }, 900)
  }

  return (
    <>
      <button
        onClick={handleAdd}
        disabled={disabled || loading}
        className={`w-full py-3.5 rounded-2xl font-semibold transition flex items-center justify-center gap-2 ${
          disabled || loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500 text-black shadow-sm"
        }`}
      >

        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Adding...
          </>
        ) : disabled ? (
          "Accept Terms to Continue"
        ) : (
          "Add to Cart"
        )}

      </button>

      <AddToCartPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <CartDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
      />
    </>
  )
}