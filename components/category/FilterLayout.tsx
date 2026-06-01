// components/category/FilterLayout.tsx

import {
  Shield,
  Wind,
  Sparkles,
  ShieldCheck,
  Waves,
  Activity,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function FilterLayout({
  products,
}: Props) {

  return (

    <div className="overflow-hidden bg-[#f5f9f6]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800 py-28">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-400 blur-3xl" />

        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 md:px-6 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/10 px-5 py-2 text-sm font-semibold text-emerald-200 backdrop-blur-xl">

              <Shield size={16} />

              Respiratory Hygiene Essentials

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

              CPAP Filters
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-200 bg-clip-text text-transparent">
                & Cleaners
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-emerald-100">

              Explore premium CPAP filters, respiratory cleaning solutions,
              hygiene accessories, device sanitization products, and airflow
              maintenance essentials designed for cleaner breathing support,
              improved therapy safety, and long-term device performance.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Cleaner Airflow
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Device Hygiene
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Therapy Protection
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <Wind
                size={42}
                className="text-emerald-300"
              />

              <h3 className="mt-6 text-2xl font-black text-white">
                Improved Air Quality
              </h3>

              <p className="mt-4 leading-relaxed text-emerald-100">
                Premium respiratory filters designed to reduce dust particles,
                improve airflow cleanliness, and support healthier therapy.
              </p>

            </div>

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <Sparkles
                size={42}
                className="text-lime-300"
              />

              <h3 className="mt-6 text-2xl font-black text-white">
                Better Device Hygiene
              </h3>

              <p className="mt-4 leading-relaxed text-emerald-100">
                Cleaning systems and sanitization products help maintain
                respiratory hygiene and long-term CPAP performance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-14 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
            Respiratory Hygiene Benefits
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Maintain Cleaner
            <span className="block text-emerald-700">
              Sleep Therapy
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <ShieldCheck
              size={40}
              className="text-emerald-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Therapy Protection
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              High-quality filters help maintain safer and cleaner respiratory
              airflow during therapy.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Activity
              size={40}
              className="text-lime-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Device Performance
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Proper cleaning and filter replacement improve long-term device
              reliability and airflow efficiency.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Waves
              size={40}
              className="text-emerald-700"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Cleaner Breathing
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Advanced respiratory filters help reduce airborne impurities
              entering the therapy system.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Sparkles
              size={40}
              className="text-green-700"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Better Hygiene
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Cleaning accessories support proper respiratory hygiene and
              cleaner sleep therapy routines.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="mb-12">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
            Hygiene Accessories
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">

            Filters &
            <span className="block text-emerald-700">
              Cleaning Supplies
            </span>

          </h2>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-emerald-100 bg-white py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-slate-900">
            CPAP Filters & Cleaning Supplies Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              CPAP filters and respiratory cleaning supplies are essential for
              maintaining proper airflow hygiene, reducing airborne particles,
              and supporting safe sleep apnea therapy. Regular maintenance
              improves respiratory comfort and extends the life of CPAP devices.
            </p>

            <p>
              Modern CPAP hygiene accessories include disposable filters,
              reusable filters, cleaning wipes, sanitization systems, and
              respiratory device maintenance products designed for better
              therapy safety and cleaner breathing support.
            </p>

            <p>
              At Respishop, explore premium CPAP filters, cleaning accessories,
              respiratory hygiene solutions, and therapy maintenance products
              designed for reliable airflow performance and long-term respiratory
              care support.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}