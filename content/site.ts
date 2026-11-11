/**
 * Business details used across the site (footer, SEO, structured data).
 * Edit these values — they are not translated.
 */
export const site = {
  name: "Chez Vous MTL",
  instagram: "chezvousmtl", // without the @
  email: "bonjour@chezvousmtl.com", // TODO: replace with your real email
  phoneDisplay: "+1 (514) 555-0123", // TODO: replace with your real number
  phoneE164: "+15145550123", // same number, digits only with +country code (used for tel: and WhatsApp links)
  city: "Montréal",
  region: "QC",
  country: "CA",
};

export type Lang = "fr" | "en";

/** Public site URL, set NEXT_PUBLIC_SITE_URL in Vercel. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://chezvousmtl.com"
).replace(/\/$/, "");
