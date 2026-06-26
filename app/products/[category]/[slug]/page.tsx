import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import ImageSlider from "./ImageSlider"
import AddToCartButton from "@/components/AddToCartButton"
import ReviewSection from "@/components/ReviewSection"
import ProductOptions from "@/components/ProductOptions"
import type { Metadata } from "next"
import { getFinalPrice } from "@/lib/pricing"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) return {}

  return {
    title: `${product.name} Price in India | Buy Online`,
   description: `Buy ${product.name} CPAP machine online in India at the best price with warranty, sleep apnea support and fast delivery from Respishop.`,    alternates: {
      canonical: `https://www.respishop.in/products/${product.category}/${product.slug}`,    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

 const finalPrice = getFinalPrice(product)

  /* Related products */
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

return (
  <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto">

    <div className="grid md:grid-cols-3 gap-10">

      {/* LEFT - Image Slider */}
      <div className="space-y-6">

    <ImageSlider
        images={product.images}
        name={product.name}
    />

    {/* TRUST BADGES */}
    <div className="grid grid-cols-2 gap-4">

        <div className="border rounded-lg p-4 text-center">
            <p className="font-semibold">100% Genuine</p>
            <p className="text-xs text-gray-500">
                Manufacturer Warranty
            </p>
        </div>

        <div className="border rounded-lg p-4 text-center">
            <p className="font-semibold">Fast Delivery</p>
            <p className="text-xs text-gray-500">
                Across India within 24 hours 
            </p>
        </div>

        <div className="border rounded-lg p-4 text-center">
            <p className="font-semibold">24 Hour Therapy Assistance</p>
            <p className="text-xs text-gray-500">
                 From Expert Technician 
            </p>
        </div>

        <div className="border rounded-lg p-4 text-center">
            <p className="font-semibold">Secure Checkout</p>
            <p className="text-xs text-gray-500">
                Safe Payments
            </p>
        </div>

    </div>

</div>

      {/* CENTER - Info */}
      <div>

       <div className="space-y-2">

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        {product.name}
      </h1>

      <p className="text-gray-600 max-w-2xl">
        Premium respiratory care equipment designed for comfort,
        reliability and effective therapy support.
      </p>
    </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1,2,3,4,5].map((s)=>(
            <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
          ))}
          <span className="text-sm text-gray-500 ml-2">(12 reviews)</span>
        </div>

        {/* Price */}
        <div className="mt-4">
<span className="text-red-500 font-semibold">
  ₹{finalPrice.toLocaleString('en-IN')}
</span>

{product.offer && (
  <>
    <span className="line-through text-gray-400 ml-3">
        ₹{product.price.toLocaleString("en-IN")}
    </span>

    <span className="text-green-600 ml-3">
      {product.offer.type === "percentage"
        ? `${product.offer.value}% OFF`
        : `₹${product.offer.value} OFF`}
    </span>
  </>
)}

        </div>

       
        {/* PRODUCT OPTIONS */}
        <ProductOptions product={product} />

      </div>

    </div>
    {/* PRODUCT DETAILS */}
    <div className="mt-20">

      <h2 className="text-xl font-semibold mb-6">
        Product Details
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-semibold mb-3">Description</h3>
          <p className="text-gray-600">
            {product.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Additional Info</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {product.specifications.map((spec, index) => (
              <li key={index} className="flex justify-between border-b pb-1">
                <span className="font-medium">{spec.label}</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <ReviewSection />

      </div>
    </div>

    {/* RELATED PRODUCTS */}
    <div className="mt-20">

      <h2 className="text-2xl font-semibold mb-8">
        Related Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {relatedProducts.map((item) => (
          <Link
            key={item.slug}
href={`/products/${item.category}/${item.slug}`}
            className="border rounded-xl p-4 hover:shadow-lg transition"
          >
            <Image
              src={item.images[0]}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-[220px] object-contain"
            />

            <h3 className="mt-4 font-medium text-gray-800">
              {item.name}
            </h3>

            <p className="text-red-600 font-semibold mt-2">
             ₹{getFinalPrice(item).toLocaleString()}
            </p>

          </Link>
        ))}

      </div>
    </div>

    {/* ✅ SEO CONTENT (ADDED) */}
  <div className="prose prose-lg max-w-none">

  <h2>
    About {product.name}
  </h2>

  <p>
    {product.description}
  </p>

  <p>
    {product.name} is designed to provide reliable respiratory
    therapy support with a focus on comfort, performance,
    and long-term durability.
  </p>

  <h2>
    Why Choose {product.name}?
  </h2>

  <ul>
    <li>Trusted respiratory care solution</li>
    <li>Comfortable for daily therapy use</li>
    <li>Suitable for home and clinical environments</li>
    <li>Built using high-quality medical-grade materials</li>
    <li>Backed by Respishop customer support</li>
  </ul>

  </div>

    {/* ✅ SCHEMA (ADDED) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: product.images,
          description: product.description,
          brand: {
            "@type": "Brand",
            name: "Respishop",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
           price: getFinalPrice(product),
            availability: "https://schema.org/InStock",
          },
        }),
      }}
    />

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this product safe for daily use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is designed for safe and long-term use.",
          },
        },
        {
          "@type": "Question",
          name: "Does it help with sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it helps maintain proper airflow and reduces apnea symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "Can beginners use it easily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is user-friendly and easy to operate.",
          },
        },
      ],
    }),
  }}
/>
  </div>
)
} 