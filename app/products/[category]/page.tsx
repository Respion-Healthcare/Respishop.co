import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { products } from "@/lib/products"

import CPAPLayout from "@/components/category/CPAPLayout"
import BiPAPLayout from "@/components/category/BiPAPLayout"
import OxygenLayout from "@/components/category/OxygenLayout"

import NasalMaskLayout from "@/components/category/NasalMaskLayout"
import FullFaceMaskLayout from "@/components/category/FullFaceMaskLayout"
import NasalPillowLayout from "@/components/category/NasalPillowLayout"

import HumidifierLayout from "@/components/category/HumidifierLayout"
import TubeLayout from "@/components/category/TubeLayout"
import FilterLayout from "@/components/category/FilterLayout"

import FramesHeadgearLayout from "@/components/category/FramesHeadgearLayout"
import MaskCushionLayout from "@/components/category/MaskCushionLayout"
import MaskPadClipsLayout from "@/components/category/MaskPadClipsLayout"

import CPAPRentalLayout from "@/components/category/CPAPRentalLayout"

type Props = {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { category } = await params

  /*
    SEO MAP
  */

  const seoMap: Record<
    string,
    {
      title: string
      description: string
      keywords: string[]
    }
  > = {

    /*
      CPAP
    */

    "cpap-machine": {

      title:
        "CPAP Machine Price in India | Buy CPAP Machines Online",

      description:
        "Buy premium CPAP machines online in India with advanced sleep apnea therapy technology, humidification support, intelligent airflow systems, and fast delivery from Respishop.",

      keywords: [
        "CPAP machine",
        "sleep apnea machine",
        "buy CPAP online",
        "automatic CPAP machine",
        "CPAP machine India",
      ],

    },

    /*
      BIPAP
    */

    "bipap-machine": {

      title:
        "BiPAP Machine Price in India | Buy BiPAP Online",

      description:
        "Explore premium BiPAP machines online in India for respiratory therapy, COPD treatment, non-invasive ventilation support, and advanced breathing assistance.",

      keywords: [
        "BiPAP machine",
        "BiPAP machine price",
        "buy BiPAP online",
        "COPD respiratory therapy",
        "non invasive ventilation",
      ],

    },

    /*
      OXYGEN
    */

    "oxygen-concentrator": {

      title:
        "Oxygen Concentrator Price in India | Buy Online",

      description:
        "Buy portable and home oxygen concentrators online in India with advanced oxygen therapy support, respiratory care solutions, and fast delivery from Respishop.",

      keywords: [
        "oxygen concentrator",
        "portable oxygen concentrator",
        "oxygen therapy",
        "oxygen machine",
      ],

    },

    /*
      NASAL MASK
    */

    "nasal-mask": {

      title:
        "Nasal CPAP Masks Online | Buy Nasal Masks in India",

      description:
        "Explore lightweight nasal CPAP masks online in India designed for comfortable sleep apnea therapy, airflow stability, and reduced facial contact.",

      keywords: [
        "nasal CPAP mask",
        "nasal mask",
        "sleep apnea mask",
        "CPAP nasal mask",
      ],

    },

    /*
      FULL FACE MASK
    */

    "full-face-mask": {

      title:
        "Full Face CPAP Masks Online | Buy Full Face Masks",

      description:
        "Buy premium full face CPAP masks online for mouth breathing support, high-pressure sleep therapy, and advanced respiratory care.",

      keywords: [
        "full face CPAP mask",
        "full face mask",
        "sleep apnea full face mask",
      ],

    },

    /*
      NASAL PILLOW
    */

    "nasal-pillow-mask": {

      title:
        "Nasal Pillow CPAP Masks Online | Lightweight CPAP Masks",

      description:
        "Explore lightweight nasal pillow CPAP masks online with minimal-contact design, quiet airflow systems, and comfortable sleep therapy support.",

      keywords: [
        "nasal pillow mask",
        "nasal pillow CPAP mask",
        "lightweight CPAP mask",
      ],

    },

    /*
      HUMIDIFIERS
    */

    "humidifier-bottle": {

      title:
        "CPAP Humidifiers Online | Heated Humidification Systems",

      description:
        "Buy CPAP humidifiers and heated humidification systems online for improved therapy comfort, moisture support, and reduced dryness during sleep apnea therapy.",

      keywords: [
        "CPAP humidifier",
        "heated humidifier",
        "CPAP water chamber",
      ],

    },

    /*
      TUBES
    */

    "tubes-and-connectors": {

      title:
        "CPAP Tubes & Connectors Online | Respiratory Tubing",

      description:
        "Shop premium CPAP tubes, respiratory tubing systems, and airflow connectors online for stable therapy performance and improved flexibility.",

      keywords: [
        "CPAP tubing",
        "CPAP hose",
        "CPAP connectors",
      ],

    },

    /*
      FILTERS
    */

    "filters-cleaners": {

      title:
        "CPAP Filters & Cleaning Supplies Online",

      description:
        "Buy CPAP filters, respiratory cleaning supplies, and device hygiene products online for cleaner airflow and better therapy performance.",

      keywords: [
        "CPAP filters",
        "CPAP cleaner",
        "respiratory cleaning supplies",
      ],

    },

    /*
      FRAMES & HEADGEAR
    */

    "frames-headgear": {

      title:
        "CPAP Frames & Headgear Online | Buy Mask Headgear",

      description:
        "Explore CPAP frames and headgear online designed for stable mask fitting, comfortable therapy support, and improved respiratory care performance.",

      keywords: [
        "CPAP headgear",
        "CPAP frames",
        "mask headgear",
        "CPAP accessories",
      ],

    },

    /*
      MASK CUSHIONS
    */

    "mask-cushions": {

      title:
        "CPAP Mask Cushions Online | Replacement Mask Cushions",

      description:
        "Shop CPAP mask cushions online for soft facial comfort, improved airflow sealing, leak protection, and enhanced sleep apnea therapy support.",

      keywords: [
        "CPAP cushion",
        "mask cushion",
        "replacement CPAP cushion",
        "CPAP accessories",
      ],

    },

    /*
      MASK PAD & CLIPS
    */

    "mask-pad-clips": {

      title:
        "CPAP Mask Pads & Clips Online | Comfort Accessories",

      description:
        "Buy CPAP mask pads, clips, and comfort accessories online for improved fitting, reduced pressure marks, and better sleep therapy comfort.",

      keywords: [
        "CPAP clips",
        "mask pads",
        "CPAP accessories",
        "CPAP comfort accessories",
      ],

    },

    /*
      CPAP RENTAL
    */

    "cpap-rental": {

      title:
        "CPAP Machine Rental Services | Rent CPAP Online",

      description:
        "Affordable CPAP rental services for sleep apnea therapy with flexible plans, respiratory support, and fast delivery from Respishop.",

      keywords: [
        "CPAP rental",
        "rent CPAP machine",
        "CPAP on rent",
      ],

    },

    /*
      BIPAP RENTAL
    */

    "bipap-rental": {

      title:
        "BiPAP Machine Rental Services | Rent BiPAP Online",

      description:
        "Rent BiPAP machines online for respiratory therapy, COPD support, and advanced breathing assistance with flexible rental plans.",

      keywords: [
        "BiPAP rental",
        "rent BiPAP machine",
        "BiPAP on rent",
      ],

    },

  }

  /*
    DEFAULT SEO
  */

  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

  const seo = seoMap[category] || {

    title: `${formattedCategory} Price in India | Buy Online`,

    description:
      `Buy premium ${formattedCategory} online in India from Respishop with warranty support and expert respiratory care assistance.`,

    keywords: [
      formattedCategory,
      `${formattedCategory} India`,
      `buy ${formattedCategory}`,
    ],

  }

  return {

    title: seo.title,

    description: seo.description,

    keywords: seo.keywords,

    alternates: {
      canonical: `https://respishop.in/products/${category}`,
    },

    openGraph: {

      title: seo.title,

      description: seo.description,

      url: `https://respishop.in/products/${category}`,

      siteName: "Respishop",

      locale: "en_IN",

      type: "website",

    },

    twitter: {

      card: "summary_large_image",

      title: seo.title,

      description: seo.description,

    },

    robots: {
      index: true,
      follow: true,
    },

  }
}

