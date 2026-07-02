import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // ✅ WWW → Non-WWW
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

      // ✅ Old Author URLs
      {
        source: "/author/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // ✅ Old Tag URLs
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // ✅ Old Category URLs → New Category Pages
      {
        source: "/category/bipap-machine",
        destination: "/products/bipap-machine",
        permanent: true,
      },
      {
        source: "/category/filters-cleaners",
        destination: "/products/filters-cleaners",
        permanent: true,
      },
      {
        source: "/category/full-face-mask",
        destination: "/products/full-face-mask",
        permanent: true,
      },
      {
        source: "/category/humidifier-bottle",
        destination: "/products/humidifier-bottle",
        permanent: true,
      },
      {
        source: "/category/mask-clips",
        destination: "/products/mask-clips",
        permanent: true,
      },
      {
        source: "/category/mask-cushion",
        destination: "/products/mask-cushion",
        permanent: true,
      },
      {
        source: "/category/mask-headgear",
        destination: "/products/mask-headgear",
        permanent: true,
      },
      {
        source: "/category/nasal-mask",
        destination: "/products/nasal-mask",
        permanent: true,
      },
      {
        source: "/category/nasal-pillow-mask",
        destination: "/products/nasal-pillow-mask",
        permanent: true,
      },
      {
        source: "/category/tubes-and-connectors",
        destination: "/products/tubes-and-connectors",
        permanent: true,
      },
      {
        source: "/category/rental",
        destination: "/products/rental",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;