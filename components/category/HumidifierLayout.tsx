// components/category/HumidifierLayout.tsx

import {
  Droplets,
  Thermometer,
  Shield,
  Waves,
  Moon,
  Sparkles,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function HumidifierLayout({
  products,
}: Props) {

  return (

    <div className="overflow-hidden bg-[#f3faff]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-sky-900 to-blue-900 py-28">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#EAF8FC]0 blur-3xl" />

        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 md:px-6 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">

              <Droplets size={16} />

              Heated Humidification Systems

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

              CPAP
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Humidifiers
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cyan-100">

              Explore premium CPAP humidifiers, heated humidification systems,
              water chambers, and respiratory moisture support accessories
              designed to reduce dryness, throat irritation, nasal discomfort,
              and improve long-term sleep therapy comfort.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Moisture Support
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Reduced Dryness
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl">
                Better Comfort
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <Thermometer
                size={42}
                className="text-cyan-300"
              />

              <h3 className="mt-6 text-2xl font-black text-white">
                Heated Humidification
              </h3>

              <p className="mt-4 leading-relaxed text-cyan-100">
                Advanced heated moisture systems designed to improve airflow
                comfort and reduce throat irritation during therapy.
              </p>

            </div>

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <Shield
                size={42}
                className="text-blue-300"
              />

              <h3 className="mt-6 text-2xl font-black text-white">
                Comfortable Therapy
              </h3>

              <p className="mt-4 leading-relaxed text-cyan-100">
                Proper humidification support helps improve breathing comfort
                and long-term CPAP therapy compliance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-14 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
            Humidification Benefits
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Better Moisture
            <span className="block text-cyan-700">
              Better Sleep Therapy
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Droplets
              size={40}
              className="text-cyan-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Moisture Support
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Heated humidification systems help maintain comfortable moisture
              levels during respiratory therapy.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Moon
              size={40}
              className="text-[#0391B6]"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Better Sleep Comfort
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Reduced dryness and irritation support more comfortable
              sleep apnea therapy sessions.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Waves
              size={40}
              className="text-sky-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Improved Airflow
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Advanced humidification systems improve airflow comfort and
              breathing support during therapy.
            </p>

          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Sparkles
              size={40}
              className="text-indigo-600"
            />

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Reduced Irritation
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Proper humidification can help reduce dry mouth, throat
              discomfort, and nasal irritation.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="mb-12">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
            Respiratory Accessories
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">

            CPAP Humidifiers
            <span className="block text-cyan-700">
              & Water Chambers
            </span>

          </h2>

        </div>

        <ProductGrid products={products} />

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-cyan-100 bg-white py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-slate-900">
            CPAP Humidifiers Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              CPAP humidifiers and heated humidification systems help improve
              respiratory therapy comfort by adding moisture to the airflow
              delivered during sleep apnea treatment. Proper humidification can
              reduce dry mouth, nasal irritation, throat discomfort, and airflow
              dryness commonly experienced during CPAP therapy.
            </p>

            <p>
              Modern CPAP humidifiers include advanced moisture control systems,
              heated water chambers, and climate support technologies designed
              for better airflow comfort and long-term therapy compliance.
            </p>

            <p>
              At Respishop, explore premium CPAP humidifiers, water chambers,
              heated humidification systems, and respiratory moisture accessories
              designed for reliable sleep therapy support and improved breathing
              comfort.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}