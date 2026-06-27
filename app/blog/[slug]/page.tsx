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
  const safeSlug = slug.toLowerCase().trim()

  const blog = blogContent[safeSlug]

  if (!blog) {
    return {
      title: "Respishop Blog",
      description: "Respishop Blog",
    }
  }

  return {
    title: `${blog.title} | Respishop`,
    description: blog.excerpt,

    alternates: {
      canonical: `https://respishop.in/blog/${safeSlug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://respishop.in/blog/${safeSlug}`,
      type: "article",
      images: [
        {
          url: `https://respishop.in${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`https://respishop.in${blog.image}`],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
const safeSlug = slug.toLowerCase().trim()

const blog = blogContent[safeSlug]

if (!blog) return notFound()
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: blog.title,

  description: blog.excerpt,

  image: [`https://respishop.in${blog.image}`],

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://respishop.in/blog/${safeSlug}`,
  },

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

  datePublished: blog.date,
  dateModified: blog.date,
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
<div className="relative w-full h-[420px] md:h-[550px] overflow-hidden">
      <Image
  src={blog.image}
  alt={blog.title}
  fill
  priority
  className="object-cover"
/>

<div className="absolute inset-0 bg-black/45" />

<div className="absolute inset-0 flex items-center">
  <div className="w-full max-w-7xl mx-auto px-6">

    <div className="max-w-3xl rounded-[32px]
bg-white/10
backdrop-blur-2xl
border border-white/20
shadow-2xl
p-8 md:p-10">
<div className="flex items-center gap-2 text-sm text-white/80 mb-4">
  <Link href="/" className="hover:text-white transition">
    Home
  </Link>

  <span>/</span>

  <Link href="/blog" className="hover:text-white transition">
    Blog
  </Link>

  <span>/</span>

  <span className="text-white">
    {blog.title}
  </span>
</div>
      <p className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-4">
        Respishop Blog
      </p>

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        {blog.title}
      </h1>

      <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-8">
        <span>📅 Updated 2026</span>
        <span>⏱ 5 min read</span>
        <span>🏥 Expert Respiratory Guide</span>
      </div>

      <div className="flex flex-wrap gap-4">

        <Link
          href="/products/cpap-machine"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Explore Products
        </Link>

        <Link
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Talk to Expert
        </Link>

      </div>

    </div>

  </div>
</div>
</div>

      {/* CONTENT */}
      <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto py-12 mt-6 grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="md:col-span-2">
  <div className="bg-white rounded-[30px] shadow-xl p-6 md:p-10">
          <div
           className="
prose prose-lg max-w-none

prose-headings:font-bold
prose-headings:text-slate-900

prose-h2:text-3xl
prose-h3:text-2xl

prose-p:leading-8
prose-p:text-slate-700

prose-li:leading-8

prose-a:text-blue-600
prose-a:no-underline
hover:prose-a:underline

prose-details:border
prose-details:border-gray-200
prose-details:rounded-xl
prose-details:p-4
prose-details:shadow-sm

prose-summary:cursor-pointer
prose-summary:font-semibold
prose-summary:text-lg
"
dangerouslySetInnerHTML={{ __html: blog.content }}
          />
</div>
         {/* PREMIUM CTA */}
<div className="mt-12 rounded-[30px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 md:p-10 text-white shadow-2xl">

  <h3 className="text-3xl font-bold mb-4">
    Looking for a CPAP Machine?
  </h3>

  <p className="text-blue-100 text-lg mb-8 max-w-2xl">
    Explore genuine CPAP machines, BiPAP devices and Oxygen Concentrators with
    expert guidance, affordable pricing and fast delivery across India.
  </p>

  <div className="flex flex-wrap gap-4">

    <Link
      href="/products/cpap-machine"
      className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
    >
      Browse CPAP Machines →
    </Link>

    <Link
      href="/contact"
      className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
    >
      Talk to an Expert
    </Link>

  </div>

</div>
        </div>

       {/* RIGHT SIDEBAR */}
<div className="space-y-6 sticky top-24 h-fit">

  {/* CONTACT CARD */}
  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

    <h3 className="text-2xl font-bold mb-3">
      Need Help?
    </h3>

    <p className="text-sm text-blue-100 mb-6">
      Speak with our sleep therapy experts for the right CPAP, BiPAP or Oxygen Concentrator.
    </p>

    <div className="space-y-3">

      <Link
        href="/contact"
        className="block text-center bg-white text-blue-700 rounded-xl py-3 font-semibold hover:bg-gray-100 transition"
      >
        📞 Talk to Expert
      </Link>

      <a
        href="https://wa.me/919876543210"
        className="block text-center border border-white rounded-xl py-3 hover:bg-white/10 transition"
      >
        💬 WhatsApp
      </a>

    </div>

  </div>

  {/* RELATED PRODUCTS */}
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
                <Image
src={p.images[0]}
alt={p.name}
width={70}
height={70}
className="rounded-xl object-cover"
/>

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