"use client"

import { useCart } from "@/context/CartContext"
import { useState } from "react"
import CartDrawer from "./CartDrawer"
import AddToCartPopup from "./AddToCartPopup"
import { getFinalPrice } from "@/lib/pricing"

export default function AddToCartButton({ product }: any) {

  const { addToCart } = useCart()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleAdd = () => {

    addToCart({
      id: product.id,
      name: product.name,
      price: getFinalPrice(product),
      image: product.images[0],
      quantity: 1,
    })

    // Show popup first
    setShowPopup(true)

    // Open cart drawer after delay
    setTimeout(() => {
      setDrawerOpen(true)
    }, 800)
  }

  return (
    <>
      <button
        onClick={handleAdd}
        className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500"
      >
        Add to Cart
      </button>

      {/* Popup */}
      <AddToCartPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* Drawer */}
      <CartDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  )
}