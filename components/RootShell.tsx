import type { ReactNode } from "react";
import type { Lang } from "@/content/site";
import { serif, sans } from "@/lib/fonts";
import { jsonLd } from "@/lib/seo";
import "@/app/globals.css";

/** Shared <html>/<body> wrapper for the French and English root layouts. */
export default function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html
      lang={lang === "fr" ? "fr-CA" : "en-CA"}
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables fade-in animations only when JavaScript runs */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
        />
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
