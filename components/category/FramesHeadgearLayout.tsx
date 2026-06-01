// components/category/FramesHeadgearLayout.tsx

import {
  Layers3,
  ShieldCheck,
  Sparkles,
  BedDouble,
  Orbit,
  ArrowUpRight,
  BadgeCheck,
  Moon,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function FramesHeadgearLayout({
  products,
}: Props) {

  return (

    <div className="overflow-hidden bg-[#f5f7ff]">

      {/* HERO */}

      <section className="relative overflow-hidden py-32">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-900" />

        <div className="absolute inset-0 opacity-20">

          <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-violet-500 blur-3xl" />

          <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-fuchsia-500 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-violet-100 backdrop-blur-xl">

                <Layers3 size={16} />

                Advanced CPAP Support Components

              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

                Frames &
                <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Headgear
                </span>

              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-violet-100">

                Explore premium CPAP mask frames and headgear systems designed
                for secure fitting, improved therapy stability, soft-touch
                comfort, and reliable respiratory support during long-term sleep
                apnea therapy.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  Lightweight Support
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  Better Stability
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  Soft Comfort Fit
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-6">

              <div className="group rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <ShieldCheck
                  size={44}
                  className="text-violet-300"
                />

                <h3 className="mt-6 text-2xl font-black text-white">
                  Stable Mask Positioning
                </h3>

                <p className="mt-4 leading-relaxed text-violet-100">
                  Premium headgear systems designed for secure mask alignment
                  and reduced therapy leakage.
                </p>

              </div>

              <div className="group rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <Sparkles
                  size={44}
                  className="text-fuchsia-300"
                />

                <h3 className="mt-6 text-2xl font-black text-white">
                  Comfortable Sleep Therapy
                </h3>

                <p className="mt-4 leading-relaxed text-violet-100">
                  Soft-touch materials improve comfort during extended CPAP
                  and BiPAP therapy sessions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE CARDS */}

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">
            Therapy Support Features
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Built For Long-Term
            <span className="block text-violet-700">
              Respiratory Comfort
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[32px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <Orbit
              size={40}
              className="text-violet-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Balanced Fit
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Advanced frame systems distribute pressure evenly for better
              therapy comfort and mask stability.
            </p>

          </div>

          <div className="group rounded-[32px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <BedDouble
              size={40}
              className="text-fuchsia-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Better Sleep Support
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Comfortable headgear systems support uninterrupted sleep apnea
              therapy performance.
            </p>

          </div>

          <div className="group rounded-[32px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <BadgeCheck
              size={40}
              className="text-indigo-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Secure Attachment
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Reliable adjustment systems help maintain proper mask sealing
              throughout the night.
            </p>

          </div>

          <div className="group rounded-[32px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <Moon
              size={40}
              className="text-purple-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Reduced Pressure Points
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Ergonomic designs improve comfort and reduce facial pressure
              during long therapy sessions.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCT SECTION */}

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">
              Respiratory Accessories
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">

              CPAP Frames &
              <span className="block text-violet-700">
                Headgear Collection
              </span>

            </h2>

          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700">

            Explore Therapy Accessories

            <ArrowUpRight size={18} />

          </div>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-violet-100 bg-white py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-slate-900">
            CPAP Frames & Headgear Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              CPAP mask frames and headgear systems are essential components
              for maintaining proper mask stability, therapy comfort, and
              airflow performance during sleep apnea treatment. A well-fitted
              headgear system helps reduce leakage while improving respiratory
              support consistency.
            </p>

            <p>
              Modern CPAP headgear systems use lightweight materials,
              ergonomic adjustment designs, and soft-touch support structures
              to improve long-term therapy comfort and sleep quality.
            </p>

            <p>
              At Respishop, explore premium CPAP mask frames, replacement
              headgear systems, respiratory support accessories, and advanced
              therapy components designed for reliable sleep apnea treatment
              and improved breathing comfort.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}