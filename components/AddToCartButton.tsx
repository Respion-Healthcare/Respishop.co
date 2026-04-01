"use client"

import { useCart } from "@/context/CartContext"
import { useState } from "react"
import CartDrawer from "./CartDrawer"
import AddToCartPopup from "./AddToCartPopup"
import { getFinalPrice } from "@/lib/pricing"

export default function AddToCartButton({ product, quantity, size }: any) {

  const { addToCart } = useCart()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleAdd = () => {

    addToCart({
      id: product.id,
      name: product.name,
      price: getFinalPrice(product),
      image: product.images[0],
      quantity: quantity,
      size: size,
    })

    setShowPopup(true)

    setTimeout(() => {
      setDrawerOpen(true)
    }, 800)
  }

  return (
    <>
      <button
  onClick={handleAdd}
  disabled={!size}
  className={`w-full py-3 rounded-lg font-semibold ${
    !size ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"
  }`}
>
  {size ? "Add to Cart" : "Select Size First"}
</button>

      <AddToCartPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <CartDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  )
}