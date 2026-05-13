import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

export const dynamic = "force-static"

// ✅ ALLOWED SEO CITIES
const cities = [
  "india",
  "bangalore",
  "kolkata",
]

const allowedCities = cities

// ✅ AREA MAP
const areaMap: Record<string, string[]> = {
  kolkata: ["Salt Lake", "Howrah", "Park Street", "Dum Dum"],
  bangalore: ["Whitefield", "BTM", "Indiranagar", "Electronic City"],
}

// ✅ STATIC PARAMS
export async function generateStaticParams() {
  const productKeys = [
    "cpap-machine",
    "bipap-machine",
    "oxygen-concentrator",
  ]

  return cities.flatMap((location) =>
    productKeys.map((product) => ({
      product,
      location,
    }))
  )
}

// ✅ PRODUCTS
const products = {
  "cpap-machine": "CPAP Machine",
  "bipap-machine": "BiPAP Machine",
  "oxygen-concentrator": "Oxygen Concentrator",
} as const

type ProductKey = keyof typeof products

type PageParams = {
  product: string
  location: string
}

// ✅ LOCATION FORMATTER
function formatLocation(location: string) {
  if (!location) return "India"

  return location.charAt(0).toUpperCase() + location.slice(1)
}

// ✅ CONTENT MAP
const contentMap: Record<
  string,
  {
    title: string
    intro: string
    points: string[]
    paragraph: string
  }
> = {
  india: {
    title: "CPAP Machine in India – Best Prices & Fast Delivery",
    intro:
      "Looking to buy a CPAP machine in India? Respishop offers the latest CPAP, BiPAP, and oxygen concentrators at the best prices with fast delivery across India.",
    points: [
      "Wide range of CPAP & BiPAP machines",
      "Best prices in India",
      "Fast and secure delivery",
      "Trusted brands like ResMed",
    ],
    paragraph:
      "We provide genuine CPAP machines across India with warranty and expert support.",
  },
}

// ✅ DYNAMIC CONTENT
function generateDynamicContent(
  location: string,
  productName: string
) {
  const formatted = formatLocation(location)

  return {
    title: `${productName} in ${formatted} – Best Price & Fast Delivery`,
    intro: `Looking to buy ${productName} in ${formatted}? Respishop offers best prices, fast delivery, and expert support near you.`,
    points: [
      `Fast delivery in ${formatted}`,
      `Affordable ${productName} pricing`,
      `Trusted medical brands`,
      `Easy ordering & support`,
    ],
    paragraph: `Respishop provides genuine ${productName} in ${formatted} with warranty, installation support, and quick service across all major areas.`,
  }
}

// ✅ SEO METADATA
export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {

  const { product, location } = await params

  const productName =
    products[product as keyof typeof products] || product

  const formattedLocation = formatLocation(location)

  return {
    title: `${productName} in ${formattedLocation} – Price, Rental, Near Me & Home Delivery | Respishop`,

    description: `Buy ${productName} in ${formattedLocation} near you. Best price, rental options, and fast home delivery available.`,

    alternates: {
      canonical: `https://respishop.in/${product}/${location}`,
    },

    openGraph: {
      title: `${productName} in ${formattedLocation}`,
      description: `Buy ${productName} in ${formattedLocation} with fast delivery.`,
      url: `https://respishop.in/${product}/${location}`,
      siteName: "Respishop",
      type: "website",
    },
  }
}

// ✅ PAGE
export default async function Page({
  params,
}: {
  params: Promise<PageParams>
}) {

  const { product, location } = await params

  const productKey = product as ProductKey

  if (!products[productKey]) {
    return notFound()
  }

  const productName = products[productKey]

  const locationKey = location?.toLowerCase() || "india"

  if (!allowedCities.includes(locationKey)) {
    return notFound()
  }

  const content =
    contentMap[locationKey] ||
    generateDynamicContent(locationKey, productName)

  const formattedLocation = formatLocation(location)

  // ✅ FAQS
  const dynamicFaq = [
    {
      question: `Do you deliver ${productName} in ${formattedLocation}?`,
      answer: `Yes, we provide fast delivery of ${productName} in ${formattedLocation} including nearby areas.`,
    },
    {
      question: `What is the price of ${productName} in ${formattedLocation}?`,
      answer: `${productName} price in ${formattedLocation} depends on the model and features.`,
    },
    {
      question: `Is same-day delivery available in ${formattedLocation}?`,
      answer: `Yes, same-day or next-day delivery is available in most areas of ${formattedLocation}.`,
    },
  ]

  // ✅ FAQ SCHEMA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dynamicFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">
        {content.title} | Respishop
      </h1>

      {/* INTRO */}
      <p className="mb-4">
        {content.intro}
      </p>

      {/* POINTS */}
      <ul className="list-disc ml-6 mb-6">
        {content.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* PARAGRAPH */}
      <p className="mb-6">
        {content.paragraph}
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-3">
        About {productName} in {formattedLocation}
      </h2>

      <p className="mb-4">
        Respishop provides reliable {productName} solutions in{" "}
        {formattedLocation} with fast delivery and expert support.
      </p>

      {/* SERVICES */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        {productName} Services in {formattedLocation}
      </h2>

      <p className="mb-4">
        We offer sales, rental, and after-sales service for{" "}
        {productName} across {formattedLocation}.
      </p>

      {/* AREAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Areas We Serve in {formattedLocation}
      </h2>

      <p className="mb-6">
        {locationKey === "india"
          ? "We deliver across all major cities in India."
          : areaMap[locationKey]
          ? `We deliver in ${areaMap[
              locationKey
            ].join(", ")} and nearby areas in ${formattedLocation}.`
          : `We provide fast delivery across ${formattedLocation} and nearby locations.`}
      </p>

      {/* INTERNAL LINKS */}
      <h2 className="text-xl font-semibold mt-10 mb-3">
        Explore Other Cities
      </h2>

      <ul className="list-disc ml-6">
        {allowedCities
          .filter((c) => c !== locationKey)
          .map((city) => (
            <li key={city}>
              <Link href={`/${product}/${city}`}>
                {formatLocation(city)}
              </Link>
            </li>
          ))}
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {dynamicFaq.map((faq, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg"
          >
            <h3 className="font-semibold">
              {faq.question}
            </h3>

            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}