import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"

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
    description: `Read about ${title}. Get latest prices, buying guide, and best products in India.`,
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const safeSlug = slug?.toLowerCase()

  const blogContent: Record<string, any> = {
    "best-cpap-machine-in-india": {
      title: "Best CPAP Machine in India (2026)",
      image: "/images/SleepTherapy.jpg",
      content: `
<h2>What is a CPAP Machine?</h2>
<p>A CPAP machine helps keep your airway open while sleeping.</p>

<h2>Benefits</h2>
<ul>
<li>Improves sleep</li>
<li>Reduces snoring</li>
<li>Better oxygen flow</li>
</ul>
`,
    },

    "cpap-machine-price-in-bhubaneswar": {
      title: "CPAP Machine Price in Bhubaneswar (2026)",
      image: "/images/blog2.webp",
      content: `
<h2>CPAP Price in Bhubaneswar</h2>
<p>₹25,000 – ₹1,50,000 depending on features.</p>

<h2>Best Machines</h2>
<ul>
<li>ResMed AirSense 10</li>
<li>ResMed AirSense 11</li>
</ul>
`,
    },

    "oxygen-concentrator-price-in-india": {
      title: "Oxygen Concentrator Price in India (2026)",
      image: "/images/sleepstudy.jpg",
      content: `
<h2>Oxygen Concentrator Price</h2>
<p>₹30,000 – ₹2,50,000 depending on type.</p>

<h2>Best Options</h2>
<ul>
<li>Philips EverFlo</li>
<li>OxyMed</li>
</ul>
`,
    },
  }

  const blog = blogContent[safeSlug]

  if (!blog) return notFound()

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 text-white">
            <p className="text-sm text-gray-300 mb-2">
              Respishop Blog
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 mt-6 grid md:grid-cols-3 gap-12">

        <div className="md:col-span-2">
          <div className="overflow-hidden">
            <div
              className="prose prose-lg max-w-none
              prose-headings:font-semibold
              prose-h2:text-2xl
              prose-h3:text-xl
              prose-p:text-gray-700
              prose-li:text-gray-700
              prose-strong:text-black
              prose-img:w-full
              prose-img:h-auto
              prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="mt-10 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Need Help Choosing a CPAP Machine?
            </h3>
            <p className="text-sm mb-4">
              Explore top-rated CPAP machines with best prices and offers.
            </p>
            <Link
              href="/category/cpap-machine"
              className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View CPAP Machines →
            </Link>
          </div>
        </div>

        <div className="space-y-6 sticky top-24 h-fit">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Quick Navigation
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• What is CPAP?</li>
              <li>• Price</li>
              <li>• Best Machines</li>
              <li>• Buying Guide</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">
              Related Products
            </h3>

            <div className="space-y-4">
              {products.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg" />

                  <div>
                    <p className="text-sm font-medium line-clamp-2">
                      {p.name}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      View Product →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

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
              Which CPAP is best?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              ResMed AirSense 10 & 11 are top models.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}