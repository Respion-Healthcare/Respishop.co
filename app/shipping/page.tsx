import Head from "next/head"

export default function ShippingPage() {
  return (
    <>
      <Head>
        <title>Shipping Policy | Respishop India</title>
        <meta
          name="description"
          content="Read Respishop's Shipping Policy to understand vendor fulfillment, delivery timelines, shipping charges, tracking details, and delivery issue handling."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Shipping Policy | Respishop" />
        <meta
          property="og:description"
          content="Learn how shipping and delivery are managed on the Respishop marketplace platform."
        />
        <meta property="og:url" content="https://respishop.in/shipping-policy" />
        <meta property="og:type" content="website" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Shipping Policy",
              url: "https://respishop.in/shipping-policy",
              description:
                "Respishop Shipping Policy outlining vendor fulfillment, delivery timelines, shipping costs, and customer responsibilities.",
              publisher: {
                "@type": "Organization",
                name: "Respishop",
                url: "https://respishop.in",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  email: "respishop.in@gmail.com",
                  telephone: "+91-7077720507",
                  areaServed: "IN",
                },
              },
            }),
          }}
        />
      </Head>

      <main className="pt-[120px] min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            🚚 Shipping Policy
          </h1>
          <p className="text-gray-600 mb-10 text-lg">
            Thank you for choosing Respishop. Please review this Shipping Policy carefully to understand how product delivery is managed through our platform.
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-[16px]">

            {/* Vendor Fulfillment */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Vendor Fulfillment
              </h2>
              <p>
                Respishop operates primarily as a marketplace platform and does not directly handle the shipping of products. Each vendor listed on the Platform is solely responsible for the fulfillment and delivery of their respective products.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Estimated delivery times are displayed on individual product pages.</li>
                <li>Delivery timelines may vary depending on product type and vendor location.</li>
                <li>Logistical factors and regional conditions may affect delivery schedules.</li>
              </ul>
            </section>

            {/* Shipping Costs */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Shipping Costs
              </h2>
              <p>
                Shipping charges are determined by the respective vendors and may vary based on:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Delivery location</li>
                <li>Product weight and dimensions</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="mt-4">
                Applicable shipping fees are displayed at checkout before order confirmation.
              </p>
            </section>

            {/* Tracking Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Tracking Information
              </h2>
              <p>
                Vendors may provide tracking details once an order has been dispatched.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Tracking information is typically shared via order confirmation email.</li>
                <li>Customers may also receive updates directly from the vendor.</li>
                <li>If tracking details are unavailable, customers should contact the vendor directly.</li>
              </ul>
            </section>

            {/* Delivery Issues */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Delivery Issues
              </h2>
              <p>
                All matters related to product delivery — including delays, lost packages, or damaged items — must be addressed directly with the vendor responsible for fulfillment.
              </p>
              <p className="mt-4 font-medium">
                Respishop acts solely as a facilitator between buyers and vendors and is not liable for shipping-related issues.
              </p>
            </section>

            {/* Acknowledgment */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Acknowledgment
              </h2>
              <p>
                By placing an order through Respishop, you acknowledge and agree to the terms outlined in this Shipping Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-100 p-8 rounded-xl shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                📩 Contact Information
              </h2>
              <p><strong>Email:</strong> respishop.in@gmail.com</p>
              <p><strong>Phone:</strong> +91 7077720507</p>
              <p><strong>Website:</strong> https://respishop.in</p>
              <p className="mt-4 text-sm text-gray-600">
                For vendor-specific shipping inquiries, please refer to your order confirmation details.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}