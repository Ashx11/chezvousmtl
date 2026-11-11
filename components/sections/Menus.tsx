import type { Lang } from "@/content/site";
import type { Dictionary } from "@/content/translations";
import { menus } from "@/content/menus";
import { formatPrice } from "@/lib/i18n";
import { Container, SectionHeading } from "@/components/ui";

export default function Menus({ lang, t }: { lang: Lang; t: Dictionary["menus"] }) {
  return (
    <section id="menus" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={t.kicker} title={t.title} intro={t.intro} />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {menus.map((menu, i) => {
            const m = menu[lang];
            return (
              <article
                key={menu.id}
                className="reveal group flex flex-col border border-line bg-paper p-8 transition-colors duration-500 hover:border-ink/30 sm:p-12"
                style={{ transitionDelay: `${(i % 2) * 120}ms` }}
              >
                <p className="text-[0.65rem] tracking-[0.3em] text-muted uppercase">
                  {t.kicker} · {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-none font-light sm:text-[2.75rem]">
                  {m.name}
                </h3>
                <p className="mt-5 leading-relaxed text-muted">{m.description}</p>

                {m.courses.length > 0 && (
                  <ul className="mt-8 space-y-2.5 border-t border-line pt-7 font-serif text-lg text-ink/85">
                    {m.courses.map((c) => (
                      <li key={c} className="flex items-baseline gap-3">
                        <span aria-hidden className="text-accent">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-auto pt-10 font-serif text-2xl text-accent italic">
                  {formatPrice(t.from, menu.price)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-16 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl font-serif text-2xl leading-snug italic sm:text-3xl">
            {t.customNote}
          </p>
          <a
            href="#booking"
            className="border-b border-ink/30 pb-1 text-[0.75rem] tracking-[0.2em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {t.cta} →
          </a>
        </div>
      </Container>
    </section>
  );
}
