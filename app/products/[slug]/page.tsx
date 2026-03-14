import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import ImageSlider from "./ImageSlider"
import AddToCartButton from "@/components/AddToCartButton"
import ReviewSection from "@/components/ReviewSection"
import ProductOptions from "@/components/ProductOptions"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

  const offerPrice = Math.floor(product.price * 0.9)

  /* Related products */
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

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

            <span className="text-3xl font-bold text-red-600">
              ₹{offerPrice.toLocaleString()}
            </span>

            <span className="line-through text-gray-400 ml-3">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="text-green-600 ml-3">
              10% OFF
            </span>

          </div>

          {/* PRODUCT OPTIONS (Wishlist + Size + Quantity) */}
          <ProductOptions product={product} />

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

        </div>

        {/* RIGHT - Buy Box */}
       {/* RIGHT - Customer Reviews */}
<div>
  <div className="border rounded-xl p-6 shadow-md">

    <h2 className="text-lg font-semibold mb-4">
      Customer Reviews
    </h2>

    {/* Rating summary */}
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

    {/* Example Reviews */}

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
</div>

      </div>

      {/* PRODUCT DETAILS */}

      <div className="mt-20">

        <h2 className="text-xl font-semibold mb-6">
          Product Details
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Description */}
          <div>

            <h3 className="font-semibold mb-3">
              Description
            </h3>

            <p className="text-gray-600">
              {product.description}
            </p>

          </div>

          {/* Additional Info */}
          <div>

            <h3 className="font-semibold mb-3">
              Additional Info
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Reviews */}
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
              href={`/products/${item.slug}`}
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
                ₹{item.price.toLocaleString()}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </div>
  )
}