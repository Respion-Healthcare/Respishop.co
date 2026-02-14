"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const reviews = [
  {
    name: "Aarav Mehta",
    review:
      "Absolutely love the quality! The fabric feels premium and delivery was super fast. Will definitely shop again.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review:
      "Great experience from browsing to checkout. The customer support was very helpful and responsive.",
    rating: 4,
  },
  {
    name: "Rohan Kapoor",
    review:
      "Stylish products and amazing fit. Exactly what I was looking for. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    review:
      "The packaging was beautiful and the product exceeded expectations. 10/10 experience!",
    rating: 5,
  },
]

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-white py-20 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-3">
          Real reviews from real people who love our products.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
      >
        <ChevronRight />
      </button>

      {/* Scrollable Reviews */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar max-w-7xl mx-auto"
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-[#f9f9f9] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="flex mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400 w-5 h-5"
                />
              ))}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              “{item.review}”
            </p>

            <h4 className="font-semibold text-lg text-blue-600">
              {item.name}
            </h4>
            <p className="text-sm text-gray-400">Verified Buyer</p>
          </div>
        ))}
      </div>
    </section>
  )
}
