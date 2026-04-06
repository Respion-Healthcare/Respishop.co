import { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = 'force-static'

const areaMap: Record<string, string[]> = {
  bhubaneswar: ["Patia", "Khandagiri", "Rasulgarh", "Nayapalli"],
  patna: ["Kankarbagh", "Boring Road", "Danapur", "Rajendra Nagar"],
  ranchi: ["Harmu", "Doranda", "Lalpur", "Morabadi"],
}

export async function generateStaticParams() {
  const locations = ['bhubaneswar', 'patna', 'ranchi']
  const productKeys = ['cpap-machine', 'bipap-machine', 'oxygen-concentrator']

  return locations.flatMap((location) =>
    productKeys.map((product) => ({
      product,
      location,
    }))
  )
}

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
      "We provide genuine CPAP machines across India with warranty and expert support.",
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
      "Respishop provides CPAP machines in Bhubaneswar including Patia, Khandagiri, and Rasulgarh.",
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
      "We deliver CPAP machines across Ranchi including Harmu, Doranda, and Lalpur.",
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
      "Respishop offers CPAP machines in Patna including Kankarbagh, Boring Road.",
  },
}

export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {

  const { product, location } = await params

  const productName =
    products[product as keyof typeof products] || product

  return {
    title: `${productName} in ${location} – Price, Rental & Home Delivery | Respishop`,
    description: `Get ${productName} in ${location} with best price, fast delivery, and expert support.`,
  }
}

// ✅ PAGE
export default async function Page({ params }: { params: Promise<PageParams> }) {

  const { product, location } = await params

  const productKey = product as ProductKey
  if (!products[productKey]) return notFound()

  const productName = products[productKey]

  const locationKey = location?.toLowerCase() || "india"
  const content = contentMap[locationKey] || contentMap["india"]

  const formattedLocation =
    location.charAt(0).toUpperCase() + location.slice(1)

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-3xl font-bold mb-4">
        {content.title}
      </h1>

      <p className="mb-4">{content.intro}</p>

      <ul className="list-disc ml-6 mb-6">
        {content.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <p className="mb-6">{content.paragraph}</p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-3">
        About {productName} in {formattedLocation}
      </h2>

      <p className="mb-4">
        Respishop provides reliable {productName} solutions in {formattedLocation} with fast delivery and expert support.
      </p>

      {/* SERVICES */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        {productName} Services in {formattedLocation}
      </h2>

      <p className="mb-4">
        We offer sales, rental, and after-sales service for {productName} across {formattedLocation}.
      </p>

      {/* AREAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Areas We Serve in {formattedLocation}
      </h2>

      <p className="mb-6">
        We deliver in {areaMap[locationKey]?.join(", ") || formattedLocation}.
      </p>

      {/* INTERNAL LINKS */}
      <h2 className="text-xl font-semibold mt-10 mb-3">
        Explore Other Cities
      </h2>

      <ul className="list-disc ml-6">
        <li><a href="/cpap-machine/patna">Patna</a></li>
        <li><a href="/cpap-machine/ranchi">Ranchi</a></li>
        <li><a href="/cpap-machine/bhubaneswar">Bhubaneswar</a></li>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {dynamicFaq.map((faq, i) => (
          <div key={i} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

    </div>
  )
}