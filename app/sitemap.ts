import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "fr-CA": `${siteUrl}/`, "en-CA": `${siteUrl}/en/` };
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${siteUrl}/en/`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
