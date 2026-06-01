// components/category/CPAPLayout.tsx

import {
  Moon,
  ShieldCheck,
  Wind,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { ChevronDown } from "lucide-react"
import ProductGrid from "@/components/product/ProductGrid"
import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

type CPAPLayoutProps = {
  products: any[]
}

export default function CPAPLayout({ products }: CPAPLayoutProps) {
const faqs = [
  {
    question: "What is a CPAP machine?",
    answer:
      "A CPAP machine delivers continuous positive airway pressure to help keep the airway open during sleep apnea therapy.",
  },
  {
    question: "Who should use a CPAP machine?",
    answer:
      "CPAP therapy is commonly prescribed for people diagnosed with obstructive sleep apnea.",
  },
  {
    question: "What is the difference between CPAP and Auto CPAP?",
    answer:
      "A fixed-pressure CPAP machine delivers one prescribed pressure, while an Auto CPAP machine automatically adjusts pressure based on breathing patterns throughout the night.",
  },
  {
    question: "Do CPAP machines require maintenance?",
    answer:
      "Regular cleaning and timely replacement of filters, tubing, and mask components help maintain therapy performance and hygiene.",
  },
  {
    question: "Can I travel with a CPAP machine?",
    answer:
      "Many modern CPAP devices are compact, lightweight, and designed for convenient travel use.",
  },
  {
    question: "How many hours should I use a CPAP machine each night?",
    answer:
      "Most healthcare professionals recommend using CPAP therapy whenever you sleep, including naps, to maximize treatment effectiveness.",
  },
  {
    question: "Do CPAP machines help reduce snoring?",
    answer:
      "CPAP therapy can significantly reduce or eliminate snoring caused by obstructive sleep apnea by keeping the airway open during sleep.",
  },
  {
    question: "How often should CPAP filters be replaced?",
    answer:
      "Replacement schedules vary by manufacturer and filter type, but filters should be inspected regularly and replaced as recommended.",
  },
]

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900" />
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">
                <Sparkles size={16} />
                Advanced Sleep Therapy
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                Premium CPAP
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Machines
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                Explore advanced CPAP therapy systems engineered for sleep apnea
                treatment, intelligent pressure delivery, humidification support,
                quiet operation and long-term respiratory comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                "Auto Pressure Technology",
                "Integrated Humidification",
                "Ultra Quiet Operation",
                "Trusted Therapy Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <CheckCircle2 className="text-cyan-300" />
                  <p className="mt-4 font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
            Sleep Therapy Solutions
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            CPAP Machine
            <span className="block text-blue-700">Collection</span>
          </h2>
        </div>

        <ProductGrid products={products} />
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[32px] border bg-white p-8 shadow-sm">
              <Activity className="text-blue-600" size={42} />
              <h3 className="mt-6 text-2xl font-black">Smart Therapy</h3>
              <p className="mt-4 text-slate-600">
                Advanced algorithms automatically respond to breathing patterns.
              </p>
            </div>

            <div className="rounded-[32px] border bg-white p-8 shadow-sm">
              <Moon className="text-cyan-600" size={42} />
              <h3 className="mt-6 text-2xl font-black">Better Sleep</h3>
              <p className="mt-4 text-slate-600">
                Designed to support consistent overnight therapy comfort.
              </p>
            </div>

            <div className="rounded-[32px] border bg-white p-8 shadow-sm">
              <ShieldCheck className="text-emerald-600" size={42} />
              <h3 className="mt-6 text-2xl font-black">Long-Term Reliability</h3>
              <p className="mt-4 text-slate-600">
                Built for dependable respiratory therapy performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="rounded-[40px] bg-slate-950 p-10 text-white md:p-16">
          <h2 className="text-4xl font-black">Advanced Therapy Features</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "AutoSet Technology",
              "Humidification Support",
              "Leak Management",
              "Travel Friendly Designs",
            ].map((feature) => (
              <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Wind className="text-cyan-300" />
                <p className="mt-4 font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

  <div className="overflow-hidden rounded-[48px] bg-white shadow-xl">

    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-10 text-white md:p-16">

      <h2 className="text-4xl font-black md:text-5xl">
        Buy CPAP Machines Online in India
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-blue-50">
        CPAP machines are among the most widely prescribed sleep apnea therapy
        devices used worldwide. Designed to deliver continuous positive airway
        pressure, these machines help keep the airway open during sleep,
        supporting improved breathing patterns and consistent therapy
        performance throughout the night.
      </p>

    </div>

    <div className="p-10 md:p-16">

      <div className="grid gap-12 lg:grid-cols-2">

        <div>
          <h3 className="text-3xl font-black text-slate-900">
            Benefits of Modern CPAP Therapy
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Modern CPAP machines include advanced therapy technologies such as
            automatic pressure adjustment, humidification support, ramp
            settings, leak compensation systems, therapy tracking, and
            user-friendly interfaces. These features help improve comfort,
            therapy adherence, and overall treatment effectiveness.
          </p>

          <ul className="mt-8 space-y-4 text-slate-600">
            <li>✓ Continuous airflow support</li>
            <li>✓ Advanced comfort settings</li>
            <li>✓ Quiet operation technology</li>
            <li>✓ Humidification compatibility</li>
            <li>✓ Long-term therapy reliability</li>
            <li>✓ Data tracking capabilities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-black text-slate-900">
            Choosing the Right CPAP Machine
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Selecting the ideal CPAP machine depends on prescribed therapy
            requirements, comfort preferences, portability needs, humidification
            options, and available monitoring features. Auto CPAP machines are
            particularly popular because they automatically adapt pressure
            levels based on breathing events during sleep.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Users should also consider mask compatibility, noise levels,
            maintenance requirements, and travel convenience when comparing
            different CPAP therapy systems.
          </p>
        </div>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        <div className="rounded-3xl bg-blue-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <Activity className="text-blue-600" size={40} />
          <h3 className="mt-5 text-xl font-black">
            Smart Pressure Control
          </h3>
          <p className="mt-3 text-slate-600">
            Automatically responds to changing breathing patterns.
          </p>
        </div>

        <div className="rounded-3xl bg-cyan-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <Moon className="text-cyan-600" size={40} />
          <h3 className="mt-5 text-xl font-black">
            Improved Sleep Comfort
          </h3>
          <p className="mt-3 text-slate-600">
            Designed for comfortable nightly therapy sessions.
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <ShieldCheck className="text-emerald-600" size={40} />
          <h3 className="mt-5 text-xl font-black">
            Trusted Therapy Support
          </h3>
          <p className="mt-3 text-slate-600">
            Dependable performance for long-term sleep apnea management.
          </p>
        </div>

      </div>

      <h3 className="mt-16 text-3xl font-black text-slate-900">
        Why Buy CPAP Machines from Respishop?
      </h3>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Respishop offers genuine CPAP machines from trusted sleep therapy
        brands, expert respiratory support, nationwide delivery, and guidance
        to help customers select the most suitable therapy equipment for their
        needs. Our collection includes advanced sleep apnea treatment solutions
        designed for comfort, reliability, and long-term performance.
      </p>

    </div>

  </div>

</section>

      {/* FAQ */}
     <section className="bg-white py-24">
  <div className="mx-auto max-w-5xl px-4 md:px-6">

    <h2 className="text-4xl font-black text-slate-900">
      Frequently Asked Questions
    </h2>

    <div className="mt-12 space-y-4">

      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-slate-900">
            {faq.question}

            <ChevronDown
              size={20}
              className="transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}

    </div>

  </div>
</section>

      {/* SEO */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-4xl font-black">
            CPAP Machines for Sleep Apnea Therapy in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              CPAP machines are widely used in sleep apnea therapy to help
              maintain consistent airflow throughout the night. Modern devices
              include intelligent pressure adjustment systems, humidification
              features and comfort-focused technology.
            </p>

            <p>
              Whether you are looking for automatic CPAP machines, fixed-pressure
              systems or advanced therapy solutions, selecting a high-quality
              device can help improve therapy consistency and overall comfort.
            </p>

            <p>
              Explore premium sleep therapy equipment designed for home use,
              long-term respiratory support and dependable nightly performance.
            </p>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://respishop.in" },
          { name: "Products", url: "https://respishop.in/products" },
          {
            name: "CPAP Machines",
            url: "https://respishop.in/products/cpap-machine",
          },
        ]}
      />
    </div>
  )
}
