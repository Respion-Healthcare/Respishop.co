import { notFound } from "next/navigation"
import { products } from "@/lib/products"

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const safeSlug = slug?.toLowerCase()

  // ✅ BLOG CONTENT
  const blogContent: any = {
    "best-cpap-machine-in-india": {
      title: "Best CPAP Machine in India (2026) – Price, Features & Buying Guide",
      content: `
CPAP machines are one of the most effective treatments for sleep apnea, a condition that affects breathing during sleep. If you are looking for the best CPAP machine in India, this guide will help you choose the right one based on price, features, and performance.

What is a CPAP Machine?

A CPAP (Continuous Positive Airway Pressure) machine is a device that provides a constant flow of air to keep your airways open during sleep. It is widely used for treating obstructive sleep apnea and improving sleep quality.

Benefits of Using a CPAP Machine

- Improves sleep quality
- Reduces snoring
- Prevents breathing interruptions
- Boosts energy levels
- Reduces risk of heart problems

CPAP Machine Price in India

- Basic CPAP machines: ₹25,000 – ₹40,000
- Auto CPAP machines: ₹40,000 – ₹90,000
- Advanced CPAP with humidifier: ₹90,000 – ₹1,50,000+

Best CPAP Machines in India (2026)

- ResMed AirSense 10 AutoSet
- ResMed AirSense 11 AutoSet
- AirMini AutoSet Travel CPAP

Buying Guide

1. Type (Auto or Fixed)
2. Humidifier
3. Noise level
4. Portability
5. Brand

👉 Check our CPAP machines:
https://www.respishop.co.in/category/cpap-machine

FAQs

Q1. What is the best CPAP machine in India?
ResMed AirSense 10 and 11 are top choices.

Q2. What is the price?
₹25,000 to ₹1,50,000+

Q3. Can I use at home?
Yes.

Q4. Is it safe?
Yes, doctor recommended.
`,
    },

    "cpap-machine-price-in-bhubaneswar": {
  title: "CPAP Machine Price in Bhubaneswar – Where to Buy in 2026",
  content: `
If you are looking for the CPAP machine price in Bhubaneswar, this guide will help you understand the latest pricing, available models, and where to buy authentic devices.

Sleep apnea is becoming more common, and CPAP machines are one of the most effective solutions for better sleep and improved health.

CPAP Machine Price in Bhubaneswar

The price of CPAP machines in Bhubaneswar depends on the brand and features:

- Basic CPAP machines: ₹25,000 – ₹40,000
- Auto CPAP machines: ₹40,000 – ₹90,000
- Advanced CPAP with humidifier: ₹90,000 – ₹1,50,000+

Popular brands like ResMed offer high-quality and reliable machines widely used across India.

Best CPAP Machines Available

Some of the top CPAP machines you can buy in Bhubaneswar:

- ResMed AirSense 10 AutoSet
- ResMed AirSense 11 AutoSet
- AirMini AutoSet Travel CPAP

These machines provide excellent comfort, advanced technology, and long-term durability.

Where to Buy CPAP Machine in Bhubaneswar?

You can buy CPAP machines from trusted medical equipment providers in Bhubaneswar or order online for better deals and convenience.

👉 Buy CPAP machines online here:
https://www.respishop.co.in/category/cpap-machine

Benefits of Buying Online

- Better pricing and offers
- Genuine products with warranty
- Doorstep delivery in Bhubaneswar
- Easy comparison of models

Buying Guide

Before purchasing a CPAP machine, consider:

1. Auto vs Fixed CPAP
2. Noise level
3. Humidifier support
4. Portability
5. Brand reputation

Conclusion

If you are searching for the best CPAP machine price in Bhubaneswar, always choose a trusted seller to ensure quality and support. Investing in a good CPAP device can significantly improve your sleep and overall health.

FAQs

Q1. What is the CPAP machine price in Bhubaneswar?
CPAP machines start from ₹25,000 and go up to ₹1,50,000 depending on features.

Q2. Where can I buy CPAP machine in Bhubaneswar?
You can buy online or from authorized medical equipment providers.

Q3. Which CPAP machine is best?
ResMed AirSense series is one of the best options available.

Q4. Is CPAP available in Bhubaneswar?
Yes, CPAP machines are available both online and offline in Bhubaneswar.
`,
    },

    "oxygen-concentrator-price-in-india": {
  title: "Oxygen Concentrator Price in India (2026) – Complete Buying Guide",
  content: `
<h2>🫁 Oxygen Concentrator Price in India (2026)</h2>

<p>Oxygen concentrators are essential medical devices for patients who need continuous oxygen support. This guide will help you understand pricing, features, and the best options available in India.</p>

<h2>🔍 What is an Oxygen Concentrator?</h2>
<p>An oxygen concentrator takes air from the surroundings, removes nitrogen, and delivers pure oxygen. It is widely used for respiratory conditions and home care.</p>

<h2>💰 Oxygen Concentrator Price in India</h2>
<ul>
  <li><strong>5 LPM:</strong> ₹30,000 – ₹60,000</li>
  <li><strong>10 LPM:</strong> ₹60,000 – ₹1,20,000</li>
  <li><strong>Portable:</strong> ₹1,20,000 – ₹2,50,000+</li>
</ul>

<h2>🏆 Best Oxygen Concentrators</h2>
<ul>
  <li>Philips EverFlo 5 LPM</li>
  <li>OxyMed 5 LPM</li>
  <li>OxyMed 10 LPM</li>
</ul>

<h2>🛒 Where to Buy?</h2>
<p>
<a href="/category/oxygen-concentrator" class="text-blue-600 font-semibold underline">
View Oxygen Concentrators →
</a>
</p>

<h2>📦 Benefits of Buying Online</h2>
<ul>
  <li>Better pricing</li>
  <li>Genuine products</li>
  <li>Doorstep delivery</li>
  <li>Easy comparison</li>
</ul>

<h2>🧠 Buying Guide</h2>
<ol>
  <li>Check oxygen flow (5LPM or 10LPM)</li>
  <li>Noise level</li>
  <li>Power consumption</li>
  <li>Portability</li>
  <li>Brand reputation</li>
</ol>

<h2>✅ Conclusion</h2>
<p>Choosing the right oxygen concentrator improves quality of life. Always choose a trusted brand and reliable seller.</p>

<h2>❓ FAQs</h2>
<p><strong>What is the price?</strong><br/>₹30,000 – ₹2,50,000+</p>
<p><strong>Which brand is best?</strong><br/>Philips & OxyMed</p>
<p><strong>Can I use at home?</strong><br/>Yes</p>
<p><strong>Is it safe?</strong><br/>Yes, with medical guidance</p>
`,
    },
  }

