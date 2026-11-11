import type { Dictionary } from "@/content/translations";
import { Container, SectionHeading } from "@/components/ui";

export default function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={t.kicker} title={t.title} />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              className="reveal flex flex-col bg-paper p-8 sm:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="font-serif text-[1.75rem] leading-tight">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{item.text}</p>
              <p className="mt-auto pt-8 text-[0.68rem] tracking-[0.22em] text-accent uppercase">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
