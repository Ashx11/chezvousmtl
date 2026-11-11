import type { Dictionary } from "@/content/translations";
import { Container, SectionHeading } from "@/components/ui";

export default function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="border-t border-line py-24 sm:py-36">
      <Container className="grid gap-4 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <SectionHeading kicker={t.kicker} title={t.title} />
        <div className="reveal border-t border-line">
          {t.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-6 font-serif text-xl leading-snug transition-colors hover:text-accent sm:text-2xl">
                {item.q}
                <span
                  aria-hidden
                  className="faq-icon shrink-0 font-sans text-2xl leading-none font-extralight text-accent"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
