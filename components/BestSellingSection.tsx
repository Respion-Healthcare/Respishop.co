"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function BestSellingSection() {
  const { addToCart } = useCart()
  const [wishlist, setWishlist] = useState<any[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      id: product.id,
      name: product.name,
      price: getFinalPrice(product),
      image: product.images[0],
      quantity: 1,
      size: "standard",
    })

    alert("Added to cart")
  }

  const addToWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    let wishlistItems: any[] = []

    try {
      const stored = localStorage.getItem("wishlist")
      wishlistItems = stored ? JSON.parse(stored) : []
    } catch {
      wishlistItems = []
    }

    const exists = wishlistItems.find((item: any) => item.id === product.id)

    if (exists) {
      alert("Already in wishlist")
      return
    }

    wishlistItems.push(product)
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))

    alert("Added to wishlist")
  }

  return (
    <section className="w-full px-6 lg:px-20 py-20 bg-blue-50/40">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Best selling items
        </h2>

        <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">
          View all products →
        </Link>
      </div>

      {/* 🔥 PREMIUM ANIMATION */}
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
          duration: 1.1, // ⬅ slower = premium
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >

        {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="group transition-transform duration-300 hover:-translate-y-2"
          >

            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 flex justify-center items-center hover:shadow-xl transition overflow-hidden">

              {/* Discount Badge */}
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

              {/* Wishlist */}
              <button
                onClick={(e) => addToWishlist(product, e)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition z-20"
              >
                <Heart size={18} />
              </button>

              {/* IMAGE */}
              <Link href={`/products/${product.category}/${product.slug}`} className="w-full">
                <div className="relative w-full h-52">

                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-300 group-hover:opacity-0"
                  />

                  <Image
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100"
                  />

                </div>
              </Link>

              {/* Cart */}
              <button
                onClick={(e) => handleAddToCart(product, e)}
                className="absolute bottom-3 right-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-20"
              >
                <ShoppingCart size={16} />
              </button>

            </div>

            <Link href={`/products/${product.category}/${product.slug}`}>
              <div className="mt-4 space-y-1 cursor-pointer">

                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Best Selling Products
                </p>

                <h3 className="text-gray-800 text-sm leading-relaxed">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-red-500 font-semibold">
                    ₹{getFinalPrice(product).toLocaleString("en-IN")}
                  </span>

                  {product.offer && (
                    <span className="text-gray-400 line-through text-xs">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

              </div>
            </Link>

          </div>
        ))}

      </motion.div>

    </section>
  )
}