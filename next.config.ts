import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects() {
    return [

      // FORCE HTTPS
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

    ];
  },

};

export default nextConfig;