"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function BestSellingSection() {

  // ✅ CART
  const { addToCart, cart } = useCart()

  // ✅ STATES
  const [wishlist, setWishlist] = useState<any[]>([])
  const [addedItems, setAddedItems] = useState<number[]>([])

  // ✅ LOAD WISHLIST
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  /* -------------------------------- */
  /* ADD TO CART */
  /* -------------------------------- */
  const handleAddToCart = (
    product: any,
    e: React.MouseEvent
  ) => {

    e.preventDefault()
    e.stopPropagation()

    // ✅ CHECK IF ALREADY EXISTS
    const alreadyInCart = cart.find(
      (item: any) => item.id === product.id
    )

    if (alreadyInCart) {
      alert("Already added to cart")
      return
    }

    // ✅ ADD PRODUCT
    addToCart({
      id: product.id,
      name: product.name,
      price: getFinalPrice(product),
      image: product.images[0],
      quantity: 1,
      size: "standard",
    })

    // ✅ BLUE EFFECT
    setAddedItems((prev) => [...prev, product.id])

    alert("Added to cart")

    // ✅ REMOVE EFFECT AFTER 2s
    setTimeout(() => {
      setAddedItems((prev) =>
        prev.filter((id) => id !== product.id)
      )
    }, 2000)
  }

  /* -------------------------------- */
  /* ADD TO WISHLIST */
  /* -------------------------------- */
  const addToWishlist = (
    product: any,
    e: React.MouseEvent
  ) => {

    e.preventDefault()
    e.stopPropagation()

    let wishlistItems: any[] = []

    try {
      const stored = localStorage.getItem("wishlist")

      wishlistItems = stored
        ? JSON.parse(stored)
        : []

    } catch {
      wishlistItems = []
    }

    const exists = wishlistItems.find(
      (item: any) => item.id === product.id
    )

    if (exists) {
      alert("Already in wishlist")
      return
    }

    wishlistItems.push(product)

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    )

    setWishlist(wishlistItems)

    alert("Added to wishlist")
  }

  return (
    <section className="w-full px-6 lg:px-20 py-20 bg-blue-50/40">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Best selling items
        </h2>

        <Link
          href="/products"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          View all products →
        </Link>

      </div>

      {/* GRID */}
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          filter: "blur(12px)",
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          scale: 1,
        }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >

        {products.slice(0, 10).map((product) => {

          const isAdded = addedItems.includes(product.id)

          return (
            <div
              key={product.id}
              className="group transition-transform duration-300 hover:-translate-y-2"
            >

              {/* PRODUCT CARD */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 flex justify-center items-center hover:shadow-xl transition overflow-hidden">

                {/* OFFER BADGE */}
                {product.offer?.type === "percentage" && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                    {product.offer.value}% OFF
                  </span>
                )}

                {product.offer?.type === "flat" && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                    ₹{product.offer.value} OFF
                  </span>
                )}

                {/* WISHLIST */}
                <button
                  onClick={(e) =>
                    addToWishlist(product, e)
                  }
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition z-20"
                >
                  <Heart size={18} />
                </button>

                {/* IMAGE */}
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="w-full"
                >

                  <div className="relative w-full h-52">

                    {/* MAIN IMAGE */}
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-300 group-hover:opacity-0"
                    />

                    {/* HOVER IMAGE */}
                    <Image
                      src={
                        product.images[1] ||
                        product.images[0]
                      }
                      alt={product.name}
                      fill
                      className="object-cover absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100"
                    />

                  </div>

                </Link>

                {/* ADD TO CART */}
                <button
                  onClick={(e) =>
                    handleAddToCart(product, e)
                  }
                  className={`absolute bottom-3 right-3 p-2 rounded-full transition-all duration-300 z-20 shadow-md
                    ${
                      isAdded
                        ? "bg-blue-600 text-white scale-110"
                        : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
                    }
                  `}
                >
                  {isAdded ? (
                    <Check size={16} />
                  ) : (
                    <ShoppingCart size={16} />
                  )}
                </button>

              </div>

              {/* PRODUCT INFO */}
              <Link
                href={`/products/${product.category}/${product.slug}`}
              >

                <div className="mt-4 space-y-1 cursor-pointer">

                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Best Selling Products
                  </p>

                  <h3 className="text-gray-800 text-sm leading-relaxed">
                    {product.name}
                  </h3>

                  {/* PRICE */}
                  <div className="flex items-center gap-2 mt-1">

                    <span className="text-red-500 font-semibold">
                      ₹
                      {getFinalPrice(product).toLocaleString(
                        "en-IN"
                      )}
                    </span>

                    {product.offer && (
                      <span className="text-gray-400 line-through text-xs">
                        ₹
                        {product.price.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    )}

                  </div>

                </div>

              </Link>

            </div>
          )
        })}

      </motion.div>

    </section>
  )
}