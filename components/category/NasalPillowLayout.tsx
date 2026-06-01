import {
  Feather,
  Wind,
  Moon,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  BedDouble,
} from "lucide-react"

import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"
import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}
const faqs = [
  {
    question: "What is a nasal pillow CPAP mask?",
    answer:
      "A nasal pillow CPAP mask uses soft cushion inserts that sit at the nostrils and deliver airflow directly for sleep apnea therapy."
  },
  {
    question: "Who should use a nasal pillow mask?",
    answer:
      "Nasal pillow masks are ideal for users seeking minimal facial contact, lightweight therapy, and greater freedom of movement during sleep."
  },
  {
    question: "Are nasal pillow masks suitable for side sleepers?",
    answer:
      "Yes. Their compact design makes them a popular choice among side sleepers and active sleepers."
  },
  {
    question: "Can nasal pillow masks be used with CPAP and BiPAP machines?",
    answer:
      "Most nasal pillow masks are compatible with standard CPAP, APAP, and BiPAP therapy devices."
  },
  {
    question: "Do nasal pillow masks reduce facial marks?",
    answer:
      "Because they have less facial contact than traditional masks, many users experience fewer pressure marks."
  },
  {
    question: "How often should nasal pillow cushions be replaced?",
    answer:
      "Replacement intervals vary by manufacturer, but cushions should be inspected regularly for wear and loss of seal quality."
  }
]

export default function NasalPillowLayout({
  products,
}: Props) {

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white">

      <section className="mx-auto max-w-6xl px-4 py-28 text-center md:px-6">

        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
          <Feather size={16} />
          Ultra Lightweight Therapy
        </div>

        <h1 className="mt-8 text-6xl font-black text-slate-900 md:text-7xl">
          Nasal Pillow
          <span className="block text-sky-600">
            CPAP Masks
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
          Discover minimal-contact nasal pillow CPAP masks designed for lightweight comfort,
          freedom of movement, reduced facial coverage, and advanced sleep therapy performance.
        </p>

      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-4 md:px-6">

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Feather className="text-sky-600" size={36} />
          <h3 className="mt-5 font-bold">Minimal Design</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Wind className="text-cyan-600" size={36} />
          <h3 className="mt-5 font-bold">Direct Airflow</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Moon className="text-indigo-600" size={36} />
          <h3 className="mt-5 font-bold">Quiet Therapy</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Sparkles className="text-sky-600" size={36} />
          <h3 className="mt-5 font-bold">Comfort Fit</h3>
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <ProductGrid products={products} />

<section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

  <div className="relative overflow-hidden rounded-[50px] bg-white p-10 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
    <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />

    <div className="relative z-10">

      <div className="inline-flex items-center rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
        Minimal Contact Sleep Therapy
      </div>

      <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
        Buy Nasal Pillow CPAP Masks Online in India
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-slate-600">
        Nasal pillow CPAP masks are among the lightest and least intrusive
        sleep apnea therapy interfaces available today. Unlike traditional
        CPAP masks, nasal pillow masks use soft cushions that rest gently
        at the nostrils, providing effective airflow delivery with minimal
        facial contact. Their compact design makes them popular among users
        seeking comfort, flexibility, and freedom during sleep therapy.
      </p>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Modern nasal pillow masks feature advanced cushion technologies,
        lightweight headgear systems, quiet airflow diffusion, and stable
        sealing performance. They are frequently chosen by side sleepers,
        travelers, and CPAP users who prefer an open field of vision while
        reading, watching television, or relaxing before sleep.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-sky-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Feather className="text-sky-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">
            Ultra Lightweight
          </h3>
          <p className="mt-3 text-slate-600">
            Minimal facial contact improves comfort and mobility.
          </p>
        </div>

        <div className="rounded-3xl bg-cyan-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Wind className="text-cyan-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">
            Direct Airflow
          </h3>
          <p className="mt-3 text-slate-600">
            Efficient airflow delivery supports effective therapy.
          </p>
        </div>

        <div className="rounded-3xl bg-indigo-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Moon className="text-indigo-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">
            Better Sleep Freedom
          </h3>
          <p className="mt-3 text-slate-600">
            Compact design helps support natural sleeping positions.
          </p>
        </div>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
          <ShieldCheck className="text-sky-600" size={36} />
          <h3 className="mt-5 text-2xl font-bold">
            Why Choose Nasal Pillow Masks?
          </h3>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Minimal facial coverage</li>
            <li>• Reduced pressure points</li>
            <li>• Excellent visibility</li>
            <li>• Lightweight therapy experience</li>
            <li>• Ideal for active sleepers</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
          <BedDouble className="text-cyan-600" size={36} />
          <h3 className="mt-5 text-2xl font-bold">
            Ideal Users
          </h3>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Side sleepers</li>
            <li>• Frequent travelers</li>
            <li>• New CPAP users</li>
            <li>• Users seeking lightweight masks</li>
            <li>• Individuals preferring minimal contact</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

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

<BreadcrumbSchema
  items={[
    {
      name: "Home",
      url: "https://respishop.in",
    },
    {
      name: "Nasal Pillow Masks",
      url: "https://respishop.in/products/nasal-pillow-mask",
    },
  ]}
/>
      </section>

    </div>
  )
}