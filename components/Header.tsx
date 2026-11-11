"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/content/site";
import type { Dictionary } from "@/content/translations";
import { homePath, withBase } from "@/lib/i18n";

export default function Header({
  lang,
  t,
  showGallery,
}: {
  lang: Lang;
  t: Dictionary["nav"];
  showGallery: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLang: Lang = lang === "fr" ? "en" : "fr";
  const [switchHref, setSwitchHref] = useState(withBase(homePath(otherLang)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the current section when switching language
  useEffect(() => {
    const update = () => setSwitchHref(withBase(homePath(otherLang)) + window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [otherLang]);

  const links = [
    { href: "#how", label: t.how },
    { href: "#menus", label: t.menus },
    { href: "#occasions", label: t.occasions },
    { href: "#services", label: t.services },
    { href: "#chef", label: t.chefs },
    ...(showGallery ? [{ href: "#gallery", label: t.gallery }] : []),
    { href: "#faq", label: t.faq },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-10">
        <a
          href="#top"
          className="font-serif text-2xl leading-none tracking-tight"
          onClick={() => setOpen(false)}
        >
          Chez Vous
          <span className="ml-1.5 align-super font-sans text-[0.55rem] tracking-[0.25em] text-accent">
            MTL
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] tracking-[0.16em] text-ink/70 uppercase transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={switchHref}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={t.switchTo}
            className="px-2 py-2 text-[0.72rem] font-medium tracking-[0.16em] uppercase"
          >
            <span className={lang === "fr" ? "text-ink" : "text-ink/40 hover:text-ink"}>FR</span>
            <span className="mx-1.5 text-ink/25">/</span>
            <span className={lang === "en" ? "text-ink" : "text-ink/40 hover:text-ink"}>EN</span>
          </a>
          <a
            href="#booking"
            className="hidden bg-ink px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors hover:bg-accent sm:inline-block"
          >
            {t.book}
          </a>
          <button
            type="button"
            className="-mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav: expands inline under the header */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line/80 lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-6 py-4 sm:px-10">
          {[...links, { href: "#booking", label: t.book }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3.5 font-serif text-2xl last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
