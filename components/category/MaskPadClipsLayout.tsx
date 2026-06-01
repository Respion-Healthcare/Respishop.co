// components/category/MaskPadClipsLayout.tsx

import {
  Shield,
  Sparkles,
  Cable,
  BadgeCheck,
  HeartHandshake,
  Moon,
  Wind,
  Layers3,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function MaskPadClipsLayout({
  products,
}: Props) {

  return (

    <div className="overflow-hidden bg-[#0b1120] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden py-32">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">

                <Sparkles size={16} />

                Comfort Support Accessories

              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

                Mask Pads
                <span className="block bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                  & Clips
                </span>

              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">

                Explore CPAP mask pads, clips, strap covers, and comfort support
                accessories designed to reduce facial irritation, improve mask
                fitting stability, enhance therapy comfort, and support
                long-term sleep apnea treatment.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Reduced Skin Irritation
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Better Strap Comfort
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Secure Mask Support
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-6">

              <div className="group rounded-[34px] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">

                <Shield
                  size={42}
                  className="text-cyan-300"
                />

                <h3 className="mt-6 text-2xl font-black text-white">
                  Reduced Pressure Marks
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  Soft mask pad systems help reduce skin irritation and improve
                  comfort during extended therapy sessions.
                </p>

              </div>

              <div className="group rounded-[34px] border border-fuchsia-500/10 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30">

                <Cable
                  size={42}
                  className="text-fuchsia-300"
                />

                <h3 className="mt-6 text-2xl font-black text-white">
                  Secure Attachment
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  High-quality clips and support accessories improve mask
                  stability and therapy consistency.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE GRID */}

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Therapy Comfort Features
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">

            Designed For
            <span className="block text-cyan-300">
              Better Therapy Comfort
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white/10">

            <HeartHandshake
              size={40}
              className="text-cyan-300"
            />

            <h3 className="mt-6 text-2xl font-black text-white">
              Gentle Comfort
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              Soft-touch mask support accessories improve comfort during nightly
              therapy use.
            </p>

          </div>

          <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white/10">

            <BadgeCheck
              size={40}
              className="text-emerald-300"
            />

            <h3 className="mt-6 text-2xl font-black text-white">
              Secure Fit
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              Improved support systems help maintain proper mask positioning
              during sleep therapy.
            </p>

          </div>

          <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white/10">

            <Wind
              size={40}
              className="text-cyan-300"
            />

            <h3 className="mt-6 text-2xl font-black text-white">
              Better Airflow Stability
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              Stable mask positioning supports improved respiratory airflow
              performance.
            </p>

          </div>

          <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white/10">

            <Moon
              size={40}
              className="text-indigo-300"
            />

            <h3 className="mt-6 text-2xl font-black text-white">
              Improved Night Therapy
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              Comfortable support accessories help improve long-term therapy
              compliance and sleep quality.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCT SECTION */}

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Respiratory Accessories
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">

              CPAP Mask Pads
              <span className="block text-cyan-300">
                & Clip Accessories
              </span>

            </h2>

          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">

            Comfort Support Collection

            <Layers3 size={18} />

          </div>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-white/10 bg-[#111827] py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-white">
            CPAP Mask Pads & Clips Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              CPAP mask pads and clips are essential comfort accessories that
              help improve mask fitting stability, reduce skin irritation, and
              enhance long-term respiratory therapy comfort. Proper support
              accessories can help maintain consistent therapy performance while
              reducing facial pressure marks.
            </p>

            <p>
              Modern CPAP comfort accessories include soft strap covers, support
              pads, replacement clips, and attachment systems designed to
              improve comfort, mask positioning, and therapy reliability.
            </p>

            <p>
              At Respishop, explore premium CPAP mask pads, clips, comfort
              accessories, respiratory support systems, and therapy enhancement
              products designed for improved sleep apnea treatment and better
              nightly comfort.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}