"use client"

import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Resmed AirSense 11 AutoSet (Single Pack)",
    price: "₹69,000.00",
    oldPrice: "₹79,700.00",
    discount: "-13%",
    image: "/images/Product5.webp",
    hoverImage: "/images/Product5.webp",
  },
  {
    id: 2,
    name: "Resmed AirMini AutoSet CPAP Device",
    price: "₹49,900.00",
    oldPrice: "₹67,300.00",
    discount: "-26%",
    image: "/images/Product4.webp",
    hoverImage: "/images/Product4.webp",
  },
  {
    id: 3,
    name: "Resmed AirSense 10 Autoset CPAP Tripack 4G",
    price: "₹49,000.00",
    oldPrice: "₹86,200.00",
    discount: "-43%",
    image: "/images/P9.webp",
    hoverImage: "/images/P9.webp",
  },
  {
    id: 4,
    name: "Resmed AirStart 10 CPAP With Humidifier",
    price: "₹25,900.00",
    oldPrice: "₹50,900.00",
    discount: "-49%",
    image: "/images/P4.jpg",
    hoverImage: "/images/P4.jpg",
  },
  {
    id: 5,
    name: "Resmed N20 AirFit Nasal Mask",
    price: "₹2,900.00",
    oldPrice: "₹5,900.00",
    discount: "-49%",
    image: "/images/P41.jpg",
    hoverImage: "/images/P41.jpg",
  },
  {
    id: 6,
    name: "Resmed AirFit F20 Full Face Mask",
    price: "₹3,290.00",
    oldPrice: "₹7,300.00",
    discount: "-31%",
    image: "/images/P6.webp",
    hoverImage: "/images/P6.webp",
  },
  {
    id: 7,
    name: "Resmed Lumis 100 VPAP ST BiPAP TriPack",
    price: "₹49,900.00",
    oldPrice: "₹112,000.00",
    discount: "-34%",
    image: "/images/P7.webp",
    hoverImage: "/images/P7.webp",
  },
  {
    id: 8,
    name: "Resmed Lumis 150 VPAP ST BiPAP Tripack 4G",
    price: "₹69,000.00",
    oldPrice: "₹152,000.00",
    discount: "-37%",
    image: "/images/P8.webp",
    hoverImage: "/images/P8.webp",
  },
  {
    id: 9,
    name: "Rental Resmed AirMini AutoSet With 1 Mask",
    price: "₹5,500.00",
    oldPrice: "₹9,000.00",
    discount: "-35%",
    image: "/images/Product4.webp",
    hoverImage: "/images/Product4.webp",
  },
  {
    id: 10,
    name: "Resmed AirSense 11 AutoSet CPAP Tripack 4G",
    price: "₹79,000.00",
    oldPrice: "₹93,800.00",
    discount: "-16%",
    image: "/images/Product5.webp",
    hoverImage: "/images/Product5.webp",
  },
]

export default function BestSellingSection() {
  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Best selling items
        </h2>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          View all products →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group transition-transform duration-300 hover:-translate-y-2"
          >

            {/* Image Section */}
            <div className="relative bg-white rounded-lg p-8 flex justify-center items-center hover:shadow-lg transition overflow-hidden">

              {/* Discount Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded z-10">
                {product.discount}
              </span>

              {/* Wishlist Icon */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-10">
                <Heart size={20} />
              </button>

              {/* Main Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={260}
                height={220}
                className="object-contain h-[180px] transition duration-300 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <Image
                src={product.hoverImage}
                alt={product.name}
                width={260}
                height={220}
                className="object-contain h-[180px] absolute transition duration-300 opacity-0 group-hover:opacity-100"
              />

              {/* Add to Cart Icon */}
              <button className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-10">
                <ShoppingCart size={18} />
              </button>

            </div>

            {/* Text Section */}
            <div className="mt-6 space-y-2">
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

          </div>
        ))}
      </div>
    </section>
  )
}