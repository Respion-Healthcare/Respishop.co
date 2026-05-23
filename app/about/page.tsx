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
      text: "The remote monitoring service is fantastic. They call me if they see issues in my sleep data. It feels reassuring knowing someone is monitoring my health.",
    },
    {
      name: "Debasis Jena",
      text: "Honest pricing and no unnecessary sales pressure. Highly recommended in India for sleep therapy support.",
    },
    {
      name: "Satyajit Mishra",
      text: "They set up the machine at home and explained everything in Odia. My father felt comfortable and confident.",
    },
    {
      name: "Anjali Panigrahi",
      text: "Delivered my CPAP mask to Puri the next day. Genuine service and polite staff.",
    },
  ]

  /* TESTIMONIAL AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  /* COUNTER */
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
        <title>
          About Respishop | CPAP, BiPAP & Sleep Therapy Experts in India
        </title>

        <meta
          name="description"
          content="Respishop is a trusted provider of CPAP, BiPAP, oxygen concentrators, sleep study services, and respiratory healthcare solutions across India."
        />

        <meta
          name="keywords"
          content="Respishop, CPAP India, BiPAP India, sleep therapy India, oxygen concentrator India, respiratory care India"
        />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://respishop.in/about" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="About Respishop | Sleep Therapy Experts"
        />

        <meta
          property="og:description"
          content="Trusted CPAP, BiPAP, and respiratory healthcare provider serving patients across India."
        />

        <meta
          property="og:image"
          content="https://respishop.in/images/aboutus.webp"
        />

        <meta property="og:url" content="https://respishop.in/about" />

        <meta property="og:type" content="website" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Respishop",
              image: "https://respishop.in/images/aboutus.webp",
              url: "https://respishop.in",
              telephone: "+91-9148733700",
              email: "respishop.in@gmail.com",
              description:
                "Respishop provides CPAP, BiPAP, oxygen concentrators and respiratory healthcare solutions across India.",
            }),
          }}
        />
      </Head>

    <main className="relative overflow-hidden bg-gradient-to-b from-[#f4fbff] via-[#eef7ff] to-white pt-[20px]">        {/* ANIMATIONS */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes pulseGlow {
            0% {
              opacity: 0.45;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.03);
            }
            100% {
              opacity: 0.45;
              transform: scale(1);
            }
          }

          .float-animation {
            animation: float 6s ease-in-out infinite;
          }

          .pulse-glow {
            animation: pulseGlow 8s ease-in-out infinite;
          }
        `}</style>

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-0 left-[-120px] w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-[120px] pulse-glow" />

          <div className="absolute top-[450px] right-[-120px] w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[120px] pulse-glow" />

          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[120px] pulse-glow" />

        </div>

        {/* HERO SECTION */}
<section className="relative w-full min-h-screen px-10 md:px-16 lg:px-20 xl:px-24 pt-6 pb-10 flex items-start">        <div className="grid lg:grid-cols-2 gap-10 items-center w-full mt-6">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-5">
                Trusted Respiratory Healthcare
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-gray-900 mb-5">

                Transforming

                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Sleep Therapy
                </span>

                <br />

                Across India

              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Respishop delivers premium CPAP, BiPAP, oxygen concentrators,
                sleep study services, and respiratory care solutions with
                trusted support and advanced expertise.
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-4">

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl px-6 py-5 min-w-[150px] hover:-translate-y-1 transition duration-500">

                  <h3 className="text-3xl font-black text-blue-600">
                    {counts.locations}
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    Regional Locations
                  </p>

                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl px-6 py-5 min-w-[150px] hover:-translate-y-1 transition duration-500">

                  <h3 className="text-3xl font-black text-blue-600">
                    {counts.staff}+
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    Healthcare Experts
                  </p>

                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl px-6 py-5 min-w-[150px] hover:-translate-y-1 transition duration-500">

                  <h3 className="text-3xl font-black text-blue-600">
                    {counts.trust}+
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    Years of Trust
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative group float-animation">

              <div className="absolute -inset-5 bg-gradient-to-tr from-blue-200/60 via-cyan-100/50 to-white rounded-[35px] blur-3xl opacity-80"></div>

              <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-xl text-blue-700 px-5 py-2 rounded-full shadow-xl text-xs font-bold border border-white">
                Trusted Since 2025
              </div>

              <div className="relative h-[560px] rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(59,130,246,0.20)]">

                <Image
                  src="/images/aboutus.webp"
                  alt="Respishop Sleep Therapy Team"
                  fill
                  priority
                  className="object-cover transition-transform duration-[2500ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT + CONTACT */}
   <section className="relative w-full min-h-[78vh] px-10 md:px-16 lg:px-20 xl:px-24 pt-0 pb-2 -mt-6 flex items-start">         
     <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 w-full items-stretch">

            {/* LEFT */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[35px] p-7 md:p-9 shadow-[0_20px_70px_rgba(0,0,0,0.05)] flex flex-col justify-between">

              <div>

                <div className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-5">
                  About Respishop
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
                  Building Better
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {" "}
                    Respiratory Care
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
  Founded in 2025, Respishop was created to improve respiratory
  healthcare accessibility across India with genuine equipment,
  compassionate support, and long-term care.

  <br />
  <br />

  We specialize in CPAP, BiPAP, oxygen concentrators, sleep study
  services, and advanced respiratory therapy solutions designed to
  improve quality of life for patients suffering from sleep apnea
  and breathing disorders.

  <br />
  <br />

  Our focus goes beyond simply supplying devices — we aim to provide
  personalized guidance, trusted after-sales support, and continuous
  patient care that builds long-term confidence and comfort.
</p>
              </div>

              <div className="grid gap-4">

                {/* CARD */}
                <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-5 border border-blue-100 hover:-translate-y-1 transition duration-500 hover:shadow-xl">

                  <div className="flex gap-4 items-start">

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl shrink-0">
                      🎯
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Vision
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        To become India's most trusted sleep therapy brand
                        through awareness and accessibility.
                      </p>

                    </div>

                  </div>

                </div>

                {/* CARD */}
                <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-white p-5 border border-cyan-100 hover:-translate-y-1 transition duration-500 hover:shadow-xl">

                  <div className="flex gap-4 items-start">

                    <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl shrink-0">
                      🤝
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Promise
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        Transparent pricing, genuine products, and patient-first support.
                      </p>

                    </div>

                  </div>

                </div>

                {/* CARD */}
                <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-white p-5 border border-sky-100 hover:-translate-y-1 transition duration-500 hover:shadow-xl">

                  <div className="flex gap-4 items-start">

                    <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-2xl shrink-0">
                      💙
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Mission
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        Deliver reliable respiratory healthcare solutions with
                        responsive service and long-term support.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">

              {/* TESTIMONIAL */}
              <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 shadow-[0_20px_70px_rgba(59,130,246,0.30)] flex-1">

                <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col h-full">

                  <div className="mb-6">

                    <div className="inline-flex bg-white/15 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-semibold mb-4">
                      Patient Testimonials
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white">
                      What Our Clients Say
                    </h2>

                  </div>

                  <div className="bg-white/95 backdrop-blur-xl rounded-[28px] p-7 shadow-xl flex-1 flex flex-col justify-center transition-all duration-700">

                    <p className="text-lg italic text-gray-700 leading-relaxed text-center mb-8">
                      “{testimonials[currentTestimonial].text}”
                    </p>

                    <div className="text-center">

                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>

                      <p className="text-gray-500 mt-2 text-sm">
                        Verified Respishop Client
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* CONTACT */}
              <div className="bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[35px] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)]">

                <div className="mb-6">

                  <div className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
                    Contact Information
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    Get in Touch
                  </h2>

                </div>

                <div className="space-y-4">

                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5">

                     {/* CALL */}
                  <a
                    href="tel:+919148733700"
                    className="block rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >

                    <p className="text-blue-600 font-semibold mb-2 text-sm">
                      Call Us
                    </p>

                    <p className="text-xl font-black text-gray-900 hover:text-blue-600 transition">
                      +91 9148733700
                    </p>

                  </a>

                 
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5">

                     {/* EMAIL */}
                  <a
                    href="mailto:respishop.in@gmail.com"
                    className="block rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >

                    <p className="text-blue-600 font-semibold mb-2 text-sm">
                      Email
                    </p>

                    <p className="text-base font-semibold text-gray-800 break-all hover:text-blue-600 transition">
                      respishop.in@gmail.com
                    </p>

                  </a>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5">

                    <p className="text-blue-600 font-semibold mb-2 text-sm">
                      Address
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      702, 13th Cross Rd, 1st Phase,
                      <br />
                      J.P Nagar, Bengaluru,
                      <br />
                      Karnataka - 560078
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}