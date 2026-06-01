import {
  ShieldCheck,
  Wind,
  Activity,
  MoonStar,
  ChevronDown,
  Users,
  BedDouble,
  HeartPulse,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"
import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

type Props = {
  products: any[]
}
const faqs = [
  {
    question: "What is a full face CPAP mask?",
    answer:
      "A full face CPAP mask covers both the nose and mouth, allowing effective airflow delivery during sleep apnea therapy."
  },
  {
    question: "Who should use a full face CPAP mask?",
    answer:
      "Full face masks are often recommended for mouth breathers, users with nasal congestion, and individuals requiring higher therapy pressures."
  },
  {
    question: "Can full face masks be used with CPAP, APAP, and BiPAP machines?",
    answer:
      "Yes. Most full face masks are compatible with standard CPAP, APAP, and BiPAP therapy devices."
  },
  {
    question: "Are full face masks suitable for high-pressure therapy?",
    answer:
      "Yes. Full face masks are commonly chosen by users requiring higher pressure settings because of their stable seal design."
  },
  {
    question: "How do I reduce air leaks in a full face mask?",
    answer:
      "Proper sizing, cushion adjustment, and routine replacement of worn components can help minimize air leaks."
  },
  {
    question: "How often should full face mask cushions be replaced?",
    answer:
      "Replacement schedules vary by manufacturer, but cushions should be inspected regularly to maintain comfort and seal quality."
  }
]

export default function FullFaceMaskLayout({
  products,
}: Props) {

  return (
    <div className="bg-gradient-to-b from-cyan-50 via-white to-slate-50">

      <section className="mx-auto max-w-7xl px-4 py-28 md:px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              High Pressure Therapy
            </p>

            <h1 className="mt-6 text-6xl font-black leading-tight md:text-7xl">
              Full Face
              <span className="block text-cyan-400">
                CPAP Masks
              </span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              Explore premium full face CPAP masks online designed for mouth breathers,
              high-pressure therapy users, and advanced respiratory care support.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <ShieldCheck size={40} className="text-cyan-400" />
              <h3 className="mt-5 text-2xl font-bold">
                Secure Seal Technology
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Activity size={40} className="text-emerald-400" />
              <h3 className="mt-5 text-2xl font-bold">
                High Pressure Support
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <MoonStar size={40} className="text-indigo-400" />
              <h3 className="mt-5 text-2xl font-bold">
                Stable Night Therapy
              </h3>
            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <ProductGrid products={products} />

        <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

  <div className="grid gap-10 lg:grid-cols-2">

    <div className="rounded-[40px] bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
        Complete Therapy Coverage
      </div>

      <h2 className="mt-6 text-4xl font-black text-slate-900">
        Buy Full Face CPAP Masks Online in India
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-slate-600">
        Full face CPAP masks are designed to deliver therapy through both the
        nose and mouth, making them a preferred solution for mouth breathers,
        users with nasal congestion, and individuals requiring reliable
        high-pressure sleep apnea therapy. These masks provide broader coverage
        while maintaining consistent airflow throughout the night.
      </p>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Modern full face masks feature advanced cushion technologies, quieter
        vent systems, flexible headgear, and improved sealing performance.
        They are commonly used with CPAP, APAP, and BiPAP machines and remain
        one of the most effective solutions for obstructive sleep apnea
        treatment.
      </p>

    </div>

    <div className="grid gap-6">

      <div className="rounded-3xl bg-cyan-50 p-8 transition-all duration-300 hover:scale-[1.02]">
        <Users className="text-cyan-600" size={36} />
        <h3 className="mt-5 text-xl font-bold">
          Ideal for Mouth Breathers
        </h3>
      </div>

      <div className="rounded-3xl bg-emerald-50 p-8 transition-all duration-300 hover:scale-[1.02]">
        <Activity className="text-emerald-600" size={36} />
        <h3 className="mt-5 text-xl font-bold">
          Stable High Pressure Therapy
        </h3>
      </div>

      <div className="rounded-3xl bg-indigo-50 p-8 transition-all duration-300 hover:scale-[1.02]">
        <MoonStar className="text-indigo-600" size={36} />
        <h3 className="mt-5 text-xl font-bold">
          Reliable Overnight Performance
        </h3>
      </div>

    </div>

  </div>

  <div className="mt-12 rounded-[40px] bg-white p-10 shadow-xl">

    <h2 className="text-3xl font-black text-slate-900">
      Why Choose a Full Face Mask?
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-cyan-100 p-8">
        <ShieldCheck className="text-cyan-600" size={36} />
        <h3 className="mt-4 font-bold">
          Secure Seal
        </h3>
        <p className="mt-3 text-slate-600">
          Designed to maintain consistent therapy delivery throughout sleep.
        </p>
      </div>

      <div className="rounded-3xl border border-emerald-100 p-8">
        <HeartPulse className="text-emerald-600" size={36} />
        <h3 className="mt-4 font-bold">
          Effective Therapy
        </h3>
        <p className="mt-3 text-slate-600">
          Supports users requiring advanced sleep apnea treatment.
        </p>
      </div>

      <div className="rounded-3xl border border-indigo-100 p-8">
        <BedDouble className="text-indigo-600" size={36} />
        <h3 className="mt-4 font-bold">
          Comfortable Nightly Use
        </h3>
        <p className="mt-3 text-slate-600">
          Modern cushions improve comfort while reducing pressure points.
        </p>
      </div>

    </div>

    <h2 className="mt-16 text-3xl font-black text-slate-900">
      Choosing the Right Full Face CPAP Mask
    </h2>

    <p className="mt-6 text-lg leading-relaxed text-slate-600">
      Selecting the correct full face mask involves evaluating cushion
      comfort, seal stability, headgear design, sleeping position, and
      compatibility with your therapy machine. A properly fitted mask can
      significantly improve therapy compliance and overall sleep quality.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-slate-600">
      Regular cleaning and timely replacement of cushions and headgear help
      maintain optimal performance, comfort, and hygiene throughout long-term
      therapy use.
    </p>

  </div>

</section>

      </section>

<section className="mx-auto max-w-5xl px-4 pb-24 md:px-6">

  <div className="rounded-[40px] bg-white p-10 shadow-xl">

    <h2 className="text-4xl font-black text-slate-900">
      Frequently Asked Questions
    </h2>

    <div className="mt-10 space-y-4">

      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-slate-900">
            {faq.question}

            <ChevronDown
              size={20}
              className="transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="px-6 pb-6 text-slate-600">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>

  </div>

</section>

<FAQSchema faqs={faqs} />
    </div>
  )
}