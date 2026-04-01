"use client"

import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  size: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([])

  // ✅ Load cart from localStorage when site loads
  useEffect(() => {
    const savedCart = localStorage.getItem("respishop-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // ✅ Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("respishop-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }

      return [...prev, item]
    })
  }

  // ✅ UPDATED REMOVE FUNCTION (Decrease quantity first)
  const removeFromCart = (id: number) => {
    setCart((prev) => {

      const updatedCart = prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)

      return updatedCart
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}   