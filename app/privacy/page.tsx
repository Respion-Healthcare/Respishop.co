import Head from "next/head"

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Respishop India</title>
        <meta
          name="description"
          content="Read Respishop's Privacy Policy to understand how we collect, use, protect, and process your personal information in compliance with Indian data protection laws."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Respishop" />
        <meta
          property="og:description"
          content="Learn how Respishop collects, uses, and safeguards your personal information."
        />
        <meta property="og:url" content="https://respishop.in/privacy-policy" />
        <meta property="og:type" content="website" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              url: "https://respishop.in/privacy-policy",
              description:
                "Respishop Privacy Policy explaining data collection, use, security practices, and user rights under Indian law.",
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
            🔒 Privacy Policy
          </h1>
          <p className="text-gray-600 mb-10 text-lg">
            Effective Date: 13-01-2026 <br />
            Website: https://respishop.in
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-[16px]">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p>
                This Privacy Policy describes how <strong>Respishop</strong> collects,
                uses, shares, protects, and processes your personal data through our
                website and related services within India.
              </p>
              <p className="mt-4">
                By accessing or using our platform, you expressly consent to this
                Privacy Policy and agree to be governed by the laws of India,
                including applicable data protection regulations.
              </p>
            </section>

            {/* Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Collection of Information
              </h2>
              <p>
                We collect personal data when you register, place orders,
                interact with customer support, or otherwise engage with our Platform.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name</li>
                <li>Address</li>
                <li>Telephone / Mobile Number</li>
                <li>Email Address</li>
                <li>Order & Transaction Details</li>
                <li>Customer Support Communications</li>
              </ul>
              <p className="mt-4">
                Payment information is processed securely through certified
                third-party payment gateways. Respishop does not store card
                or banking credentials.
              </p>
            </section>

            {/* Important Notice */}
            <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                ⚠️ Important Notice
              </h3>
              <p>
                Respishop will never ask for your OTP, card PIN, net banking
                password, or sensitive credentials. If anyone requests such
                information claiming to represent Respishop, please report it
                immediately.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Use of Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and fulfilling orders</li>
                <li>Managing payments, refunds, and cancellations</li>
                <li>Customer support and dispute resolution</li>
                <li>Improving platform functionality</li>
                <li>Sending service updates and promotional offers</li>
                <li>Fraud detection and prevention</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Sharing of Information
              </h2>
              <p>We may share data with:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Vendors and sellers</li>
                <li>Logistics partners</li>
                <li>Payment gateways</li>
                <li>IT and analytics providers</li>
                <li>Government authorities when required by law</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Security Measures
              </h2>
              <p>
                We implement industry-standard safeguards including secure servers,
                encrypted transactions, and controlled access to protect your data.
                However, internet transmission carries inherent risks beyond our control.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Retention & Deletion
              </h2>
              <p>
                You may request account deletion by contacting us. We may retain
                information where legally required or necessary for dispute resolution.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p>
                You may access, review, update, or correct your information
                subject to applicable Indian laws.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Changes to this Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Continued use of
                the platform after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gray-100 p-8 rounded-xl shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                📩 Grievance Officer
              </h2>
              <p><strong>Company:</strong> Respishop</p>
              <p><strong>Email:</strong> respishop.in@gmail.com</p>
              <p><strong>Phone:</strong> +91 7077720507</p>
              <p><strong>Working Hours:</strong> Monday – Friday (09:00 AM – 06:00 PM)</p>
              <p><strong>Website:</strong> https://respishop.in</p>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}