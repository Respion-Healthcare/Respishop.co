"use client"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    slug: "best-cpap-machine-in-india",
    title: "Best CPAP Machine in India (2026) – Price, Features & Buying Guide",
    category: "CPAP Guide",
    date: "March 2026",
    readTime: "7 min read",
    image: "/images/SleepTherapy.jpg",
    excerpt:
      "Looking for the best CPAP machine in India? Compare top models, features, prices, and find the right one for your needs.",
  },
  {
    id: 2,
    slug: "cpap-machine-price-in-bhubaneswar",
    title: "CPAP Machine Price in Bhubaneswar – Where to Buy?",
    category: "Local SEO",
    date: "March 2026",
    readTime: "5 min read",
    image: "/images/blog2.webp",
    excerpt:
      "Find the latest CPAP machine price in Bhubaneswar and where to buy authentic devices with best offers.",
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
      "Check oxygen concentrator prices in India, features, and buying tips to choose the best device.",
  },
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Respishop Blog | Sleep Therapy & CPAP Insights</title>
        <meta
          name="description"
          content="Explore expert insights on sleep apnea, CPAP therapy, respiratory care, and wellness tips from Respishop."
        />
        <meta name="keywords" content="sleep apnea blog, CPAP guide, respiratory health, sleep therapy India, Respishop blog" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Respishop Blog | Sleep Therapy & CPAP Insights" />
        <meta
          property="og:description"
          content="Expert articles on sleep apnea, CPAP therapy, and respiratory wellness."
        />
        <meta property="og:url" content="https://respishop.co.in/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Respishop Blog" />
        <meta
          name="twitter:description"
          content="Insights and expert advice on sleep therapy and respiratory care."
        />

        {/* Blog Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Respishop Blog",
              url: "https://respishop.in/blog",
              description:
                "Expert insights on sleep therapy, CPAP machines, and respiratory wellness.",
              publisher: {
                "@type": "Organization",
                name: "Respishop",
                url: "https://respishop.in",
              },
              blogPost: blogs.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                url: `https://respishop.in/blog/${post.slug}`,
              })),
            }),
          }}
        />
      </Head>

      <main className="pt-[120px] bg-gray-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sleep Therapy & Respiratory Health Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Insights, expert health tips, and trusted guidance on sleep apnea,
            CPAP therapy, and respiratory wellness in India.
          </p>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
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
                    priority={blog.id === 1}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* CATEGORY BADGE */}
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">
                    {blog.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    <time>{blog.date}</time> • {blog.readTime}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}

          </div>
        </section>

      </main>
    </>
  )
}