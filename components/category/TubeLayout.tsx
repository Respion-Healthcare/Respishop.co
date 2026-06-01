// components/category/TubeLayout.tsx

import {
  Cable,
  Activity,
  ShieldCheck,
  Waves,
  ArrowRight,
  Sparkles,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

const stats = [
  "99% Secure Connections",
  "Universal Compatibility",
  "Flexible Movement",
  "Optimized Airflow",
]

const tubeTypes = [
  {
    title: "Standard Tubing",
    desc: "Lightweight respiratory tubing designed for reliable everyday airflow delivery and comfort.",
    icon: Cable,
  },
  {
    title: "Heated Tubing",
    desc: "Supports humidity management and helps reduce condensation during respiratory therapy.",
    icon: Waves,
  },
  {
    title: "Connector Systems",
    desc: "Adapters, couplings and connection accessories engineered for dependable integration.",
    icon: ShieldCheck,
  },
]

export default function TubeLayout({ products }: Props) {
  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#0f3d3e]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-xl">
                <Sparkles size={16} />
                Tube & Connector Systems
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                Respiratory
                <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Flow Pathways
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                Explore respiratory tubes, heated tubing, airflow connectors,
                adapters and coupling systems designed to support reliable
                airflow delivery, secure equipment integration and long‑term
                respiratory care performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="text-3xl font-black text-emerald-300">✓</div>
                  <p className="mt-4 text-lg font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-4 md:px-6">
          {["Premium Materials", "Leak Resistant Design", "Enhanced Flexibility", "Long Service Life"].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 p-6 text-center">
              <p className="font-bold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
            Respiratory Accessories
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Complete Tube &
            <span className="block text-emerald-700">Connector Collection</span>
          </h2>

          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
              Respiratory Performance
            </p>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              Why Respiratory Tubing Matters
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Respiratory tubing and connector systems create the airflow
              pathway between respiratory devices, humidification systems and
              patient interfaces.
            </p>

            <p>
              High-quality tubing helps improve airflow consistency, movement
              flexibility and overall respiratory support while maintaining
              dependable connectivity throughout the system.
            </p>

            <p>
              Modern connector systems are engineered for durability, airflow
              stability and compatibility across a wide range of respiratory
              equipment configurations.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
              Product Categories
            </p>

            <h2 className="mt-5 text-5xl font-black text-white">
              Tube & Connector Types
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {tubeTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <item.icon size={42} className="text-emerald-400" />

                <h3 className="mt-6 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-emerald-300">
                  Learn More <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Respiratory Tubes & Connectors Online in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Respiratory tubes and connectors are essential components that
              create secure airflow pathways between respiratory devices,
              humidification systems and therapy accessories.
            </p>

            <p>
              Modern tubing systems are designed for flexibility, durability and
              airflow efficiency, supporting a wide variety of respiratory care
              applications and equipment setups.
            </p>

            <p>
              Explore premium respiratory tubing, adapters, couplings,
              connectors and airflow accessories designed for dependable
              performance and long‑term respiratory support.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h3>

            <div className="mt-10 space-y-8">
              <div>
                <h4 className="font-bold text-slate-900">
                  What are respiratory connectors used for?
                </h4>
                <p className="mt-2 text-slate-600">
                  They connect respiratory devices, tubing systems and therapy accessories.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  How often should respiratory tubing be replaced?
                </h4>
                <p className="mt-2 text-slate-600">
                  Replacement schedules vary depending on product type and manufacturer guidance.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  What is heated tubing?
                </h4>
                <p className="mt-2 text-slate-600">
                  Heated tubing can help support humidity management and reduce condensation.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Are respiratory connectors universal?
                </h4>
                <p className="mt-2 text-slate-600">
                  Compatibility depends on the equipment and connector specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
