import { translations } from "@/content/translations";
import type { Lang } from "@/content/site";

export const getDictionary = (lang: Lang) => translations[lang];

/** Home URL for each language. French is the default at "/". */
export const homePath = (lang: Lang) => (lang === "fr" ? "/" : "/en/");

export const formatPrice = (template: string, price: number) =>
  template.replace("{price}", String(price));

/** Sub-folder the site is served from ("" on a custom domain). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a /public file or page path with the base path (for plain <a>/<img>). */
export const withBase = (p: string) => `${basePath}${p}`;
