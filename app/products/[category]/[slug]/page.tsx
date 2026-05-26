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
      <div>
        <ImageSlider images={product.images} name={product.name} />
      </div>

      {/* CENTER - Info */}
      <div>

        <h1 className="text-2xl font-semibold">
          {product.name}
        </h1>

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

      <p className="mt-6 text-gray-600 leading-relaxed">
  {product.description}
</p>

      </div>

      {/* RIGHT - Customer Reviews */}
      {/* <div>
        <div className="border rounded-xl p-6 shadow-md">

          <h2 className="text-lg font-semibold mb-4">
            Customer Reviews
          </h2>

          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map((s)=>(
              <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400"/>
            ))}
            <span className="text-sm text-gray-500 ml-2">
              4.8 out of 5
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Based on 12 customer reviews
          </p>

          <div className="space-y-4">

            <div className="border-b pb-3">
              <p className="font-medium">Rahul S.</p>
              <div className="flex">
                {[1,2,3,4,5].map((s)=>(
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Very good product. Easy to use and works perfectly.
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="font-medium">Anita M.</p>
              <div className="flex">
                {[1,2,3,4].map((s)=>(
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Delivery was quick and product quality is excellent.
              </p>
            </div>

            <div>
              <p className="font-medium">Suresh K.</p>
              <div className="flex">
                {[1,2,3,4,5].map((s)=>(
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Highly recommended for CPAP therapy users.
              </p>
            </div>

          </div>

        </div>
      </div> */}

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
   <div className="mt-20 max-w-4xl text-gray-700">

  <h2 className="text-2xl font-semibold mb-4">
    {product.name} Price in India & Full Details
  </h2>

  <p className="mb-4">
    Buy {product.name} online in India at the best price from Respishop. This product is designed for effective respiratory care and is widely used for CPAP therapy and breathing support. It ensures comfort, durability, and reliable performance for long-term use.
  </p>

  <p className="mb-4">
    If you are looking for a trusted solution for sleep apnea or oxygen therapy, this product offers advanced features and user-friendly functionality. It helps improve sleep quality, reduce breathing issues, and supports overall health.
  </p>

  <p className="mb-4">
  The ResMed AirSense 10 AutoSet Tripack is one of the most trusted automatic CPAP machines for sleep apnea therapy in India. Its intelligent AutoSet technology adjusts airflow pressure automatically for comfortable and effective treatment.
  </p> 

  <h3 className="text-lg font-semibold mt-6 mb-2">
    Key Benefits of {product.name}
  </h3>
  <ul className="list-disc pl-5 mb-4">
    <li>Improves breathing during sleep</li>
    <li>Reduces snoring and sleep disturbances</li>
    <li>Easy to use and maintain</li>
    <li>Suitable for home and clinical use</li>
  </ul>

  <h3 className="text-lg font-semibold mt-6 mb-2">
    Who Should Use {product.name}?
  </h3>
  <p className="mb-4">
    This product is ideal for individuals suffering from sleep apnea, respiratory issues, or requiring consistent airflow support during sleep or therapy.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">
    How to Use
  </h3>
  <p className="mb-4">
    Follow the instructions provided with the product. Ensure proper fitting and settings for optimal performance and comfort.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">
    FAQs
  </h3>

  <p><strong>Is this product safe for daily use?</strong><br/>
  Yes, it is designed for safe and long-term use.</p>

  <p><strong>Does it help with sleep apnea?</strong><br/>
  Yes, it helps maintain proper airflow and reduces apnea symptoms.</p>

  <p><strong>Can beginners use it easily?</strong><br/>
  Yes, it is user-friendly and easy to operate.</p>
 
 <p className="mt-4">
  Explore more options in our{" "}
  <Link href="/category/cpap-machine" className="text-blue-600 underline">
    CPAP Machines category
  </Link>.
</p>

<p className="mt-4">
  Read our guide on{" "}
  <Link href="/blog/what-is-cpap-machine" className="text-blue-600 underline">
    what is a CPAP machine
  </Link>{" "}
  to understand how this product works.
</p>

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