import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

 async redirects() {
  return [
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

    {
      source: "/category/bipap-machine",
      destination: "/products/bipap-machine",
      permanent: true,
    },
  ];
},
};

export default nextConfig;