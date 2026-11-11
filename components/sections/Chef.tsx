import type { Dictionary } from "@/content/translations";
import { Container, Kicker } from "@/components/ui";

/**
 * To add a chef photo: put it in /public (e.g. public/chef.jpg) and replace the
 * placeholder <div> below with:
 *   <img src="/chef.jpg" alt={t.name} className="aspect-[4/5] w-full object-cover" />
 */
export default function Chef({ t }: { t: Dictionary["chefs"] }) {
  return (
    <section id="chef" className="border-t border-line py-24 sm:py-36">
      <Container className="grid items-center gap-14 md:grid-cols-[5fr_6fr] md:gap-20">
        <div className="reveal relative isolate">
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center border border-line bg-sand">
            <span className="font-serif text-8xl font-light text-ink/15 italic">CV</span>
            <span className="mt-4 text-[0.65rem] tracking-[0.3em] text-muted uppercase">
              {t.photoPlaceholder}
            </span>
          </div>
          <div
            aria-hidden
            className="absolute -right-3 -bottom-3 -z-10 h-full w-full border border-accent/40 sm:-right-5 sm:-bottom-5"
          />
        </div>

        <div className="reveal [transition-delay:150ms]">
          <Kicker>{t.kicker}</Kicker>
          <h2 className="font-serif text-4xl leading-[1.08] font-light sm:text-5xl md:text-[3.5rem]">
            {t.title}
          </h2>
          <p className="mt-8 font-serif text-2xl">{t.name}</p>
          <p className="mt-1 text-[0.7rem] tracking-[0.25em] text-accent uppercase">{t.role}</p>
          <div className="mt-8 space-y-5 leading-relaxed text-muted sm:text-lg">
            {t.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {t.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-4xl font-light lining-nums sm:text-5xl">{s.value}</dd>
                <dd className="mt-2 text-[0.65rem] leading-snug tracking-[0.18em] text-muted uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
