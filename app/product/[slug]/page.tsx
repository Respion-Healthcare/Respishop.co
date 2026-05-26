import { redirect } from "next/navigation";

export default async function OldProductRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const redirects: Record<string, string> = {
    "s9-airsense-filters-pack-of-6":
      "/products/filters-cleaners/airsense-filters-cleaners",

    "resmed-airfit-n20-cushion":
      "/products/mask-cushion",

    "resmed-airmini-f30-setup-pack-no-mask":
      "/products/mask-headgear",

    "humidair-cleanable-tub":
      "/products/humidifier-bottle",
  };

  const destination = redirects[slug];

  if (destination) {
    redirect(destination);
  }

  redirect("/");
}