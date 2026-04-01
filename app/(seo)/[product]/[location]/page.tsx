import { Metadata } from "next"
import { notFound } from "next/navigation"

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

// ✅ SEO Content Map
const contentMap: Record<string, {
  title: string
  intro: string
  points: string[]
  paragraph: string
}> = {
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
      "We provide genuine CPAP machines across India with warranty and expert support. Whether you need treatment for sleep apnea or oxygen support, we ensure quick delivery and reliable service.",
  },

  bhubaneswar: {
    title: "CPAP Machine in Bhubaneswar – Best Price & Home Delivery",
    intro:
      "Buy CPAP machine in Bhubaneswar with fast delivery and expert support.",
    points: [
      "Same-day delivery in Bhubaneswar",
      "Affordable pricing",
      "Expert consultation",
      "100% genuine products",
    ],
    paragraph:
      "Respishop provides CPAP machines in Bhubaneswar including Patia, Khandagiri, and Rasulgarh with fast delivery and expert support.",
  },

  ranchi: {
    title: "CPAP Machine in Ranchi – Best Deals & Quick Delivery",
    intro:
      "Looking for CPAP machines in Ranchi? Get the best deals with fast delivery.",
    points: [
      "Fast delivery in Ranchi",
      "Best price guarantee",
      "Top medical brands",
      "Customer support available",
    ],
    paragraph:
      "We deliver CPAP machines across Ranchi including Harmu, Doranda, and Lalpur with reliable service.",
  },

  patna: {
    title: "CPAP Machine in Patna – Affordable Price & Fast Delivery",
    intro:
      "Buy CPAP machine in Patna at the best price with quick delivery.",
    points: [
      "Quick delivery in Patna",
      "Affordable pricing",
      "Trusted CPAP brands",
      "Easy ordering process",
    ],
    paragraph:
      "Respishop offers CPAP machines in Patna including Kankarbagh, Boring Road, and nearby areas with reliable service.",
  },
}

// ✅ FAQ DATA
const faqData = [
  {
    question: "What is a CPAP machine?",
    answer:
      "A CPAP machine is used to treat sleep apnea by maintaining continuous airflow.",
  },
  {
    question: "What is the price of CPAP machine in India?",
    answer:
      "CPAP machine prices range from ₹25,000 to ₹80,000 depending on features.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver across India including major cities with fast shipping.",
  },
]

// ✅ Metadata
export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {

  const { product, location } = await params

  return {
    title: `Buy ${product} in ${location} | Best Price | Respishop`,
    description: `Get ${product} in ${location} at best price with fast delivery.`,
  }
}

// ✅ Page Component
export default async function Page({ params }: { params: Promise<PageParams> }) {

  const { product, location } = await params

  const productKey = product as ProductKey

  if (!products[productKey]) {
    return notFound()
  }

  const productName = products[productKey]

  const locationKey = location?.toLowerCase() || "india"
  const content = contentMap[locationKey] || contentMap["india"]

  // ✅ FAQ SCHEMA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
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

      {/* ✅ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 🔥 MAIN */}
      <h1 className="text-3xl font-bold mb-4">
        {content.title}
      </h1>

      <p className="mb-4 text-gray-700">
        {content.intro}
      </p>

      <ul className="list-disc ml-6 mb-6 text-gray-700">
        {content.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <p className="mb-6 text-gray-700">
        {content.paragraph}
      </p>

      {/* 🔥 NEW UNIQUE CONTENT (INDEX FIX) */}
      <h2 className="text-2xl font-semibold mb-3">
        About {productName} in {location}
      </h2>

      <p className="text-gray-700 mb-4">
        If you are searching for {productName} in {location}, Respishop provides reliable and affordable solutions with fast delivery and expert guidance.
      </p>

      <p className="text-gray-700 mb-6">
        We ensure quick service in {location} and nearby areas, helping patients get the right treatment for sleep apnea and respiratory care.
      </p>

      {/* 🔥 WHY US */}
      <h2 className="text-2xl font-semibold mb-3">
        Why Choose Respishop?
      </h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li>100% Genuine Products</li>
        <li>Best Price Guarantee</li>
        <li>Fast Delivery Across India</li>
        <li>Expert Customer Support</li>
      </ul>

      {/* 🔥 CTA */}
      <div className="mt-8 p-4 border rounded-xl bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">
          Need Help Choosing the Right {productName}?
        </h3>
        <p className="mb-3">
          Contact us for expert guidance and support.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Chat on WhatsApp
        </button>
      </div>

      {/* 🔥 FAQ */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-700 mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>

    </div>
  )
}