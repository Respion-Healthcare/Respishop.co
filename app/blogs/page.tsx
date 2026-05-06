import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const dynamic = "force-static"

// ✅ SEO METADATA (SERVER SIDE)
export const metadata: Metadata = {
  title: "Respishop Blog | CPAP, Sleep Apnea & Respiratory Care Guides",
  description:
    "Read expert guides on CPAP machines, sleep apnea, oxygen therapy, and respiratory care in India. Compare prices, features, and buying tips.",
  alternates: {
    canonical: "https://www.respishop.in/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ✅ ALL BLOGS (SYNC WITH SLUG FILE)
const blogs = [
  {
    id: 1,
    slug: "best-cpap-machine-in-india",
    title:
      "Best CPAP Machine in India (2026) – Price, Features & Buying Guide",
    category: "CPAP Guide",
    date: "March 2026",
    readTime: "7 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Compare top CPAP machines in India with features, pricing, and buying tips.",
  },
  {
    id: 2,
    slug: "cpap-machine-price-in-bhubaneswar",
    title:
      "CPAP Machine Price in Bhubaneswar (2026) – Where to Buy & Best Deals",
    category: "Local SEO",
    date: "March 2026",
    readTime: "5 min read",
    image: "/images/blog2.webp",
    excerpt:
      "Check CPAP machine price in Bhubaneswar and best places to buy online.",
  },
  {
    id: 3,
    slug: "oxygen-concentrator-price-in-india",
    title: "Oxygen Concentrator Price in India (2026 Guide)",
    category: "Oxygen Therapy",
    date: "March 2026",
    readTime: "6 min read",
    image: "/images/sleepstudy.jpg",
    excerpt:
      "Latest oxygen concentrator price in India with features and buying tips.",
  },
  {
    id: 4,
    slug: "what-is-cpap-machine",
    title: "What is a CPAP Machine and How Does It Work?",
    category: "Beginner Guide",
    date: "April 2026",
    readTime: "6 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Learn how CPAP machines work and why they are essential for sleep apnea treatment.",
  },
  {
    id: 5,
    slug: "cpap-machine-price-in-india",
    title: "CPAP Machine Price in India (2026) – Full Guide",
    category: "Price Guide",
    date: "April 2026",
    readTime: "7 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Explore CPAP machine prices in India with detailed buying insights.",
  },
  {
    id: 6,
    slug: "cpap-machine-side-effects-and-solutions",
    title: "CPAP Machine Side Effects & Solutions (2026 Guide)",
    category: "Problem Solving",
    date: "April 2026",
    readTime: "6 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Facing CPAP issues? Learn side effects and simple solutions for better comfort.",
  },
  {
    id: 7,
    slug: "resmed-airsense-10-vs-airsense-11",
    title: "ResMed AirSense 10 vs AirSense 11 – Full Comparison",
    category: "Comparison",
    date: "April 2026",
    readTime: "7 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Compare AirSense 10 vs 11 features, price, and performance to choose the best CPAP machine.",
  },
]

export default function BlogPage() {
  return (
    <main className="pt-[120px] bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          CPAP & Sleep Therapy Blog
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert guides on CPAP machines, sleep apnea, oxygen therapy, and respiratory care in India.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden 
              hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  <time>{blog.date}</time> • {blog.readTime}
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">
          CPAP Machines & Sleep Apnea Guides in India
        </h2>

        <p className="mb-4">
          Explore detailed guides on CPAP machines, sleep apnea treatment, oxygen concentrators, and respiratory care. Learn about pricing, features, and expert buying tips to choose the right device.
        </p>

        <p>
          Browse our{" "}
          <Link href="/category/cpap-machine" className="text-blue-600 underline">
            CPAP machines collection
          </Link>{" "}
          for the latest products and offers in India.
        </p>
      </section>

    </main>
  )
}