const blog = blogContent[safeSlug]

  // ✅ DEBUG (TEMP)
  if (!blog) {
    return (
      <div className="p-10 text-red-500">
        Blog not found: {slug}
      </div>
    )
  }

const faqSchema: any = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the price of oxygen concentrator in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oxygen concentrator prices in India start from ₹30,000 and go up to ₹2,50,000 depending on type and features."
      }
    },
    {
      "@type": "Question",
      "name": "Which oxygen concentrator is best in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular options include Philips EverFlo and OxyMed oxygen concentrators due to their reliability and performance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an oxygen concentrator at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, oxygen concentrators are designed for home use and are easy to operate."
      }
    },
    {
      "@type": "Question",
      "name": "Is oxygen concentrator safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, oxygen concentrators are safe when used as per medical advice."
      }
    }
  ]
}

 return (
  <div className="max-w-4xl mx-auto px-6 py-10">

    {/* ✅ FAQ SCHEMA (VERY IMPORTANT) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />

    <h1 className="text-3xl font-bold mb-6">
      {blog.title}
    </h1>

    <div
      className="prose max-w-none prose-lg prose-blue
                 prose-headings:font-semibold
                 prose-h2:mt-8 prose-h2:mb-4
                 prose-p:leading-relaxed
                 prose-li:my-1"
      dangerouslySetInnerHTML={{ __html: blog.content }}
    />

    {/* ✅ INTERNAL LINKING */}
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">
        Related Products
      </h2>

      <ul className="list-disc pl-5">
        {products.slice(0, 3).map((p) => (
          <li key={p.slug}>
            <a
              href={`/products/${p.slug}`}
              className="text-blue-600 underline"
            >
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </div>
)
}