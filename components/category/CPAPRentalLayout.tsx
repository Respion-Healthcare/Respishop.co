// components/category/CPAPRentalLayout.tsx

import {
  CalendarClock,
  Truck,
  Wallet,
  ShieldCheck,
  BedDouble,
  PhoneCall,
  Clock3,
  Activity,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"

type Props = {
  products: any[]
}

export default function CPAPRentalLayout({ products }: Props) {
  return (
    <div className="overflow-hidden bg-[#eef6ff]">

      {/* HERO */}
      <section className="relative overflow-hidden py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-100px] top-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[420px] w-[420px] rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">
                <CalendarClock size={16} />
                Sleep Therapy Rental Solutions
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                CPAP & BiPAP Machine
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Rental Services
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
                Affordable CPAP & BiPAP rental services designed for sleep apnea therapy support with flexible rental plans,
                expert respiratory guidance, home setup assistance, and fast delivery across India.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Flexible Rental Plans
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Fast Setup Support
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur-xl">
                  Expert Assistance
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6">

              <div className="rounded-[34px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <BedDouble size={42} className="text-cyan-300" />
                <h3 className="mt-6 text-2xl font-black text-white">
                  Comfortable Sleep Therapy
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">
                  CPAP & BiPAP rental systems designed to support better sleep apnea therapy without large upfront investment.
                </p>
              </div>

              <div className="rounded-[34px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <PhoneCall size={42} className="text-blue-300" />
                <h3 className="mt-6 text-2xl font-black text-white">
                  Respiratory Guidance
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">
                  Expert assistance and therapy guidance for smoother CPAP/BiPAP adaptation and setup support.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

 {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-14">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
            Rental Devices
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            CPAP & BiPAP Rental
            <span className="block text-cyan-700">
              Devices Available
            </span>
          </h2>

        </div>

        <ProductGrid products={products} />

      </section>


      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
            Rental Benefits
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Affordable & Reliable
            <span className="block text-cyan-700">
              Sleep Therapy Support
            </span>
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <CalendarClock size={40} className="text-blue-600" />
            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Flexible Plans
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Short-term and long-term CPAP & BiPAP rental options designed for different therapy needs and budgets.
            </p>
          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <Truck size={40} className="text-cyan-600" />
            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Fast Delivery
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Quick delivery and setup assistance for uninterrupted respiratory therapy support.
            </p>
          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <Wallet size={40} className="text-emerald-600" />
            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Affordable Pricing
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Cost-effective CPAP & BiPAP rental services without the burden of large upfront purchases.
            </p>
          </div>

          <div className="group rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <ShieldCheck size={40} className="text-indigo-600" />
            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Expert Support
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Professional respiratory guidance and therapy assistance for improved treatment confidence.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <div className="mb-16 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
              Rental Process
            </p>

            <h2 className="mt-5 text-4xl font-black text-slate-900">
              Simple CPAP & BiPAP
              <span className="block text-blue-700">
                Rental Experience
              </span>
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] border border-slate-100 bg-slate-50 p-10">
              <Clock3 size={42} className="text-blue-600" />
              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Choose Rental Duration
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Select flexible CPAP & BiPAP rental plans based on your respiratory therapy requirements.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-slate-50 p-10">
              <Truck size={42} className="text-cyan-600" />
              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Delivery & Setup
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Fast delivery and guided setup support for easier therapy initiation.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-slate-50 p-10">
              <Activity size={42} className="text-indigo-600" />
              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Start Therapy
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Begin comfortable sleep apnea therapy with CPAP & BiPAP support systems.
              </p>
            </div>

          </div>

        </div>
      </section>

     
      {/* SEO CONTENT */}
      <section className="border-t border-blue-100 bg-white py-24">

        <div className="mx-auto max-w-5xl px-4 md:px-6">

          <h2 className="text-4xl font-black text-slate-900">
            CPAP & BiPAP Machine Rental Services in India
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              CPAP & BiPAP machine rental services provide an affordable solution for patients requiring sleep apnea therapy without purchasing a new device immediately.
              Rental systems are ideal for short-term use, therapy trials, travel support, and temporary respiratory care needs.
            </p>

            <p>
              Modern CPAP & BiPAP rental devices include advanced airflow technology, humidification support, automatic pressure adjustment systems,
              and comfortable therapy features designed for effective sleep apnea management.
            </p>

            <p>
              At Respishop, explore flexible CPAP & BiPAP rental plans, expert setup support, respiratory therapy assistance, and reliable sleep apnea care solutions
              designed for improved breathing comfort and better nightly therapy performance.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}