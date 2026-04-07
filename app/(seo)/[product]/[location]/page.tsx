import { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = 'force-static'

const allCities = [
  "delhi", "mumbai", "kolkata", "chennai", "bangalore",
  "hyderabad", "pune", "ahmedabad", "jaipur", "lucknow",
  "kanpur", "nagpur", "indore", "bhopal", "visakhapatnam",
  "vadodara", "ludhiana", "agra", "nashik", "faridabad"
]

const areaMap: Record<string, string[]> = {
  bhubaneswar: ["Patia", "Saheed Nagar", "Rasulgarh", "Nayapalli"],
  patna: ["Kankarbagh", "Boring Road", "Danapur", "Rajendra Nagar"],
  ranchi: ["Harmu", "Doranda", "Lalpur", "Morabadi"],

  delhi: ["Karol Bagh", "Dwarka", "Saket", "Rohini"],
  mumbai: ["Andheri", "Dadar", "Borivali", "Navi Mumbai"],
  kolkata: ["Salt Lake", "Howrah", "Park Street", "Dum Dum"],
  bangalore: ["Whitefield", "BTM", "Indiranagar", "Electronic City"],
  hyderabad: ["Banjara Hills", "Gachibowli", "Madhapur", "Kukatpally"],
  chennai: ["T Nagar", "Velachery", "Anna Nagar", "Tambaram"],
  pune: ["Hinjewadi", "Kothrud", "Viman Nagar", "Wakad"],
  ahmedabad: ["Navrangpura", "Maninagar", "Satellite", "Bopal"],
  jaipur: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C Scheme"],
  lucknow: ["Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar"],
}

export async function generateStaticParams() {
  const locations = [
    'india',
    'bhubaneswar', 'patna',
    'delhi', 'mumbai', 'kolkata', 'chennai', 'bangalore', 'hyderabad',
    'pune', 'ahmedabad', 'jaipur', 'lucknow', 'kanpur',
    'nagpur', 'indore', 'bhopal', 'visakhapatnam', 'vadodara',
    'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut',
    'rajkot', 'varanasi', 'srinagar', 'aurangabad', 'dhanbad',
    'amritsar', 'allahabad', 'ranchi', 'howrah', 'coimbatore',
    'jabalpur', 'gwalior', 'vijayawada', 'jodhpur', 'madurai',
    'raipur', 'kota', 'guwahati', 'chandigarh', 'solapur',
    'hubli', 'tiruchirappalli', 'bareilly', 'mysore', 'tiruppur'
  ]

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

function generateDynamicContent(location: string, productName: string) {
  const formatted =
    location.charAt(0).toUpperCase() + location.slice(1)

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

export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {

  const { product, location } = await params

  const productName =
    products[product as keyof typeof products] || product

  return {
    title: `${productName} in ${location} – Price, Rental, Near Me & Home Delivery | Respishop`,
    description: `Buy ${productName} in ${location} near you. Best price, rental options, and fast home delivery available.`,
  }
}

// ✅ PAGE
export default async function Page({ params }: { params: Promise<PageParams> }) {

  const { product, location } = await params

  const productKey = product as ProductKey
  if (!products[productKey]) return notFound()

  const productName = products[productKey]

  const locationKey = location?.toLowerCase() || "india"

  const content =
    contentMap[locationKey] ||
    generateDynamicContent(locationKey, productName)

  const formattedLocation =
    location
      ? location.charAt(0).toUpperCase() + location.slice(1)
      : "India"

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
        {content.title} | Respishop
      </h1>

      <p className="mb-4">{content.intro}</p>

      <ul className="list-disc ml-6 mb-6">
        {content.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <p className="mb-6">{content.paragraph}</p>

      <h2 className="text-2xl font-semibold mb-3">
        About {productName} in {formattedLocation}
      </h2>

      <p className="mb-4">
        Respishop provides reliable {productName} solutions in {formattedLocation} with fast delivery and expert support.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        {productName} Services in {formattedLocation}
      </h2>

      <p className="mb-4">
        We offer sales, rental, and after-sales service for {productName} across {formattedLocation}.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Areas We Serve in {formattedLocation}
      </h2>

      <p className="mb-6">
        {locationKey === "india"
          ? "We deliver across all major cities in India."
          : areaMap[locationKey]
          ? `We deliver in ${areaMap[locationKey].join(", ")} and nearby areas in ${formattedLocation}.`
          : `We provide fast delivery across ${formattedLocation} and nearby locations.`}
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Explore Other Cities
      </h2>

      <ul className="list-disc ml-6">
        {allCities
          .filter((c) => c !== locationKey)
          .slice(0, 10)
          .map((city) => (
            <li key={city}>
              <a href={`/${product}/${city}`}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </a>
            </li>
          ))}
      </ul>

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