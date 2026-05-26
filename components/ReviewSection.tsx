"use client"

import { useMemo, useState } from "react"
import {
  Search,
  Star,
  BadgeCheck,
} from "lucide-react"

const reviewData = [
  {
    name: "Rahul S.",
    rating: 5,
    review:
      "The ResMed AirSense 11 is extremely comfortable and quiet. My sleep quality improved within days.",
    date: "20 Apr 2026",
  },
  {
    name: "Anita M.",
    rating: 5,
    review:
      "Very smooth ordering experience and fast delivery. Excellent customer support.",
    date: "18 Apr 2026",
  },
  {
    name: "Suresh K.",
    rating: 4,
    review:
      "Easy to use and therapy feels very effective. Humidifier works great.",
    date: "17 Apr 2026",
  },
]

export default function ReviewSection() {

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const filteredReviews = useMemo(() => {

    return reviewData.filter((item) => {

      const matchesSearch =
        item.review.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())

      const matchesFilter =
        filter === "all"
          ? true
          : item.rating === Number(filter)

      return matchesSearch && matchesFilter
    })

  }, [search, filter])

  return (

    <div className="mt-14">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>

          <h2 className="text-2xl font-semibold text-gray-900">
            Customer Reviews
          </h2>

          <div className="flex items-center gap-2 mt-2">

            <div className="flex">

              {[1,2,3,4,5].map((s)=>(
                <Star
                  key={s}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <span className="text-gray-600 text-sm">
              4.9 Based on 29 reviews
            </span>

          </div>

        </div>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="relative">

            <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />

            <input
              type="text"
              placeholder="Search reviews"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="border border-gray-200 rounded-2xl pl-10 pr-4 py-3 outline-none focus:border-black"
            />

          </div>

          <select
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            className="border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
          >
            <option value="all">
              All Ratings
            </option>

            <option value="5">
              5 Star
            </option>

            <option value="4">
              4 Star
            </option>

            <option value="3">
              3 Star
            </option>

          </select>

        </div>

      </div>

      {/* Reviews */}
      <div className="mt-10 space-y-5">

        {filteredReviews.map((item, index)=>(

          <div
            key={index}
            className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="flex items-center gap-2">

                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <BadgeCheck className="w-4 h-4 text-green-600" />

                  <span className="text-xs text-green-600 font-medium">
                    Verified Purchase
                  </span>

                </div>

                <div className="flex mt-2">

                  {[1,2,3,4,5].map((s)=>(
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        item.rating >= s
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}

                </div>

              </div>

              <span className="text-sm text-gray-400">
                {item.date}
              </span>

            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {item.review}
            </p>

          </div>

        ))}

      </div>

      {/* Write Review */}
      <div className="mt-12 border border-gray-100 rounded-3xl p-6 bg-gray-50">

        <h3 className="text-lg font-semibold text-gray-900">
          Write A Review
        </h3>

        <div className="flex gap-1 mt-4">

          {[1,2,3,4,5].map((s)=>(

            <Star
              key={s}
              onClick={()=>setRating(s)}
              className={`w-6 h-6 cursor-pointer transition ${
                rating >= s
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />

          ))}

        </div>

        <textarea
          value={review}
          onChange={(e)=>setReview(e.target.value)}
          className="w-full mt-5 border border-gray-200 rounded-2xl p-4 outline-none focus:border-black min-h-[140px]"
          placeholder="Share your experience with this product..."
        />

        <button
          className="mt-5 bg-black text-white px-7 py-3 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Submit Review
        </button>

      </div>

    </div>

  )
}