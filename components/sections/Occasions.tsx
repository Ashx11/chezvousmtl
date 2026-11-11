import type { Dictionary } from "@/content/translations";
import { Container, SectionHeading } from "@/components/ui";

export default function Occasions({ t }: { t: Dictionary["occasions"] }) {
  return (
    <section id="occasions" className="bg-sand py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={t.kicker} title={t.title} />
        <ul className="border-t border-ink/15">
          {t.items.map((item, i) => (
            <li
              key={item.title}
              className="reveal grid gap-2 border-b border-ink/15 py-7 sm:grid-cols-[4rem_1fr_1fr] sm:items-baseline sm:gap-8 sm:py-9"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="hidden font-serif text-lg text-accent italic sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-3xl leading-tight font-light sm:text-4xl">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
