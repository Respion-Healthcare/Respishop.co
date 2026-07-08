import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sleep Therapy Diagnosis | Respishop",
  description:
    "Professional sleep therapy diagnosis and sleep study services. Book a consultation with Respishop experts for sleep apnea diagnosis and treatment.",
}

export default function SleepTherapyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Sleep Therapy & Diagnosis
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Sleep Therapy Diagnosis
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Get professional evaluation for snoring, sleep apnea, excessive
            daytime sleepiness and other sleep disorders. Our experts help you
            identify the right therapy and equipment for better sleep.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">🩺</div>

            <h2 className="mt-5 text-xl font-semibold">
              Sleep Assessment
            </h2>

            <p className="mt-3 text-gray-600">
              Complete assessment of your sleep symptoms by trained specialists.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">😴</div>

            <h2 className="mt-5 text-xl font-semibold">
              Sleep Study Guidance
            </h2>

            <p className="mt-3 text-gray-600">
              Assistance with home sleep testing and interpreting reports.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">💙</div>

            <h2 className="mt-5 text-xl font-semibold">
              Therapy Recommendation
            </h2>

            <p className="mt-3 text-gray-600">
              Personalized recommendations for CPAP, BiPAP and masks based on
              your diagnosis.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-blue-600 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Need Help Choosing the Right Therapy?
          </h2>

          <p className="mt-4 text-blue-100">
            Speak with our sleep therapy experts today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="tel:9148733700"
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600"
            >
              Call: +91 91487 33700
            </a>

            <Link
              href="/products"
              className="rounded-full border border-white px-8 py-3 font-semibold"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </section>
    </main>
  )
}