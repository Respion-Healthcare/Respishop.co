import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const safeSlug = slug?.toLowerCase() || ""

  const title = safeSlug.replace(/-/g, " ")

  return {
    title: `${title} | Respishop`,
    description: `Read about ${title}. Learn benefits, usage, and best products in India for CPAP therapy and respiratory care.`,
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const safeSlug = slug?.toLowerCase()

const blogContent: Record<string, any> = {

  "what-is-cpap-machine": {
  title: "What is a CPAP Machine and How Does It Work?",
  image: "/images/SleepTherapy.jpg",
  content: `

<h1>What is a CPAP Machine and How Does It Work?</h1>

<p>A CPAP (Continuous Positive Airway Pressure) machine is a medical device used to treat sleep apnea, a condition where breathing repeatedly stops and starts during sleep. It works by delivering a continuous flow of air through a mask, keeping the airway open.</p>

<p>Sleep apnea can lead to poor sleep quality, fatigue, and serious health risks if left untreated. Using a CPAP machine ensures uninterrupted breathing and better overall health.</p>

<h2>How Does a CPAP Machine Work?</h2>

<p>The CPAP machine pulls in air, filters it, and delivers it at a constant pressure through a mask. This prevents airway collapse and ensures smooth breathing throughout the night.</p>

<ul>
<li>Maintains continuous airflow</li>
<li>Prevents airway blockage</li>
<li>Improves oxygen supply</li>
</ul>

<h2>Benefits of Using a CPAP Machine</h2>

<ul>
<li>Improves sleep quality</li>
<li>Reduces snoring significantly</li>
<li>Prevents breathing interruptions</li>
<li>Boosts energy and concentration</li>
<li>Supports long-term heart health</li>
</ul>

<h2>Who Should Use a CPAP Machine?</h2>

<p>CPAP machines are recommended for individuals diagnosed with sleep apnea or those experiencing symptoms like loud snoring, daytime fatigue, or breathing pauses during sleep.</p>

<h2>Types of CPAP Machines</h2>

<ul>
<li>Standard CPAP – fixed air pressure</li>
<li>Auto CPAP (APAP) – adjusts pressure automatically</li>
<li>BiPAP – different pressure for inhale and exhale</li>
</ul>

<h2>How to Choose the Best CPAP Machine in India</h2>

<p>Choosing the right CPAP machine depends on comfort, features, and budget. Look for quiet operation, humidifier support, and easy maintenance.</p>

<p>
👉 Explore our collection of 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines in India
</a> 
for the best options available.
</p>

<h2>Recommended CPAP Machines</h2>

<p>Here are some popular options available in India:</p>

<ul>
<li><a href="/products/resmed-airsense-10" style="color:blue;">ResMed AirSense 10</a></li>
<li><a href="/products/resmed-airsense-11" style="color:blue;">ResMed AirSense 11</a></li>
</ul>

<h2>Common Problems Without CPAP Therapy</h2>

<ul>
<li>Frequent waking during night</li>
<li>Daytime sleepiness</li>
<li>High blood pressure risk</li>
<li>Poor concentration</li>
</ul>

<h2>FAQs</h2>

<p><strong>Is CPAP safe for daily use?</strong><br/>
Yes, CPAP therapy is completely safe and recommended for long-term use.</p>

<p><strong>Can CPAP cure sleep apnea?</strong><br/>
CPAP does not cure the condition but effectively manages it.</p>

<p><strong>Does CPAP reduce snoring?</strong><br/>
Yes, it significantly reduces or eliminates snoring.</p>

`,
},
"best-cpap-machine-in-india": {
  title: "Best CPAP Machine in India (2026) – Price, Features & Buying Guide",
  image: "/images/Blogs/best cpap.png",
  content: `

<h1>Best CPAP Machine in India (2026) – Complete Buying Guide</h1>

<p>Choosing the best CPAP machine in India is essential for effective sleep apnea treatment. With multiple options available, selecting the right machine depends on comfort, features, and budget.</p>

<h2>Top CPAP Machines in India</h2>

<ul>
<li><a href="/products/resmed-airsense-10" style="color:blue;">ResMed AirSense 10</a> – Reliable and widely used</li>
<li><a href="/products/resmed-airsense-11" style="color:blue;">ResMed AirSense 11</a> – Latest model with advanced features</li>
<li>Philips DreamStation – Comfortable and quiet operation</li>
</ul>

<h2>Key Features to Look For</h2>

<ul>
<li>Auto pressure adjustment (APAP)</li>
<li>Built-in humidifier</li>
<li>Low noise operation</li>
<li>Compact and travel-friendly design</li>
</ul>

<h2>CPAP Machine Price in India</h2>

<p>CPAP machines in India typically range from ₹25,000 to ₹1,50,000 depending on brand and features.</p>

<p>
👉 Browse our latest 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines collection
</a> 
for best deals and offers.
</p>

<h2>How to Choose the Right CPAP Machine</h2>

<p>Always consider comfort, mask compatibility, and ease of use. Beginners should prefer auto CPAP machines for better experience.</p>

<h2>Benefits of Using CPAP</h2>

<ul>
<li>Improves sleep quality</li>
<li>Reduces snoring</li>
<li>Prevents breathing interruptions</li>
<li>Improves overall health</li>
</ul>

<h2>FAQs</h2>

<p><strong>Which CPAP machine is best in India?</strong><br/>
ResMed AirSense 10 and 11 are among the best options.</p>

<p><strong>Is CPAP worth buying?</strong><br/>
Yes, it is essential for managing sleep apnea effectively.</p>

`,
},
"cpap-machine-price-in-bhubaneswar": {
  title: "CPAP Machine Price in Bhubaneswar (2026) – Where to Buy & Best Deals",
  image: "/images/blog2.webp",
  content: `

<h1>CPAP Machine Price in Bhubaneswar (2026 Guide)</h1>

<p>If you are searching for CPAP machine price in Bhubaneswar, prices usually range between ₹25,000 and ₹1,50,000 depending on features, brand, and technology.</p>

<h2>Latest CPAP Machine Prices</h2>

<ul>
<li>Basic CPAP: ₹25,000 – ₹40,000</li>
<li>Auto CPAP (APAP): ₹50,000 – ₹90,000</li>
<li>Premium Models: ₹1,00,000+</li>
</ul>

<h2>Where to Buy CPAP Machines in Bhubaneswar?</h2>

<p>You can buy CPAP machines online for better pricing, genuine products, and home delivery.</p>

<p>
👉 Check latest deals on 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines in Bhubaneswar
</a>
</p>

<h2>Best CPAP Machines Available</h2>

<ul>
<li><a href="/products/resmed-airsense-10" style="color:blue;">ResMed AirSense 10</a></li>
<li><a href="/products/resmed-airsense-11" style="color:blue;">ResMed AirSense 11</a></li>
</ul>

<h2>Why Buy Online?</h2>

<ul>
<li>Better pricing than local stores</li>
<li>Wide range of products</li>
<li>Home delivery</li>
<li>Easy comparison</li>
</ul>

<h2>FAQs</h2>

<p><strong>What is the cheapest CPAP machine in Bhubaneswar?</strong><br/>
Basic models start from ₹25,000.</p>

<p><strong>Can I get home delivery?</strong><br/>
Yes, online stores provide delivery across Bhubaneswar.</p>

`,
},
 "oxygen-concentrator-price-in-india": {
  title: "Oxygen Concentrator Price in India (2026) – Complete Buying Guide",
  image: "/images/sleepstudy.jpg",
  content: `

<h1>Oxygen Concentrator Price in India (2026 Guide)</h1>

<p>Oxygen concentrators are essential medical devices used for patients who need continuous oxygen supply. In India, prices vary depending on capacity and features.</p>

<h2>Oxygen Concentrator Price Range</h2>

<ul>
<li>5L Concentrator: ₹30,000 – ₹60,000</li>
<li>10L Concentrator: ₹60,000 – ₹1,20,000</li>
<li>Portable Models: ₹70,000 – ₹2,50,000</li>
</ul>

<h2>Factors Affecting Price</h2>

<ul>
<li>Oxygen capacity (Litres per minute)</li>
<li>Portability</li>
<li>Brand and build quality</li>
<li>Noise level</li>
</ul>

<h2>Who Needs an Oxygen Concentrator?</h2>

<p>Patients with respiratory conditions, low oxygen levels, or post-COVID recovery often require oxygen concentrators.</p>

<h2>CPAP vs Oxygen Concentrator</h2>

<p>CPAP machines are used for sleep apnea, while oxygen concentrators provide oxygen therapy.</p>

<p>
👉 Explore 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines
</a> 
for sleep therapy solutions.
</p>

<h2>FAQs</h2>

<p><strong>What is the price of oxygen concentrator in India?</strong><br/>
Prices start from ₹30,000 and go up to ₹2,50,000.</p>

<p><strong>Can I use it at home?</strong><br/>
Yes, most models are designed for home use.</p>

`,
},
"cpap-machine-price-in-india": {
  title: "CPAP Machine Price in India (2026) – Latest Price List & Buying Guide",
  image: "/images/SleepTherapy.jpg",
  content: `

<h1>CPAP Machine Price in India (2026) – Complete Price Guide</h1>

<p>If you are searching for CPAP machine price in India, this guide will help you understand the latest prices, types, and how to choose the best device for your needs.</p>

<p>CPAP machines are essential for treating sleep apnea and improving breathing during sleep. Prices vary depending on features, brand, and technology.</p>

<h2>CPAP Machine Price in India (2026)</h2>

<ul>
<li>Basic CPAP Machines: ₹25,000 – ₹40,000</li>
<li>Auto CPAP (APAP): ₹50,000 – ₹90,000</li>
<li>Premium Models: ₹1,00,000 – ₹1,50,000+</li>
</ul>

<h2>Best CPAP Machines Available in India</h2>

<ul>
<li><a href="/products/resmed-airsense-10" style="color:blue;">ResMed AirSense 10</a> – Best for beginners</li>
<li><a href="/products/resmed-airsense-11" style="color:blue;">ResMed AirSense 11</a> – Advanced features</li>
<li>Philips DreamStation – Quiet and comfortable</li>
</ul>

<h2>Factors That Affect CPAP Price</h2>

<ul>
<li>Automatic pressure adjustment</li>
<li>Humidifier support</li>
<li>Noise level</li>
<li>Portability and design</li>
</ul>

<h2>Where to Buy CPAP Machines in India?</h2>

<p>Buying online is the best option for getting genuine products, better pricing, and home delivery.</p>

<p>
👉 Explore the latest 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines in India
</a>
</p>

<h2>Why CPAP Machine is Important?</h2>

<p>Sleep apnea can lead to serious health issues like heart disease, fatigue, and poor concentration. CPAP therapy helps maintain proper breathing and improves sleep quality.</p>

<h2>Tips Before Buying a CPAP Machine</h2>

<ul>
<li>Consult a doctor before use</li>
<li>Choose the right mask type</li>
<li>Check warranty and support</li>
<li>Go for trusted brands</li>
</ul>

<h2>FAQs</h2>

<p><strong>What is the price of CPAP machine in India?</strong><br/>
Prices start from ₹25,000 and can go up to ₹1,50,000 depending on features.</p>

<p><strong>Which CPAP machine is best?</strong><br/>
ResMed AirSense 10 and AirSense 11 are among the best.</p>

<p><strong>Can I buy CPAP machine online?</strong><br/>
Yes, you can buy online with home delivery across India.</p>

`,
},
"cpap-machine-side-effects-and-solutions": {
  title: "CPAP Machine Side Effects & Solutions (2026) – Complete Guide",
  image: "/images/SleepTherapy.jpg",
  content: `

<h1>CPAP Machine Side Effects & Solutions (2026 Guide)</h1>

<p>CPAP machines are highly effective for treating sleep apnea, but some users may experience minor side effects when starting therapy. The good news is that most of these issues are temporary and can be easily solved.</p>

<h2>Common CPAP Machine Side Effects</h2>

<h3>1. Dry Nose or Throat</h3>
<p>This is one of the most common problems caused by continuous airflow.</p>

<p><strong>Solution:</strong> Use a humidifier or heated tubing to add moisture.</p>

<h3>2. Mask Discomfort</h3>
<p>A poorly fitted mask can cause irritation or pressure marks.</p>

<p><strong>Solution:</strong> Choose the right mask size and adjust straps properly.</p>

<h3>3. Air Leaks</h3>
<p>Air leaks reduce therapy effectiveness and disturb sleep.</p>

<p><strong>Solution:</strong> Ensure proper mask fitting and replace worn-out cushions.</p>

<h3>4. Difficulty Falling Asleep</h3>
<p>New users may feel uncomfortable with airflow initially.</p>

<p><strong>Solution:</strong> Use ramp mode to gradually increase pressure.</p>

<h3>5. Skin Irritation</h3>
<p>Continuous mask contact may cause redness or irritation.</p>

<p><strong>Solution:</strong> Clean mask regularly and use soft padding.</p>

<h2>How to Use CPAP Machine Comfortably</h2>

<ul>
<li>Start with short sessions and increase gradually</li>
<li>Use a humidifier for better comfort</li>
<li>Keep the machine clean</li>
<li>Choose a low-noise model</li>
</ul>

<h2>Best CPAP Machines for Comfort</h2>

<ul>
<li><a href="/products/resmed-airsense-10" style="color:blue;">ResMed AirSense 10</a> – Easy to use and reliable</li>
<li><a href="/products/resmed-airsense-11" style="color:blue;">ResMed AirSense 11</a> – Advanced comfort features</li>
</ul>

<p>
👉 Explore more options in our 
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP machines collection
</a>
</p>

<h2>When to Consult a Doctor?</h2>

<p>If side effects persist for a long time or worsen, consult a healthcare professional for proper guidance.</p>

<h2>Benefits Still Outweigh Side Effects</h2>

<p>Despite minor issues, CPAP therapy significantly improves sleep quality, reduces snoring, and prevents serious health risks like heart disease.</p>

<h2>FAQs</h2>

<p><strong>Are CPAP side effects permanent?</strong><br/>
No, most side effects are temporary and can be easily managed.</p>

<p><strong>Is CPAP safe to use daily?</strong><br/>
Yes, it is safe and recommended for long-term use.</p>

<p><strong>How to reduce CPAP discomfort?</strong><br/>
Use proper mask fitting, humidifier, and adjust pressure settings.</p>

`,
},
"resmed-airsense-10-vs-airsense-11": {
  title: "ResMed AirSense 10 vs AirSense 11 – Which One is Better in 2026?",
  image: "/images/SleepTherapy.jpg",
  content: `

<h1>ResMed AirSense 10 vs AirSense 11 – Complete Comparison (2026)</h1>

<p>If you are confused between ResMed AirSense 10 and AirSense 11, this guide will help you choose the right CPAP machine based on features, price, and performance.</p>

<h2>Quick Comparison</h2>

<table border="1" cellpadding="10">
<tr>
<th>Feature</th>
<th>AirSense 10</th>
<th>AirSense 11</th>
</tr>

<tr>
<td>Technology</td>
<td>Proven & Reliable</td>
<td>Latest Advanced Tech</td>
</tr>

<tr>
<td>Ease of Use</td>
<td>Simple Interface</td>
<td>Touchscreen + Smart Features</td>
</tr>

<tr>
<td>Connectivity</td>
<td>Basic</td>
<td>App Integration</td>
</tr>

<tr>
<td>Price</td>
<td>More Affordable</td>
<td>Premium Pricing</td>
</tr>
</table>

<h2>ResMed AirSense 10 – Overview</h2>

<p>The AirSense 10 is one of the most popular CPAP machines in India. It is reliable, easy to use, and perfect for beginners.</p>

<ul>
<li>Stable performance</li>
<li>Affordable price</li>
<li>Trusted by users</li>
</ul>

<p>
👉 Check details:
<a href="/products/resmed-airsense-10" style="color:blue;">
ResMed AirSense 10
</a>
</p>

<h2>ResMed AirSense 11 – Overview</h2>

<p>The AirSense 11 is the latest model with advanced features like smart tracking and improved comfort.</p>

<ul>
<li>Modern design</li>
<li>App connectivity</li>
<li>Better comfort features</li>
</ul>

<p>
👉 Check details:
<a href="/products/resmed-airsense-11" style="color:blue;">
ResMed AirSense 11
</a>
</p>

<h2>Which One Should You Choose?</h2>

<ul>
<li>Choose AirSense 10 if you want a budget-friendly and reliable machine</li>
<li>Choose AirSense 11 if you want advanced features and latest technology</li>
</ul>

<h2>Price Comparison in India</h2>

<p>AirSense 10 is generally more affordable, while AirSense 11 comes at a premium price due to its latest features.</p>

<p>
👉 Explore all options here:
<a href="/category/cpap-machine" style="color:blue; text-decoration:underline;">
CPAP Machines Collection
</a>
</p>

<h2>Final Verdict</h2>

<p>Both machines are excellent choices. Your decision should depend on your budget and feature preference. For most users, AirSense 10 is sufficient, while AirSense 11 is ideal for those wanting advanced features.</p>

<h2>FAQs</h2>

<p><strong>Is AirSense 11 better than AirSense 10?</strong><br/>
Yes, it has advanced features, but AirSense 10 is still very reliable.</p>

<p><strong>Which CPAP machine is best for beginners?</strong><br/>
AirSense 10 is best for beginners due to its simplicity.</p>

<p><strong>Is AirSense 11 worth the price?</strong><br/>
Yes, if you want modern features and better tracking.</p>

`,
},

}

  const blog = blogContent[safeSlug]

  if (!blog) return notFound()
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  image: [`https://respishop.in${blog.image}`],
  author: {
    "@type": "Organization",
    name: "Respishop",
  },
  publisher: {
    "@type": "Organization",
    name: "Respishop",
    logo: {
      "@type": "ImageObject",
      url: "https://respishop.in/logo.png",
    },
  },
}

  return (
    
    <div className="bg-gray-50 min-h-screen">
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(blogSchema),
  }}
/>
      {/* HERO */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto pb-12 text-white">
            <p className="text-sm text-gray-300 mb-2">
              Respishop Blog
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto py-12 mt-6 grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="md:col-span-2">
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-semibold
            prose-h2:text-2xl
            prose-p:text-gray-700
            prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA */}
          <div className="mt-10 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Need Help Choosing a CPAP Machine?
            </h3>
            <p className="text-sm mb-4">
              Explore top-rated CPAP machines with best prices and offers.
            </p>
            <Link
              href="/category/cpap-machine"
              className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View CPAP Machines →
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6 sticky top-24 h-fit">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">
              Related Products
            </h3>

            {products.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.category}/${p.slug}`}
                className="flex items-center gap-3 border rounded-lg p-3 mb-3 hover:shadow-md"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />

                <div>
                  <p className="text-sm font-medium">
                    {p.name}
                  </p>
                  <p className="text-xs text-blue-600">
                    View Product →
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-medium">
              What is CPAP machine price in India?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              ₹25,000 to ₹1,50,000 depending on features.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-medium">
              Is CPAP safe?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Yes, it is safe and recommended for long-term use.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}