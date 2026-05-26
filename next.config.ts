import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

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

      // TEST ALL OLD PRODUCT URLS
      {
        source: "/product/:slug*",
        destination: "/",
        permanent: true,
      },

      // TEST ALL OLD CATEGORY URLS
      {
        source: "/product-category/:slug*",
        destination: "/",
        permanent: true,
      },

      // TEST OLD AUTHOR/TAG URLS
      {
        source: "/author/:slug*",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;