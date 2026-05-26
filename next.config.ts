import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects() {
    return [

      // FORCE HTTPS + REMOVE WWW
      {
        source: "/:path*",

        has: [
          {
            type: "host",
            value: "www.respishop.in",
          },
        ],

        destination:
          "https://respishop.in/:path*",

        permanent: true,
      },

      // OLD PRODUCT URL → NEW PRODUCT URL
      {
        source: "/product/s9-airsense-filters-pack-of-6",

        destination:
          "/products/filters-cleaners/airsense-filters-cleaners",

        permanent: true,
      },

    ];
  },

};

export default nextConfig;