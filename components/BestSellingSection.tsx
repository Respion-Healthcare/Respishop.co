"use client"

import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Resmed AirSense 11 AutoSet CPAP Tripack 4G",
    price: "₹79,000.00",
    oldPrice: "₹93,800.00",
    discount: "-16%",
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Resmed AirSense 11 AutoSet (Single Pack)",
    price: "₹69,000.00",
    oldPrice: "₹79,700.00",
    discount: "-13%",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Resmed AirMini AutoSet CPAP Device",
    price: "₹49,900.00",
    oldPrice: "₹67,300.00",
    discount: "-26%",
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Resmed AirSense 10 Autoset CPAP Tripack 4G",
    price: "₹49,000.00",
    oldPrice: "₹86,200.00",
    discount: "-43%",
    image: "/p4.png",
  },
  {
    id: 5,
    name: "Resmed AirStart 10 CPAP With Humidifier",
    price: "₹25,900.00",
    oldPrice: "₹50,900.00",
    discount: "-49%",
    image: "/p5.png",
  },
  {
    id: 6,
    name: "Resmed AirMini Travel CPAP Bundle",
    price: "₹45,000.00",
    oldPrice: "₹65,000.00",
    discount: "-31%",
    image: "/p6.png",
  },
  {
    id: 7,
    name: "Resmed AirFit Mask System",
    price: "₹5,900.00",
    oldPrice: "₹9,000.00",
    discount: "-34%",
    image: "/p7.png",
  },
  {
    id: 8,
    name: "Resmed CPAP Tube Premium",
    price: "₹2,200.00",
    oldPrice: "₹3,500.00",
    discount: "-37%",
    image: "/p8.png",
  },
  {
    id: 9,
    name: "Resmed Humidifier Chamber",
    price: "₹3,900.00",
    oldPrice: "₹6,000.00",
    discount: "-35%",
    image: "/p9.png",
  },
  {
    id: 10,
    name: "Resmed AirMini Power Adapter",
    price: "₹4,500.00",
    oldPrice: "₹7,500.00",
    discount: "-40%",
    image: "/p10.png",
  },
]

export default function BestSellingSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">

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
            <div key={product.id} className="group">

              {/* Image Section */}
              <div className="relative bg-white rounded-lg p-6 flex justify-center items-center hover:shadow-lg transition">
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
                  {product.discount}
                </span>

                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="object-contain h-[120px] group-hover:scale-105 transition"
                />
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
      </div>
    </section>
  )
}
