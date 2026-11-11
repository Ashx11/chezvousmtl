import type { Dictionary } from "@/content/translations";
import { Container, SectionHeading } from "@/components/ui";

export default function HowItWorks({ t }: { t: Dictionary["how"] }) {
  return (
    <section id="how" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={t.kicker} title={t.title} />
        <ol className="grid gap-14 md:grid-cols-3 md:gap-12">
          {t.steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-serif text-5xl font-light text-accent italic">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-6 h-px w-full bg-line" />
              <h3 className="mt-6 font-serif text-[1.7rem] leading-tight">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
