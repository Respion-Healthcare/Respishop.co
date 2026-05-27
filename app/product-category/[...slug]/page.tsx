import { redirect } from "next/navigation";

export default async function OldCategoryRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const path = slug.join("/");

  const redirects: Record<string, string> = {
    "rental/cpap-bi-level-rental":
      "/products/rental",

    "sleep-apnea-machines/bipap-machines":
      "/products/bipap-machine",

    "accessories/humidifiers-bottles":
      "/products/humidifier-bottle",

    "accessories/mask-frame-vents":
      "/products/tubes-and-connectors",
  };

  const destination = redirects[path];

  if (destination) {
    redirect(destination);
  }

  redirect("/");
}