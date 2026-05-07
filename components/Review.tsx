"use client"

import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
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
      scrollRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* SEO: Structured Data (Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Customer Reviews",
            review: reviews.map((r) => ({
              "@type": "Review",
              author: r.name,
              reviewBody: r.review,
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: "5",
              },
            })),
          }),
        }}
      />

      <section
        aria-label="Customer Reviews Section"
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4f9ff] to-white py-24 px-6 lg:px-20"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full" />

        <div className="relative z-10">

          {/* Heading */}
          <header className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>

            <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              Real customer reviews about our products, quality, and service experience.
            </p>
          </header>

          {/* Arrows */}
          <div className="flex justify-end gap-4 mb-8">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left reviews"
              className="group bg-white/80 backdrop-blur-xl border border-blue-100 h-12 w-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition" />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right reviews"
              className="group bg-white/80 backdrop-blur-xl border border-blue-100 h-12 w-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition" />
            </button>
          </div>

          {/* Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            {reviews.map((item, index) => (
              <article
                key={index}
                className="
                  min-w-[360px]
                  md:min-w-[420px]
                  relative
                  overflow-hidden
                  rounded-[32px]
                  p-[1px]
                  bg-gradient-to-br
                  from-blue-400/40
                  via-cyan-300/30
                  to-blue-500/40
                  shadow-[0_10px_40px_rgba(59,130,246,0.18)]
                  hover:scale-[1.03]
                  transition-all
                  duration-500
                  group
                "
              >
                <div
                  className="
                    h-full
                    w-full
                    rounded-[32px]
                    bg-gradient-to-br
                    from-[#eaf4ff]
                    via-[#dff1ff]
                    to-[#f5fbff]
                    backdrop-blur-2xl
                    p-10
                    relative
                    overflow-hidden
                  "
                >
                  {/* Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300/30 blur-3xl rounded-full" />

                  {/* Top */}
                  <div className="relative z-10 flex items-center justify-between mb-8">

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="h-12 w-12 rounded-2xl bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-md">
                      <Quote className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  {/* Review */}
                  <p className="relative z-10 text-gray-700 text-lg leading-relaxed mb-10">
                    “{item.review}”
                  </p>

                  {/* Bottom */}
                  <div className="relative z-10 flex items-center gap-4">

                    {/* Avatar */}
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-blue-500 font-medium mt-1">
                        Verified Buyer
                      </p>
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}