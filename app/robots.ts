import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: [
          "/",
          "/wp-admin/admin-ajax.php",
        ],

        disallow: [
          "/wp-admin/",

          "/cart/",
          "/checkout/",
          "/my-account/",
          "/search/",
          "/wishlist/",

          "/*/feed/",

          "/*?add-to-cart=",
          "/*?add-to-wishlist=",
          "/*?orderby=",
          "/*?min_price=",
          "/*?max_price=",
          "/*?wc-ajax=",
          "/*?page_id=",
        ],
      },
    ],

    sitemap: "https://respishop.in/sitemap.xml",
  };
}