import Image from "next/image";
import type { Dictionary } from "@/content/translations";
import { ButtonLink } from "@/components/ui";
import PlateIllustration from "@/components/PlateIllustration";
import { withBase } from "@/lib/i18n";

/**
 * Two layouts:
 *  - no image  → centred, typography-only hero
 *  - image     → split: text left, photo right (add /public/hero.jpg to enable)
 */
export default function Hero({
  t,
  image,
}: {
  t: Dictionary["hero"];
  image: string | null;
}) {
  const split = Boolean(image);
  const align = split ? "items-start text-left" : "items-center text-center";

  const text = (
    <div className={`flex flex-col ${align}`}>
      <p className="reveal text-[0.7rem] font-medium tracking-[0.32em] text-accent uppercase">
        {t.eyebrow}
      </p>

      <h1
        className={`reveal mt-8 font-serif leading-[0.9] font-light tracking-[-0.02em] [transition-delay:120ms] ${
          split
            ? "text-[5rem] sm:text-[7rem] lg:text-[8.5rem]"
            : "text-[5.25rem] sm:text-[8rem] md:text-[10rem]"
        }`}
      >
        {t.title}
      </h1>

      <PlateIllustration className="reveal my-10 [transition-delay:260ms] [transition-duration:1.4s] sm:my-12" />

      <p className="reveal max-w-md font-serif text-xl leading-snug text-balance text-ink/80 italic [transition-delay:380ms] sm:text-2xl">
        {t.tagline}
      </p>

      <div
        className={`reveal mt-12 flex flex-col gap-4 [transition-delay:500ms] sm:flex-row ${
          split ? "items-start" : "items-center"
        }`}
      >
        <ButtonLink href="#booking">{t.cta}</ButtonLink>
        <ButtonLink href="#menus" variant="ghost">
          {t.secondary}
        </ButtonLink>
      </div>
    </div>
  );

  return (
    <section
      id="top"
      className={`relative min-h-[100svh] ${
        split
          ? "mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-28 pb-24 sm:px-10 lg:grid-cols-[6fr_5fr] lg:gap-16"
          : "flex flex-col items-center justify-center px-6 pt-20 pb-24"
      }`}
    >
      {text}

      {image && (
        <div className="reveal relative isolate mx-auto w-full max-w-md [transition-delay:300ms] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src={withBase(image)}
              alt={t.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -right-3 -bottom-3 -z-10 h-full w-full border border-accent/40 sm:-right-5 sm:-bottom-5"
          />
        </div>
      )}

      <p
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.3em] text-muted/80 uppercase"
      >
        45.50° N · 73.57° W
      </p>
    </section>
  );
}
