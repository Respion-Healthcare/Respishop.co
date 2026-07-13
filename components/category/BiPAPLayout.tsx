"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  ChevronRight,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"
import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

type BiPAPLayoutProps = {
  products: any[]
}

export default function BiPAPLayout({
  products,
}: BiPAPLayoutProps) {

  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
  {
    question: "What is a BiPAP machine?",
    answer:
      "A BiPAP machine provides two pressure levels—one for inhalation (IPAP) and one for exhalation (EPAP)—to support comfortable breathing therapy.",
  },
  {
    question: "Who should use a BiPAP machine?",
    answer:
      "BiPAP therapy is commonly prescribed for COPD, Obstructive Sleep Apnea, respiratory insufficiency, obesity hypoventilation syndrome, and other breathing disorders.",
  },
  {
    question: "What is the difference between CPAP and BiPAP?",
    answer:
      "CPAP delivers one continuous pressure level, while BiPAP provides separate inhalation and exhalation pressures for greater comfort and respiratory support.",
  },
  {
    question: "Can BiPAP machines be used at home?",
    answer:
      "Yes. Modern BiPAP devices are specifically designed for home respiratory therapy and long-term treatment support.",
  },
  {
    question: "Do BiPAP machines require humidifiers?",
    answer:
      "Many users benefit from integrated humidifiers that help reduce dryness and improve therapy comfort throughout the night.",
  },
  {
    question: "How often should BiPAP masks and filters be replaced?",
    answer:
      "Replacement schedules vary by manufacturer, but masks, cushions, tubing, and filters should be inspected regularly and replaced when worn.",
  },
]

  return (
    <div className="bg-[#f4f8fc]">
{/* HERO */}
<section className="relative overflow-hidden bg-[#07162b]">

  {/* GLOW EFFECTS */}
  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#0391B6]/10 blur-3xl" />

  <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* LEFT */}
      <div className="relative z-10">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
          <HeartPulse size={16} />
          Advanced Respiratory Therapy
        </div>

        <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
          Premium
          <span className="block text-cyan-400">
            BiPAP Machines
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Buy advanced BiPAP machines online in India for respiratory support,
          COPD management, sleep apnea treatment, and non-invasive ventilation.
          Designed with intelligent dual-pressure technology for comfortable and
          effective breathing assistance at home.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="#products"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            Explore Products
            <ChevronRight size={18} />
          </Link>

          <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-slate-200 backdrop-blur-xl">
            Trusted Respiratory Solutions
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative">

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          <div className="grid gap-5">

            <div className="group rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-900">
                  <Activity size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Dual Pressure Support
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Separate inhale and exhale pressure levels for improved comfort.
                  </p>
                </div>

              </div>
            </div>

            <div className="group rounded-3xl border border-blue-400/10 bg-blue-400/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30">
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FC]0 text-white">
                  <Stethoscope size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Clinical Grade Therapy
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Suitable for COPD, NIV therapy and respiratory insufficiency.
                  </p>
                </div>

              </div>
            </div>

            <div className="group rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <ShieldCheck size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Reliable Home Use
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Quiet operation and long-term respiratory support features.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* PRODUCT GRID */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-24 md:px-6"
      >

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
              Respiratory Care Collection
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              BiPAP Machines for
              <span className="block text-cyan-600">
                Advanced Breathing Support
              </span>
            </h2>

          </div>

          <div className="max-w-xl rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">

            <p className="leading-relaxed text-slate-600">
              Discover premium BiPAP devices engineered for advanced respiratory
              therapy, intelligent pressure control, and comfortable long-term use.
            </p>

          </div>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}
      <section className="mt-24">

        <div className="rounded-[40px] bg-white p-10 md:p-16 shadow-sm">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              BiPAP Therapy Solutions
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Buy BiPAP Machines Online in India
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              BiPAP machines are advanced respiratory therapy devices designed
              to deliver two distinct pressure levels during inhalation and
              exhalation. They are commonly recommended for individuals with
              COPD, sleep apnea, respiratory insufficiency, neuromuscular
              disorders, and non-invasive ventilation requirements.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Unlike traditional CPAP systems, BiPAP therapy provides greater
              breathing comfort through dual-pressure support technology. This
              allows patients to inhale and exhale more naturally while
              maintaining effective airway pressure throughout therapy.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-cyan-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dual Pressure Support
              </h3>
              <p className="mt-3 text-slate-600">
                Independent inhale and exhale pressure settings improve comfort.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EAF8FC] p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Advanced Respiratory Care
              </h3>
              <p className="mt-3 text-slate-600">
                Suitable for COPD, NIV therapy and chronic respiratory disorders.
              </p>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Home Therapy Ready
              </h3>
              <p className="mt-3 text-slate-600">
                Quiet operation with intelligent comfort features.
              </p>
            </div>

          </div>

          <h2 className="mt-16 text-3xl font-black text-slate-900">
            Why Choose a Modern BiPAP Machine?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Modern BiPAP devices include intelligent pressure adjustment,
            humidification support, advanced event detection, leak compensation,
            data tracking, and therapy monitoring technologies. These features
            help improve compliance and deliver more comfortable long-term
            respiratory therapy.
          </p>

        </div>

      </section>
      
      {/* DIFFERENT SEO SECTION */}
      <section className="bg-[#07162b] py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-slate-900">
              <Activity size={32} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Intelligent Pressure Technology
            </h3>

            <p className="mt-5 leading-relaxed text-slate-400">
              Advanced BiPAP machines automatically optimize breathing pressure
              levels for inhalation and exhalation support.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-2xl">

            <h3 className="text-3xl font-black leading-tight">
              Non-Invasive Ventilation Solutions
            </h3>

            <p className="mt-6 leading-relaxed text-cyan-100">
              Designed for respiratory disorders, COPD management, and advanced
              sleep therapy requirements.
            </p>

            <div className="mt-10 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
              Home therapy + clinical support in one ecosystem.
            </div>

          </div>

          {/* CARD 3 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white">
              <ShieldCheck size={32} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Reliable Long-Term Therapy
            </h3>

            <p className="mt-5 leading-relaxed text-slate-400">
              Quiet performance, advanced humidification support, and durable
              respiratory care systems for daily therapy.
            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-24 md:px-6">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

        </div>

<div className="mt-16 space-y-4">
  {faqs.map((faq, index) => (
    <div
      key={faq.question}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
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
          className={`transition-transform duration-300 ${
            openFAQ === index ? "rotate-180" : ""
          }`}
          size={22}
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

      {/* SCHEMA */}
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
            name: "BiPAP Machines",
            url: "https://respishop.in/products/bipap-machine",
          },
        ]}
      />

    </div>
  )
}