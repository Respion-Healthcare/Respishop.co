import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

export const dynamic = "force-static"

// ===============================
// SEO CITIES
// ===============================

const cities = ["india", "bangalore", "kolkata"]

const allowedCities = cities

// ===============================
// PRODUCT MAP
// ===============================

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

// ===============================
// AREA MAP
// ===============================

const areaMap: Record<string, string[]> = {
  bangalore: [
    "Whitefield",
    "BTM Layout",
    "Electronic City",
    "Indiranagar",
    "Hebbal",
  ],

  kolkata: [
    "Salt Lake",
    "Howrah",
    "Dum Dum",
    "Park Street",
    "New Town",
  ],
}

// ===============================
// STATIC PARAMS
// ===============================

export async function generateStaticParams() {
  return Object.keys(products).flatMap((product) =>
    cities.map((location) => ({
      product,
      location,
    }))
  )
}

// ===============================
// FORMAT LOCATION
// ===============================

function formatLocation(location: string) {
  return (
    location.charAt(0).toUpperCase() + location.slice(1)
  )
}

// ===============================
// UNIQUE CITY CONTENT
// ===============================

const cityContent: Record<
  string,
  {
    intro: string
    buyingGuide: string
    whyChoose: string[]
  }
> = {
  bangalore: {
    intro:
      "Respishop provides genuine CPAP machines in Bangalore with fast delivery, setup assistance, and expert sleep therapy support. We deliver across Whitefield, BTM Layout, Electronic City, Indiranagar, Hebbal, and nearby locations.",

    buyingGuide:
      "Choosing the right CPAP machine depends on pressure settings, portability, humidifier support, and doctor recommendations. Auto-adjusting CPAP machines are suitable for most users because they automatically regulate airflow during sleep.",

    whyChoose: [
      "Fast delivery across Bangalore",
      "ResMed & Philips authorized products",
      "Expert setup guidance",
      "Affordable pricing and rental options",
    ],
  },

  kolkata: {
    intro:
      "Buy CPAP machines in Kolkata from Respishop with warranty support, fast delivery, and expert guidance for sleep apnea treatment. We serve Salt Lake, Howrah, Dum Dum, Park Street, New Town, and nearby areas.",

    buyingGuide:
      "CPAP and BiPAP machines improve sleep therapy by maintaining consistent airflow during sleep. Choosing the correct machine depends on comfort, pressure needs, and humidification features.",

    whyChoose: [
      "Quick delivery across Kolkata",
      "Trusted medical equipment brands",
      "Affordable CPAP prices",
      "After-sales support and assistance",
    ],
  },

  india: {
    intro:
      "Respishop supplies CPAP machines, BiPAP devices, and oxygen concentrators across India with fast delivery, warranty support, and genuine medical equipment.",

    buyingGuide:
      "Modern CPAP machines offer advanced sleep therapy features including auto pressure adjustment, humidification, smart tracking, and quiet operation for improved comfort.",

    whyChoose: [
      "Pan-India delivery",
      "Genuine medical devices",
      "Trusted brands like ResMed",
      "Expert customer support",
    ],
  },
}

// ===============================
// SEO METADATA
// ===============================

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { product, location } = await params

  const productName =
    products[product as ProductKey]

  const formattedLocation =
    formatLocation(location)

  return {
    title: `${productName} in ${formattedLocation} – Best Price, Rental & Delivery | Respishop`,

    description: `Buy ${productName} in ${formattedLocation} with fast delivery, rental options, and expert support from Respishop.`,

    alternates: {
      canonical: `https://respishop.in/${product}/${location}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${productName} in ${formattedLocation}`,
      description: `Buy ${productName} in ${formattedLocation} with fast delivery and support.`,
      url: `https://respishop.in/${product}/${location}`,
      siteName: "Respishop",
      type: "website",
    },
  }
}

// ===============================
// PAGE
// ===============================

export default async function Page({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { product, location } =
    await params

  const productKey = product as ProductKey

  if (!products[productKey]) {
    return notFound()
  }

  if (!allowedCities.includes(location)) {
    return notFound()
  }

  const productName =
    products[productKey]

  const formattedLocation =
    formatLocation(location)

  const content =
    cityContent[location]

  // ===============================
  // FAQ
  // ===============================

  const faqs = [
    {
      question: `Do you deliver ${productName} in ${formattedLocation}?`,
      answer: `Yes, Respishop provides fast delivery of ${productName} across ${formattedLocation} and nearby areas.`,
    },

    {
      question: `What is the price of ${productName} in ${formattedLocation}?`,
      answer: `${productName} prices vary depending on model, features, and accessories.`,
    },

    {
      question: `Do you offer rental options?`,
      answer: `Yes, rental options are available for selected CPAP and BiPAP devices.`,
    },

    {
      question: `Which brands are available?`,
      answer: `We provide trusted brands including ResMed, Philips, and Oxymed.`,
    },

    {
      question: `Is installation support available?`,
      answer: `Yes, our team provides setup guidance and after-sales assistance.`,
    },
  ]

  // ===============================
  // FAQ SCHEMA
  // ===============================

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
/* BREADCRUMB SCHEMA */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://respishop.in",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: productName,
      item: `https://respishop.in/${product}`,
    },

    {
      "@type": "ListItem",
      position: 3,
      name: formattedLocation,
      item: `https://respishop.in/${product}/${location}`,
    },
  ],
}
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema
          ),
        }}
      />

