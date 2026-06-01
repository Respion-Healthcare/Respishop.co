import {
  Moon,
  Wind,
  Shield,
  Sparkles,
  BedDouble,
  ChevronDown,
} from "lucide-react"

import ProductGrid from "@/components/product/ProductGrid"
import FAQSchema from "@/components/seo/FAQSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

type Props = {
  products: any[]
}

export default function NasalMaskLayout({
  products,
}: Props) {

 const faqs = [
  {
    question: "What is a nasal CPAP mask?",
    answer:
      "A nasal CPAP mask covers only the nose and delivers airflow during sleep apnea therapy.",
  },
  {
    question: "Who should use a nasal mask?",
    answer:
      "Nasal masks are suitable for users seeking lightweight and comfortable CPAP therapy.",
  },
  {
    question: "Can nasal CPAP masks be used with APAP and BiPAP machines?",
    answer:
      "Yes. Most nasal masks are compatible with CPAP, APAP, and BiPAP devices that use standard tubing connections.",
  },
  {
    question: "Are nasal masks suitable for side sleepers?",
    answer:
      "Yes. Many nasal masks are designed with compact frames and secure cushions that work well for side sleepers.",
  },
  {
    question: "How do I choose the correct nasal mask size?",
    answer:
      "Selecting the correct size helps reduce leaks and improve comfort. Most manufacturers provide sizing guides for accurate fitting.",
  },
  {
    question: "What is the difference between a nasal mask and a full face mask?",
    answer:
      "A nasal mask covers only the nose and offers a lighter fit, while a full face mask covers both the nose and mouth and is often preferred by mouth breathers.",
  },
]

  return (
    <div className="bg-[#fffaf5]">

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="rounded-[50px] bg-gradient-to-r from-orange-100 via-amber-50 to-rose-100 p-10 md:p-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              <Moon size={16} />
              Comfortable Sleep Therapy
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
              Nasal
              <span className="block text-orange-600">
                CPAP Masks
              </span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Explore premium nasal CPAP masks online in India designed for
              lightweight comfort, effective airflow delivery, reduced facial contact,
              and reliable sleep apnea therapy support.
            </p>

          </div>

        </div>

      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-4 md:px-6">

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Wind className="text-orange-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">Smooth Airflow</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Sparkles className="text-rose-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">Soft Cushion</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <Shield className="text-amber-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">Leak Control</h3>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <BedDouble className="text-orange-600" size={36} />
          <h3 className="mt-5 text-xl font-bold">Better Sleep</h3>
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <ProductGrid products={products} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">

      <div className="relative overflow-hidden rounded-[48px] bg-white p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
  <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

  <div className="relative z-10">
          <h2 className="text-4xl font-black text-slate-900">
            Buy Nasal CPAP Masks Online in India
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Nasal CPAP masks are among the most popular sleep apnea therapy
            interfaces used by CPAP, APAP, and BiPAP users worldwide. Designed
            to cover only the nose, these masks provide effective airflow
            delivery while maintaining a lightweight and comfortable fit for
            nightly therapy. Many users prefer nasal masks because they offer
            less facial contact compared to full face masks, making them ideal
            for side sleepers, active sleepers, and individuals seeking a more
            natural sleep experience.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Modern nasal CPAP masks feature advanced cushion technologies,
            flexible headgear systems, quiet exhalation ports, and improved
            seal designs that help reduce air leaks during therapy. These
            innovations improve comfort while supporting consistent airway
            pressure delivery throughout the night. Whether you are newly
            diagnosed with obstructive sleep apnea or upgrading your current
            setup, choosing the right nasal mask can significantly improve
            therapy compliance and sleep quality.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-orange-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Benefits of Nasal CPAP Masks
              </h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Lightweight and comfortable design</li>
                <li>• Minimal facial contact during sleep</li>
                <li>• Improved field of vision for reading or watching TV</li>
                <li>• Reduced mask bulk compared to full face masks</li>
                <li>• Effective therapy for many sleep apnea patients</li>
                <li>• Available in multiple cushion sizes and styles</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-amber-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Who Should Use a Nasal Mask?
              </h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Users who primarily breathe through their nose</li>
                <li>• Side sleepers looking for a smaller mask profile</li>
                <li>• New CPAP users seeking comfort and simplicity</li>
                <li>• Individuals wanting reduced facial coverage</li>
                <li>• Users requiring reliable nightly sleep apnea therapy</li>
                <li>• Patients using CPAP, APAP, or BiPAP machines</li>
              </ul>
            </div>

          </div>

          <h2 className="mt-16 text-3xl font-black text-slate-900">
            Features to Consider When Choosing a Nasal Mask
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Selecting the correct nasal CPAP mask involves evaluating cushion
            comfort, seal performance, headgear adjustability, and compatibility
            with your therapy device. A properly fitted mask can help reduce air
            leaks, improve comfort, and support effective sleep apnea treatment.
            Many modern nasal masks include soft silicone cushions, magnetic
            clips, quick-release tubing connections, and quiet airflow
            technology designed to improve the overall therapy experience.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Proper sizing is equally important. Using the correct cushion size
            helps maintain an effective seal while minimizing pressure points on
            the bridge of the nose. Most manufacturers provide sizing guides and
            multiple cushion options to accommodate different facial structures.
          </p>

          <h2 className="mt-16 text-3xl font-black text-slate-900">
            Cleaning and Maintenance
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Regular cleaning helps maintain mask performance and hygiene. Wash
            cushions and mask components according to manufacturer guidelines and
            inspect them regularly for signs of wear. Replacing cushions,
            headgear, and other consumable parts at recommended intervals can
            help preserve comfort, seal quality, and therapy effectiveness.
          </p>

          <h2 className="mt-16 text-3xl font-black text-slate-900">
            Why Buy Nasal CPAP Masks from Respishop?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Respishop offers a curated range of genuine nasal CPAP masks from
            trusted sleep therapy brands. Customers benefit from expert
            respiratory support, nationwide delivery, product guidance, and
            access to premium sleep apnea therapy solutions. Whether you need a
            replacement mask, upgraded cushion technology, or a more comfortable
            therapy interface, our collection is designed to help you achieve
            effective and consistent sleep therapy.
          </p>

        </div>
</div>
      </section>

      <FAQSchema faqs={faqs} />

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
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-bold text-slate-900">
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

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://respishop.in",
          },
          {
            name: "Nasal Masks",
            url: "https://respishop.in/products/nasal-mask",
          },
        ]}
      />

    </div>
  )
}