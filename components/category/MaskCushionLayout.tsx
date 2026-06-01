// components/category/MaskCushionLayout.tsx

import {
  Cloud,
  ShieldCheck,
  Wind,
  Moon,
  Sparkles,
  HeartHandshake,
  Waves,
  BadgeCheck,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function MaskCushionLayout({
  products,
}: Props) {

  return (

    <div className="overflow-hidden bg-[#fff7f8]">

      {/* HERO */}

      <section className="relative overflow-hidden py-32">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-white" />

        <div className="absolute inset-0 opacity-50">

          <div className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full bg-rose-300 blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-pink-300 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-5 py-2 text-sm font-semibold text-rose-700 backdrop-blur-xl">

                <Cloud size={16} />

                Premium Therapy Comfort

              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">

                CPAP Mask
                <span className="block bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                  Cushions
                </span>

              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">

                Explore premium CPAP mask cushions designed for softer facial
                support, reduced pressure marks, improved mask sealing, stable
                airflow performance, and comfortable long-term sleep apnea
                therapy.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-rose-100 bg-white px-5 py-4 font-medium text-slate-700 shadow-sm">
                  Soft Silicone Comfort
                </div>

                <div className="rounded-2xl border border-rose-100 bg-white px-5 py-4 font-medium text-slate-700 shadow-sm">
                  Better Mask Seal
                </div>

                <div className="rounded-2xl border border-rose-100 bg-white px-5 py-4 font-medium text-slate-700 shadow-sm">
                  Reduced Leakage
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-6">

              <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-rose-100">

                <HeartHandshake
                  size={44}
                  className="text-rose-500"
                />

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Gentle Facial Support
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Soft-touch cushion systems designed to reduce discomfort and
                  improve nightly therapy comfort.
                </p>

              </div>

              <div className="rounded-[32px] bg-gradient-to-br from-rose-500 to-pink-500 p-8 text-white shadow-2xl shadow-pink-200">

                <ShieldCheck
                  size={44}
                  className="text-white"
                />

                <h3 className="mt-6 text-2xl font-black">
                  Reliable Seal Protection
                </h3>

                <p className="mt-4 leading-relaxed text-rose-100">
                  Advanced cushion designs help improve airflow sealing while
                  reducing therapy leakage during sleep.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-600">
            Cushion Benefits
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Better Cushioning For
            <span className="block text-rose-600">
              Better Sleep Therapy
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <Cloud
              size={40}
              className="text-rose-500"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Soft Comfort
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Premium cushion materials improve comfort during extended sleep
              apnea therapy sessions.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <Wind
              size={40}
              className="text-cyan-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Stable Airflow
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Advanced sealing systems help maintain smooth respiratory airflow
              during therapy.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <BadgeCheck
              size={40}
              className="text-emerald-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Better Seal Performance
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Improved mask sealing helps reduce air leakage and therapy
              interruptions.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <Moon
              size={40}
              className="text-indigo-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Improved Night Therapy
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Comfortable cushioning systems support uninterrupted sleep therapy
              performance.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-600">
              Respiratory Accessories
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">

              CPAP Mask
              <span className="block text-rose-600">
                Cushion Collection
              </span>

            </h2>

          </div>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-rose-100 bg-white py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-slate-900">
            CPAP Mask Cushions Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              CPAP mask cushions are essential components that improve facial
              comfort, reduce pressure marks, and help maintain proper airflow
              sealing during sleep apnea therapy. High-quality cushions support
              better respiratory therapy performance and long-term comfort.
            </p>

            <p>
              Modern CPAP cushions are designed using advanced silicone
              materials and ergonomic structures to reduce leakage while
              improving therapy stability during sleep.
            </p>

            <p>
              At Respishop, explore premium CPAP mask cushions, replacement
              cushion systems, respiratory therapy accessories, and comfort
              support components designed for reliable sleep apnea treatment and
              enhanced nightly therapy comfort.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}