{/* BREADCRUMB SCHEMA */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      breadcrumbSchema
    ),
  }}
/>
      {/* HERO */}
      <h1 className="text-4xl font-bold mb-6">
        {productName} in{" "}
        {formattedLocation}
      </h1>

      <p className="text-lg mb-6">
        {content.intro}
      </p>

      {/* WHY CHOOSE */}
      <div className="bg-gray-100 p-6 rounded-xl mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Respishop?
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {content.whyChoose.map(
            (point, i) => (
              <li key={i}>
                {point}
              </li>
            )
          )}
        </ul>
      </div>

      {/* ABOUT */}
      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          About {productName} in{" "}
          {formattedLocation}
        </h2>

        <p className="mb-4">
          Respishop offers genuine{" "}
          {productName} devices with
          warranty support, fast
          shipping, and expert customer
          service.
        </p>

        <p>
          Our team helps customers
          choose the correct sleep
          therapy device based on
          doctor recommendations and
          comfort requirements.
        </p>
      </section>

      {/* BUYING GUIDE */}
      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          How to Choose the Right{" "}
          {productName}
        </h2>

        <p>
          {content.buyingGuide}
        </p>
      </section>

{/* BENEFITS */}
<section className="mb-10">

  <h2 className="text-2xl font-semibold mb-4">
    Benefits of Using a {productName}
  </h2>

  <p className="mb-4">
    {productName} devices help patients suffering from sleep apnea by maintaining continuous airflow during sleep. Proper sleep therapy improves oxygen levels, reduces snoring, improves sleep quality, and helps reduce daytime fatigue.
  </p>

  <p className="mb-4">
    Modern sleep therapy devices include advanced comfort features such as humidification, auto pressure adjustment, smart therapy tracking, and quieter airflow systems for better comfort during long-term use.
  </p>

  <p>
    Respishop helps customers in {formattedLocation} choose the correct sleep therapy equipment with expert guidance, genuine products, and reliable after-sales support.
  </p>

</section>

{/* FEATURED PRODUCTS */}
<section className="mb-10">

  <h2 className="text-2xl font-semibold mb-6">
    Popular {productName} Products
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* PRODUCT 1 */}
    <Link
      href="/products/resmed-airsense-10-autoset-tripack"
      className="border rounded-xl p-5 hover:shadow-lg transition"
    >

      <h3 className="font-semibold text-lg mb-2">
        ResMed AirSense 10 AutoSet
      </h3>

      <p className="mb-3 text-sm text-gray-600">
        Auto-adjusting CPAP machine with humidifier and advanced sleep tracking.
      </p>

      <p className="font-bold">
        Premium CPAP Device
      </p>

    </Link>

    {/* PRODUCT 2 */}
    <Link
      href="/products/airsense-11-autoset-single-pack"
      className="border rounded-xl p-5 hover:shadow-lg transition"
    >

      <h3 className="font-semibold text-lg mb-2">
        AirSense 11 AutoSet
      </h3>

      <p className="mb-3 text-sm text-gray-600">
        Advanced CPAP therapy device with smart connectivity and quiet operation.
      </p>

      <p className="font-bold">
        Latest Sleep Therapy Device
      </p>

    </Link>

    {/* PRODUCT 3 */}
    <Link
      href="/products/airmini-autoset-cpap-device"
      className="border rounded-xl p-5 hover:shadow-lg transition"
    >

      <h3 className="font-semibold text-lg mb-2">
        ResMed AirMini Travel CPAP
      </h3>

      <p className="mb-3 text-sm text-gray-600">
        Portable travel CPAP machine designed for compact and lightweight therapy.
      </p>

      <p className="font-bold">
        Travel-Friendly CPAP
      </p>

    </Link>

  </div>

</section>

{/* BREADCRUMBS */}
<section className="mb-10 text-sm text-gray-600">

  <div className="flex gap-2 flex-wrap">

    <Link
      href="/"
      className="hover:underline"
    >
      Home
    </Link>

    <span>/</span>

    <Link
      href={`/${product}`}
      className="hover:underline"
    >
      {productName}
    </Link>

    <span>/</span>

    <span>
      {formattedLocation}
    </span>

  </div>

</section>


      {/* AREAS */}
      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Areas We Serve in{" "}
          {formattedLocation}
        </h2>

        <p>
          {location === "india"
            ? "We provide delivery across major cities in India."
            : `We deliver in ${areaMap[
                location
              ]?.join(
                ", "
              )} and nearby areas.`}
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Helpful Resources
        </h2>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            <Link
              className="text-blue-600 underline"
              href="/blog/best-cpap-machine-in-india"
            >
              Best CPAP Machine in
              India
            </Link>
          </li>

          <li>
            <Link
              className="text-blue-600 underline"
              href="/products"
            >
              Browse All Products
            </Link>
          </li>

          <li>
            <Link
              className="text-blue-600 underline"
              href="/contact"
            >
              Contact Respishop
            </Link>
          </li>

        </ul>
      </section>

      {/* OTHER CITIES */}
      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Explore Other Cities
        </h2>

        <ul className="list-disc ml-6">

          {allowedCities
            .filter(
              (city) =>
                city !== location
            )
            .map((city) => (
              <li key={city}>
                <Link
                  className="text-blue-600 underline"
                  href={`/${product}/${city}`}
                >
                  {formatLocation(city)}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      {/* FAQ */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl p-5"
            >
              <h3 className="font-semibold mb-2">
                {faq.question}
              </h3>

              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  )
}