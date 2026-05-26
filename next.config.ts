import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [

      // REMOVE WWW
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.respishop.in",
          },
        ],
        destination: "https://respishop.in/:path*",
        permanent: true,
      },

      // OLD PRODUCT URLS
      {
        source: "/product/s9-airsense-filters-pack-of-6",
        destination: "/products/filters-cleaners/airsense-filters-cleaners",
        permanent: true,
      },

      {
        source: "/product/resmed-airfit-n20-cushion",
        destination: "/products/mask-cushion",
        permanent: true,
      },

      {
        source: "/product/resmed-airmini-f30-setup-pack-no-mask",
        destination: "/products/mask-headgear",
        permanent: true,
      },

      {
        source: "/product/humidair-cleanable-tub",
        destination: "/products/humidifier-bottle",
        permanent: true,
      },

      // OLD CATEGORY URLS
      {
        source: "/product-category/rental/cpap-bi-level-rental",
        destination: "/products/rental",
        permanent: true,
      },

      {
        source: "/product-category/sleep-apnea-machines/bipap-machines",
        destination: "/products/bipap-machine",
        permanent: true,
      },

      {
        source: "/product-category/accessories/humidifiers-bottles",
        destination: "/products/humidifier-bottle",
        permanent: true,
      },

      {
        source: "/product-category/accessories/mask-frame-vents",
        destination: "/products/tubes-and-connectors",
        permanent: true,
      },

      // OLD AUTHOR/TAG PAGES
      {
        source: "/author/respishop_tech_admin",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/tag/airfit-f20-review-and-features",
        destination: "/blog",
        permanent: true,
      },

      // OLD BLOG URL
      {
        source: "/resmed-airstart-10-apap-features-guide",
        destination: "/blog",
        permanent: true,
      },

      // OLD CITY URLS
      {
        source: "/cpap-machine/bhubaneswar",
        destination: "/",
        permanent: true,
      },

      {
        source: "/cpap-machine/patna",
        destination: "/",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;