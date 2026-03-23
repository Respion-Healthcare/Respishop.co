import { Metadata } from "next"
import { notFound } from "next/navigation"

const products = {
  "cpap-machine": "CPAP Machine",
  "bipap-machine": "BiPAP Machine",
  "oxygen-concentrator": "Oxygen Concentrator",
} as const

type ProductKey = keyof typeof products

type PageParams = {
  product: ProductKey
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
      "Buy CPAP machine in Bhubaneswar with fast delivery and expert support. Get top-quality CPAP and oxygen concentrators at affordable prices.",
    points: [
      "Same-day or fast delivery in Bhubaneswar",
      "Affordable pricing",
      "Expert consultation available",
      "100% genuine products",
    ],
    paragraph:
      "Respishop is a trusted supplier of CPAP machines in Bhubaneswar. We provide high-quality devices for sleep apnea and respiratory care with doorstep delivery.",
  },

  ranchi: {
    title: "CPAP Machine in Ranchi – Best Deals & Quick Delivery",
    intro:
      "Looking for CPAP machines in Ranchi? Get the best deals on CPAP, BiPAP, and oxygen concentrators with fast delivery.",
    points: [
      "Fast delivery in Ranchi",
      "Best price guarantee",
      "Top medical brands",
      "Customer support available",
    ],
    paragraph:
      "We supply high-quality CPAP machines in Ranchi for effective sleep apnea treatment.",
  },

  patna: {
    title: "CPAP Machine in Patna – Affordable Price & Fast Delivery",
    intro:
      "Buy CPAP machine in Patna at the best price. We provide high-quality machines with quick delivery and full support.",
    points: [
      "Quick delivery in Patna",
      "Affordable pricing",
      "Trusted CPAP brands",
      "Easy ordering process",
    ],
    paragraph:
      "Respishop offers CPAP machines in Patna with reliable service and genuine products.",
  },
}

// ✅ FAQ DATA
const faqData = [
  {
    question: "What is a CPAP machine?",
    answer:
      "A CPAP machine is a device used to treat sleep apnea by providing continuous air pressure to keep airways open.",
  },
  {
    question: "What is the price of CPAP machine in India?",
    answer:
      "CPAP machine prices in India range from ₹25,000 to ₹80,000 depending on features.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver across India including Bhubaneswar, Ranchi, and Patna.",
  },
  {
    question: "Where can I buy CPAP machine?",
    answer:
      "You can buy CPAP machines online from Respishop with fast delivery and expert support.",
  },
]

// ✅ Metadata
export async function generateMetadata(
  { params }: { params: PageParams }
): Promise<Metadata> {
const productName = params?.product
  const locationName = params.location

  return {
    title: `Buy ${productName} in ${locationName} | Best Price | Respishop`,
    description: `Get ${productName} in ${locationName} at best price with fast delivery and expert support.`,
  }
}

// ✅ Page Component
export default function Page({ params }: { params: PageParams }) {
  const productName = params?.product

const locationKey = params?.location?.toLowerCase() || "india"
  const content = contentMap[locationKey] || contentMap["india"]

  if (!productName) {
    return notFound()
  }

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

      <h2 className="text-2xl font-semibold mb-3">
        Why Choose Respishop?
      </h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li>100% Genuine Products</li>
        <li>Best Price Guarantee</li>
        <li>Fast Delivery Across India</li>
        <li>Expert Customer Support</li>
      </ul>

      <div className="mt-8 p-4 border rounded-xl bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">
          Need Help Choosing the Right {productName}?
        </h3>
        <p className="mb-3">
          Contact us on WhatsApp or call now for expert guidance.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Chat on WhatsApp
        </button>
      </div>

      {/* ✅ FAQ SECTION */}
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