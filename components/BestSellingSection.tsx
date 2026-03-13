"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"

const products = [
  {
    id: 1,
    slug: "airsense-11-autoset-single-pack",
    name: "Resmed AirSense 11 AutoSet (Single Pack)",
    price: "₹69,000.00",
    oldPrice: "₹79,700.00",
    discount: "-13%",
    image: "/images/Product5.webp",
    hoverImage: "/images/Product5.webp",
  },
  {
    id: 2,
    slug: "airmini-autoset-cpap-device",
    name: "Resmed AirMini AutoSet CPAP Device",
    price: "₹49,900.00",
    oldPrice: "₹67,300.00",
    discount: "-26%",
    image: "/images/Product4.webp",
    hoverImage: "/images/Product4.webp",
  },
  {
    id: 3,
    slug: "resmed-airsense-10-autoset-tripack",
    name: "Resmed AirSense 10 Autoset CPAP Tripack 4G",
    price: "₹49,000.00",
    oldPrice: "₹86,200.00",
    discount: "-43%",
    image: "/images/P9.webp",
    hoverImage: "/images/P9.webp",
  },
  {
    id: 4,
    slug: "resmed-airstart10-auto-cpap",
    name: "Resmed AirStart 10 CPAP With Humidifier",
    price: "₹25,900.00",
    oldPrice: "₹50,900.00",
    discount: "-49%",
    image: "/images/P4.jpg",
    hoverImage: "/images/P4.jpg",
  },
  {
    id: 5,
    slug: "resmed-airfit-n20-nasal-mask",
    name: "Resmed N20 AirFit Nasal Mask",
    price: "₹2,900.00",
    oldPrice: "₹5,900.00",
    discount: "-49%",
    image: "/images/P41.jpg",
    hoverImage: "/images/P41.jpg",
  },
  {
    id: 6,
    slug: "resmed-airfit-f20-full-face-mask",
    name: "Resmed AirFit F20 Full Face Mask",
    price: "₹3,290.00",
    oldPrice: "₹7,300.00",
    discount: "-31%",
    image: "/images/P6.webp",
    hoverImage: "/images/P6.webp",
  },
  {
    id: 7,
    slug: "resmed-lumis-100-vpap-st",
    name: "Resmed Lumis 100 VPAP ST BiPAP TriPack",
    price: "₹49,900.00",
    oldPrice: "₹112,000.00",
    discount: "-34%",
    image: "/images/P7.webp",
    hoverImage: "/images/P7.webp",
  },
  {
    id: 8,
    slug: "resmed-lumis-150-vpap-st",
    name: "Resmed Lumis 150 VPAP ST BiPAP Tripack 4G",
    price: "₹69,000.00",
    oldPrice: "₹152,000.00",
    discount: "-37%",
    image: "/images/P8.webp",
    hoverImage: "/images/P8.webp",
  },
  {
    id: 9,
    slug: "airmini-autoset-cpap",
    name: "Rental Resmed AirMini AutoSet With 1 Mask",
    price: "₹5,500.00",
    oldPrice: "₹9,000.00",
    discount: "-35%",
    image: "/images/Product4.webp",
    hoverImage: "/images/Product4.webp",
  },
  {
    id: 10,
    slug: "airsense-11-autoset-4g-tripack",
    name: "Resmed AirSense 11 AutoSet CPAP Tripack 4G",
    price: "₹79,000.00",
    oldPrice: "₹93,800.00",
    discount: "-16%",
    image: "/images/Product5.webp",
    hoverImage: "/images/Product5.webp",
  },
]

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

    const numericPrice = Number(product.price.replace(/[^0-9]/g, ""))

    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      image: product.image,
      quantity: 1,
    })

    alert("Added to cart")
  }

  const addToWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    let wishlistItems = []

    try {
      const stored = localStorage.getItem("wishlist")
      wishlistItems = stored ? JSON.parse(stored) : []
    } catch {
      wishlistItems = []
    }

    const exists = wishlistItems.find((item:any)=>item.id === product.id)

    if (exists) {
      alert("Already in wishlist")
      return
    }

    wishlistItems.push(product)

    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))

    alert("Added to wishlist")
  }

  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">

      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Best selling items
        </h2>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          View all products →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {products.map((product) => (

          <div
            key={product.id}
            className="group transition-transform duration-300 hover:-translate-y-2"
          >

            <div className="relative bg-white rounded-lg p-8 flex justify-center items-center hover:shadow-lg transition overflow-hidden">

              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded z-10">
                {product.discount}
              </span>

              <button
                onClick={(e)=>addToWishlist(product,e)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-20"
              >
                <Heart size={20} />
              </button>

              <Link href={`/products/${product.slug}`} className="flex justify-center items-center">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={220}
                  className="object-contain h-[180px] transition duration-300 group-hover:opacity-0"
                />

                <Image
                  src={product.hoverImage}
                  alt={product.name}
                  width={260}
                  height={220}
                  className="object-contain h-[180px] absolute transition duration-300 opacity-0 group-hover:opacity-100"
                />

              </Link>

              <button
                onClick={(e)=>handleAddToCart(product,e)}
                className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-20"
              >
                <ShoppingCart size={18} />
              </button>

            </div>

            <Link href={`/products/${product.slug}`}>
              <div className="mt-6 space-y-2 cursor-pointer">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Best Selling Products
                </p>

                <h3 className="text-gray-800 text-sm leading-relaxed">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-2">
                  <span className="text-red-500 font-semibold text-lg">
                    {product.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </Link>

          </div>

        ))}

      </div>
    </section>
  )
}