import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import blogContent from "@/lib/blogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const safeSlug = slug?.toLowerCase() || ""

  const title = safeSlug.replace(/-/g, " ")

  return {
    title: `${title} | Respishop`,
    description: `Read about ${title}. Learn benefits, usage, and best products in India for CPAP therapy and respiratory care.`,
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const safeSlug = slug?.toLowerCase()

const blog = blogContent[safeSlug];

  if (!blog) return notFound()
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  image: [`https://respishop.in${blog.image}`],   
  author: {
    "@type": "Organization",
    name: "Respishop",
  },
  publisher: {
    "@type": "Organization",
    name: "Respishop",
    logo: {
      "@type": "ImageObject",
      url: "https://respishop.in/logo.png",
    },
  },
}

  return (
    
    <div className="bg-gray-50 min-h-screen">
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(blogSchema),
  }}
/>
      {/* HERO */}
      <div className="relative w-full h-80 md:h-105 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto pb-12 text-white">
            <p className="text-sm text-gray-300 mb-2">
              Respishop Blog
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto py-12 mt-6 grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="md:col-span-2">
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-semibold
            prose-h2:text-2xl
            prose-p:text-gray-700
            prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA */}
          <div className="mt-10 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Need Help Choosing a CPAP Machine?
            </h3>
            <p className="text-sm mb-4">
              Explore top-rated CPAP machines with best prices and offers.
            </p>
            <Link
              href="/products/cpap-machine"
              className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View CPAP Machines →
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6 sticky top-24 h-fit">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">
              Related Products
            </h3>

            {products.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.category}/${p.slug}`}
                className="flex items-center gap-3 border rounded-lg p-3 mb-3 hover:shadow-md"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />

                <div>
                  <p className="text-sm font-medium">
                    {p.name}
                  </p>
                  <p className="text-xs text-blue-600">
                    View Product →
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-medium">
              What is CPAP machine price in India?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              ₹25,000 to ₹1,50,000 depending on features.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-medium">
              Is CPAP safe?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Yes, it is safe and recommended for long-term use.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}