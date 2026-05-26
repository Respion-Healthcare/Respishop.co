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

      // OLD AUTHOR/TAG URLS
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