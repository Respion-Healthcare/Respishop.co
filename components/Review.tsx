"use client"

import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
} from "lucide-react"

import { useRef } from "react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Rajesh Patel",
    review:
      "The oxygen concentrator arrived quickly and was very easy to set up at home. My father feels much more comfortable now.",
    rating: 5,
  },
  {
    name: "Ananya Das",
    review:
      "Excellent support from the team during our CPAP purchase. They explained everything clearly and helped us choose the right machine.",
    rating: 5,
  },
  {
    name: "Vikram Nair",
    review:
      "Very reliable medical equipment and genuine products. Delivery was on time and packaging was secure.",
    rating: 4,
  },
  {
    name: "Meera Sharma",
    review:
      "We ordered a patient care bed for my elderly mother and the overall experience was smooth from delivery to installation.",
    rating: 5,
  },

  // ✅ NEW REVIEW 1
  {
    name: "Sanjay Verma",
    review:
      "Respishop provided an original ResMed CPAP machine at a very competitive price. The delivery was fast and customer support was extremely helpful.",
    rating: 5,
  },

  // ✅ NEW REVIEW 2
  {
    name: "Priya Kulkarni",
    review:
      "The BiPAP machine quality is excellent and setup assistance was professional. Highly recommended for respiratory and sleep apnea care products.",
    rating: 5,
  },
]

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

const scroll = (direction: "left" | "right") => {
  if (!scrollRef.current) return;

  const scrollAmount =
    window.innerWidth >= 1024
      ? scrollRef.current.clientWidth // Desktop → move one full page (3 cards)
      : scrollRef.current.clientWidth; // Mobile → move one card/page

  scrollRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  return (
    <>
      {/* ✅ SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",

            name: "Respishop Healthcare",

            description:
              "Respishop Healthcare provides CPAP machines, BiPAP machines, oxygen concentrators, respiratory care products, sleep apnea devices, and medical equipment across India.",

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: reviews.length.toString(),
              bestRating: "5",
            },

            review: reviews.map((r) => ({
              "@type": "Review",

              author: {
                "@type": "Person",
                name: r.name,
              },

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
        aria-label="Customer Reviews and Testimonials"
        className="relative overflow-hidden py-14 md:py-20 lg:py-28 bg-gradient-to-b from-white via-[#f5f9ff] to-[#edf6ff]"
      >

        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-blue-200/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-200/30 blur-[120px] rounded-full" />

    <div className="relative z-10 px-4 sm:px-6 lg:px-20 max-w-full overflow-hidden">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0391B6] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">

                <ShieldCheck size={14} />

                Verified Customer Reviews

              </div>

              {/* ✅ SEO OPTIMIZED HEADING */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                Trusted CPAP, BiPAP & Oxygen Concentrator Reviews
              </h2>

              {/* ✅ SEO OPTIMIZED PARAGRAPH */}
              <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Read genuine customer reviews for CPAP machines, BiPAP
                machines, oxygen concentrators, respiratory care products,
                sleep apnea devices, and medical equipment from Respishop
                Healthcare.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <button
                onClick={() => scroll("left")}
                aria-label="Scroll Left Reviews"
                className="group h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-xl hover:bg-[#0391B6] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition" />
              </button>

              <button
                onClick={() => scroll("right")}
                aria-label="Scroll Right Reviews"
                className="group h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-xl hover:bg-[#0391B6] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition" />
              </button>

            </div>

          </div>

{/* REVIEW SLIDER */}
<div
  ref={scrollRef}
  className="
    flex
    gap-6
    overflow-x-auto
    scroll-smooth
    snap-x
    snap-mandatory
    no-scrollbar
    pb-4
  "
>
  {reviews.map((item, index) => (
    <motion.article
      key={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
     className="
  shrink-0
  snap-center

  w-full
  sm:w-[360px]

  lg:w-1/3
  lg:flex-none

  rounded-2xl
  sm:rounded-[2rem]
lg:max-w-[calc((100%-3rem)/3)]
lg:flex-none

        rounded-2xl
        sm:rounded-[2rem]
        bg-white/75
        backdrop-blur-2xl
        border border-white/60
        shadow-[0_20px_70px_rgba(37,99,235,0.08)]
        overflow-hidden
        relative
        group
      "
    >
      {/* TOP BLUE LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

      {/* GLOW */}
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-200/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10 p-5 sm:p-7 lg:p-10">

        {/* TOP */}
        <div className="flex items-start justify-between mb-5 sm:mb-8">
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* REVIEW */}
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed min-h-[110px] sm:min-h-[150px]">
          “{item.review}”
        </p>

        {/* DIVIDER */}
        <div className="my-5 sm:my-8 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* USER */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-xl">
              {item.name.charAt(0)}
            </div>

            <div className="absolute bottom-0 right-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500 border-[3px] border-white" />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              {item.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#0391B6] font-medium mt-1">
              Verified Customer
            </p>
          </div>
        </div>

      </div>
    </motion.article>
  ))}
</div>
        </div>

      </section>
    </>
  )
}