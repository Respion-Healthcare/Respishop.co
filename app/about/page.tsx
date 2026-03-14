"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const [counts, setCounts] = useState({
    locations: 0,
    staff: 0,
    trust: 0,
  })

  const testimonials = [
    {
      name: "Manaswini Mohapatra",
      text: "The remote monitoring service is fantastic. They call me if they see issues in my sleep data. It feels reassuring knowing someone is monitoring my health."
    },
    {
      name: "Debasis Jena",
      text: "Honest pricing and no unnecessary sales pressure. Highly recommended in Bhubaneswar for sleep therapy support."
    },
    {
      name: "Satyajit Mishra",
      text: "They set up the machine at home and explained everything in Odia. My father felt comfortable and confident."
    },
    {
      name: "Anjali Panigrahi",
      text: "Delivered my CPAP mask to Puri the next day. Genuine service and polite staff."
    }
  ]

  /* Testimonial Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  /* Animated Counter */
  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += 1

      if (start <= 4) {
        setCounts((prev) => ({ ...prev, locations: start }))
      }
      if (start <= 12) {
        setCounts((prev) => ({ ...prev, staff: start }))
      }
      if (start <= 3) {
        setCounts((prev) => ({ ...prev, trust: start }))
      }

      if (start > 12) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [])
return (
  <>
    <Head>
      <title>About Respishop | Sleep Therapy & CPAP Experts in India</title>
      <meta
        name="description"
        content="Learn about Respishop — a trusted sleep therapy and CPAP solutions provider serving Odisha, Jharkhand, Bihar, and Bengaluru since 2021."
      />
      <meta
        name="keywords"
        content="Respishop, CPAP provider India, sleep therapy Bhubaneswar, respiratory care India, ResMed partner Odisha"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://respishop.in/about" />

      {/* OpenGraph */}
      <meta property="og:title" content="About Respishop | Sleep Therapy Experts" />
      <meta
        property="og:description"
        content="Trusted sleep therapy and CPAP provider serving Eastern India since 2021."
      />
      <meta property="og:url" content="https://respishop.in/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Respishop" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Respishop" />
      <meta
        name="twitter:description"
        content="Respishop — improving respiratory healthcare across India."
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Respishop",
            url: "https://respishop.in",
            description:
              "Respishop provides sleep therapy and CPAP solutions across Odisha, Jharkhand, Bihar, and Bengaluru.",
            foundingDate: "2021",
            areaServed: "India",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9148733700",
              contactType: "Customer Support",
              areaServed: "IN",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "702, 13th Cross Rd, 1st Phase, J.P Nagar",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560078",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </Head>

    <main className="pt-[120px] bg-white overflow-hidden">

      {/* ABOUT SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About Respishop
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3+ Years of Excellence in Sleep Therapy
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in July 2025, Respishop was created to improve
              respiratory healthcare in India. We partner with global leaders
              like ResMed to deliver advanced sleep therapy solutions across India.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              We are more than a supplier — we are a team dedicated to helping
              patients breathe easier and live healthier lives.
            </p>
          </div>

          {/* GLASSMORPHISM STATS */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 grid grid-cols-2 gap-8">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                {counts.locations}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Regional Locations
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                {counts.staff}+
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Dedicated Staff
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Authorized Partner
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                {counts.trust}+
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Years of Trust
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative group">

          {/* Gradient Glow */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 via-blue-50 to-white rounded-3xl blur-2xl opacity-60"></div>

          {/* Floating Badge */}
          <div className="absolute top-6 left-6 z-20 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold animate-bounce">
            Trusted Since 2021
          </div>

          {/* Parallax Hover Image */}
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-105">
            <Image
              src="/images/aboutus.webp"
              alt="Respishop Team"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>


      {/* VISION / MISSION / PROMISE */}
    <section className="relative max-w-6xl mx-auto px-6 py-24">

  {/* Soft Blue Background Glow */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
                  bg-blue-100 rounded-full blur-[120px] opacity-50"></div>

  <div className="relative grid md:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="group relative p-8 rounded-3xl 
                    bg-white/70 backdrop-blur-xl 
                    border border-blue-100 
                    shadow-lg transition-all duration-500
                    hover:shadow-blue-200 hover:-translate-y-2">

      {/* Subtle Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                      from-blue-100/40 to-transparent opacity-0 
                      group-hover:opacity-100 transition duration-500"></div>

      <div className="relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative inline-block">
          Our Vision
          <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To become India's most trusted name in sleep therapy,
          raising healthcare standards through awareness and accessibility.
        </p>
      </div>
    </div>


    {/* CARD 2 */}
    <div className="group relative p-8 rounded-3xl 
                    bg-white/70 backdrop-blur-xl 
                    border border-blue-100 
                    shadow-lg transition-all duration-500
                    hover:shadow-blue-200 hover:-translate-y-2">

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                      from-blue-100/40 to-transparent opacity-0 
                      group-hover:opacity-100 transition duration-500"></div>

      <div className="relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative inline-block">
          Our Promise
          <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We treat every customer like family with transparent pricing
          and honest advice.
        </p>
      </div>
    </div>


    {/* CARD 3 */}
    <div className="group relative p-8 rounded-3xl 
                    bg-white/70 backdrop-blur-xl 
                    border border-blue-100 
                    shadow-lg transition-all duration-500
                    hover:shadow-blue-200 hover:-translate-y-2">

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                      from-blue-100/40 to-transparent opacity-0 
                      group-hover:opacity-100 transition duration-500"></div>

      <div className="relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative inline-block">
          Our Mission
          <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Deliver reliable sleep therapy solutions backed by
          responsive service and continuous support.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* TESTIMONIAL + CONTACT */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">

          {/* TESTIMONIAL */}
          <div className="bg-blue-600 text-white rounded-3xl p-12 shadow-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10 text-center">
              What Our Clients Say
            </h2>

            <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-lg min-h-[220px] transition-all duration-500">
              <p className="text-lg italic mb-6 text-center">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="text-center">
                <h4 className="font-semibold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-gray-500">Respishop Client</p>
              </div>
            </div>
          </div>

          {/* CONTACT */}
       <div className="bg-white rounded-3xl p-12 shadow-2xl flex flex-col justify-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Get in Touch
  </h2>

  <div className="space-y-6 text-center">
    
    {/* CALL */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 
                    rounded-2xl p-6 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1">
      <p className="text-blue-600 text-sm font-medium">Call for help</p>
      <p className="text-xl font-semibold text-gray-800">
        +91 9148733700
      </p>
    </div>

    {/* EMAIL */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 
                    rounded-2xl p-6 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1">
      <p className="text-blue-600 text-sm font-medium">Email</p>
      <p className="text-lg font-medium text-gray-800">
        respishop.in@gmail.com
      </p>
    </div>

    {/* ADDRESS */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 
                    rounded-2xl p-6 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1">
      <p className="text-blue-600 text-sm font-medium">Address</p>
      <p className="text-gray-700">
        702, 13th Cross Rd, 1st Phase,<br />
        J.P Nagar, Bengaluru,<br />
        Karnataka - 560078
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

    </main>
    </>
  )
}