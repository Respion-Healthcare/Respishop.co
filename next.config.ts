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
        source: "/product/s9-airsense-filters-pack-of-6/:path*",
        destination: "/products/filters-cleaners/airsense-filters-cleaners",
        permanent: true,
      },

      {
        source: "/product/resmed-airfit-n20-cushion/:path*",
        destination: "/products/mask-cushion",
        permanent: true,
      },

      {
        source: "/product/resmed-airmini-f30-setup-pack-no-mask/:path*",
        destination: "/products/mask-headgear",
        permanent: true,
      },

      {
        source: "/product/humidair-cleanable-tub/:path*",
        destination: "/products/humidifier-bottle",
        permanent: true,
      },

      // OLD CATEGORY URLS
      {
        source: "/product-category/rental/cpap-bi-level-rental/:path*",
        destination: "/products/rental",
        permanent: true,
      },

      {
        source: "/product-category/sleep-apnea-machines/bipap-machines/:path*",
        destination: "/products/bipap-machine",
        permanent: true,
      },

      {
        source: "/product-category/accessories/humidifiers-bottles/:path*",
        destination: "/products/humidifier-bottle",
        permanent: true,
      },

      {
        source: "/product-category/accessories/mask-frame-vents/:path*",
        destination: "/products/tubes-and-connectors",
        permanent: true,
      },

      // OLD AUTHOR/TAG PAGES
      {
        source: "/author/respishop_tech_admin/:path*",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/tag/airfit-f20-review-and-features/:path*",
        destination: "/blog",
        permanent: true,
      },

      // OLD BLOG URL
      {
        source: "/resmed-airstart-10-apap-features-guide/:path*",
        destination: "/blog",
        permanent: true,
      },

      // OLD CITY URLS
      {
        source: "/cpap-machine/bhubaneswar/:path*",
        destination: "/",
        permanent: true,
      },

      {
        source: "/cpap-machine/patna/:path*",
        destination: "/",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;