export default async function CategoryPage({
  params,
}: Props) {

  const { category } = await params

  /*
    FILTER PRODUCTS
  */

  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  /*
    404
  */

  if (filteredProducts.length === 0) {
    return notFound()
  }

  /*
    CPAP
  */

  if (category === "cpap-machine") {
    return <CPAPLayout products={filteredProducts} />
  }

  /*
    BIPAP
  */

  if (category === "bipap-machine") {
    return <BiPAPLayout products={filteredProducts} />
  }

  /*
    OXYGEN
  */

  if (category === "oxygen-concentrator") {
    return <OxygenLayout products={filteredProducts} />
  }

  /*
    NASAL MASK
  */

  if (category === "nasal-mask") {
    return <NasalMaskLayout products={filteredProducts} />
  }

  /*
    FULL FACE MASK
  */

  if (category === "full-face-mask") {
    return <FullFaceMaskLayout products={filteredProducts} />
  }

  /*
    NASAL PILLOW
  */

  if (category === "nasal-pillow-mask") {
    return <NasalPillowLayout products={filteredProducts} />
  }

  /*
    HUMIDIFIERS
  */

  if (category === "humidifier-bottle") {
    return <HumidifierLayout products={filteredProducts} />
  }

  /*
    TUBES
  */

 if (category === "tubes-and-connectors") {
  return <TubeLayout products={filteredProducts} />
}

  /*
    FILTERS
  */

  if (category === "filters-cleaners") {
    return <FilterLayout products={filteredProducts} />
  }

  /*
    FRAMES & HEADGEAR
  */

  if (category === "mask-headgear") {
    return <FramesHeadgearLayout products={filteredProducts} />
  }

  /*
    MASK CUSHIONS
  */

  if (category === "mask-cushion") {
    return <MaskCushionLayout products={filteredProducts} />
  }

  /*
    MASK PAD & CLIPS
  */

  if (category === "mask-clips") {
    return <MaskPadClipsLayout products={filteredProducts} />
  }

  /*
    CPAP RENTAL
  */

  if (category === "rental") {
    return <CPAPRentalLayout products={filteredProducts} />
  }

  /*
    FALLBACK
  */

  return (
    <CPAPLayout
      products={filteredProducts}
    />
  )
}