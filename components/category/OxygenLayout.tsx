"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import {
  BatteryCharging,
  Plane,
  HeartHandshake,
  ShieldPlus,
  Wind,
  ChevronRight,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"
import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

type OxygenLayoutProps = {
  products: any[]
}

export default function OxygenLayout({
  products,
}: OxygenLayoutProps) {

const [openFAQ, setOpenFAQ] = useState<number | null>(0)
const faqs = [
  {
    question: "What is an oxygen concentrator?",
    answer:
      "An oxygen concentrator is a medical device that extracts oxygen from ambient air and delivers concentrated oxygen for respiratory therapy.",
  },
  {
    question: "Who should use an oxygen concentrator?",
    answer:
      "Patients with COPD, asthma, pulmonary fibrosis, chronic respiratory diseases, and low oxygen saturation levels may require oxygen therapy.",
  },
  {
    question: "Can oxygen concentrators be used at home?",
    answer:
      "Yes. Modern oxygen concentrators are specifically designed for safe and continuous home oxygen therapy.",
  },
  {
    question: "What is the difference between portable and home oxygen concentrators?",
    answer:
      "Portable oxygen concentrators are lightweight and travel-friendly, while stationary models provide higher oxygen flow rates for continuous home use.",
  },
  {
    question: "Do oxygen concentrators require maintenance?",
    answer:
      "Regular filter cleaning, proper ventilation, and scheduled servicing help maintain optimal oxygen concentrator performance.",
  },
  {
    question: "Can oxygen concentrators replace oxygen cylinders?",
    answer:
      "For many patients, oxygen concentrators can replace oxygen cylinders because they continuously generate oxygen without requiring refills.",
  },
]

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">

        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                <Wind size={16} />
                Oxygen Therapy Solutions
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
                Oxygen
                <span className="block text-cyan-600">
                  Concentrators
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                Explore portable and home oxygen concentrators designed for
                continuous oxygen therapy, respiratory care, and improved breathing support.
                Ideal for long-term oxygen therapy and home healthcare use.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#oxygen-products"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105"
                >
                  Explore Oxygen Devices
                  <ChevronRight size={18} />
                </Link>

                <div className="rounded-2xl border border-cyan-100 bg-white px-6 py-4 text-sm font-medium text-slate-700 shadow-sm">
                  Portable & Home Models
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid gap-6">

              <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <BatteryCharging size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Long Battery Backup
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Portable oxygen concentrators with reliable battery performance.
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white shadow-2xl">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                    <Plane size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Travel Friendly
                    </h3>

                    <p className="mt-2 text-cyan-100">
                      Lightweight and compact oxygen therapy systems.
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <HeartHandshake size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Continuous Oxygen Support
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Reliable oxygen delivery for home respiratory care.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        id="oxygen-products"
        className="mx-auto max-w-7xl px-4 py-24 md:px-6"
      >

        <div className="mb-14 max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Oxygen Therapy Collection
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-slate-900">
            Oxygen Concentrators for
            <span className="block text-cyan-600">
              Respiratory Care & Home Therapy
            </span>
          </h2>

        </div>

        <ProductGrid products={products} />
{/* SEO CONTENT */}
        <section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <div className="max-w-5xl">

      <h2 className="text-4xl font-black text-slate-900">
        Oxygen Concentrators for Home Healthcare in India
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

        <p>
          Oxygen concentrators are advanced respiratory therapy devices designed
          to provide a continuous supply of purified oxygen for patients
          experiencing low blood oxygen levels. Unlike oxygen cylinders,
          concentrators generate oxygen from surrounding air, making them a
          convenient and cost-effective solution for long-term oxygen therapy.
        </p>

        <p>
          At Respishop, we offer a carefully selected range of portable oxygen
          concentrators and home oxygen concentrators from trusted brands.
          These devices are suitable for individuals suffering from COPD,
          pulmonary fibrosis, asthma, post-COVID respiratory complications,
          sleep-related breathing disorders, and other chronic respiratory
          conditions.
        </p>

        <p>
          Modern oxygen concentrators feature intelligent oxygen delivery,
          low-noise operation, energy-efficient performance, and user-friendly
          controls. Whether you need a lightweight travel-friendly oxygen
          concentrator or a high-flow stationary model for home care, our
          collection offers reliable options for different therapy
          requirements.
        </p>

        <h3 className="pt-4 text-2xl font-bold text-slate-900">
          Benefits of Oxygen Concentrators
        </h3>

        <ul className="space-y-3 pl-5 list-disc">
          <li>Continuous oxygen supply without cylinder refills.</li>
          <li>Cost-effective long-term oxygen therapy.</li>
          <li>Improved mobility with portable models.</li>
          <li>Quiet and energy-efficient operation.</li>
          <li>Suitable for home, clinic, and travel use.</li>
          <li>Advanced filtration and oxygen purification systems.</li>
        </ul>

        <h3 className="pt-4 text-2xl font-bold text-slate-900">
          How to Choose the Right Oxygen Concentrator
        </h3>

        <p>
          When selecting an oxygen concentrator, consider oxygen flow rate,
          portability, battery backup, noise levels, and prescribed oxygen
          requirements. Portable oxygen concentrators are ideal for active
          users who travel frequently, while stationary concentrators provide
          higher oxygen output for home therapy.
        </p>

      </div>

    </div>

  </div>
</section>

      </section>

      {/* SEO BLOCK */}
      <section className="bg-slate-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-2">

          <div className="rounded-[40px] bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white shadow-2xl">

            <h2 className="text-4xl font-black leading-tight">
              Buy Oxygen Concentrators Online in India
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-cyan-100">
              Respishop offers premium oxygen concentrators for home healthcare,
              respiratory therapy, and oxygen support systems with advanced oxygen purification technology.
            </p>

            <div className="mt-10 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
              Trusted oxygen therapy devices with fast delivery and respiratory care assistance.
            </div>

          </div>

          <div className="space-y-8">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white">
                <ShieldPlus size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Reliable Oxygen Delivery
              </h3>

              <p className="mt-5 leading-relaxed text-slate-400">
                Advanced filtration and oxygen concentration systems designed for effective respiratory support.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-white">
                Portable & Stationary Models
              </h3>

              <p className="mt-5 leading-relaxed text-slate-400">
                Choose lightweight portable oxygen concentrators or high-capacity home oxygen systems depending on your therapy requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-24 md:px-6">

        <div className="text-center">

          <h2 className="text-4xl font-black text-slate-900">
            Oxygen Therapy FAQs
          </h2>

        </div>

        <div className="mt-16 space-y-4">
  {faqs.map((faq, index) => (
    <div
      key={faq.question}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <button
        onClick={() =>
          setOpenFAQ(openFAQ === index ? null : index)
        }
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <h3 className="text-lg font-bold text-slate-900">
          {faq.question}
        </h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            openFAQ === index ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          openFAQ === index
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-8 pb-6 leading-relaxed text-slate-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </section>

      <FAQSchema faqs={faqs} />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://respishop.in",
          },
          {
            name: "Products",
            url: "https://respishop.in/products",
          },
          {
            name: "Oxygen Concentrators",
            url: "https://respishop.in/products/oxygen-concentrator",
          },
        ]}
      />

    </div>
  )
}