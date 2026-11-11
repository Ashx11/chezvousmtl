import Image from "next/image";
import type { Lang } from "@/content/site";
import type { Dictionary } from "@/content/translations";
import { gallery } from "@/content/gallery";
import { withBase } from "@/lib/i18n";
import { Container, SectionHeading } from "@/components/ui";

const PLACEHOLDER_COUNT = 6;

export default function Gallery({ lang, t }: { lang: Lang; t: Dictionary["gallery"] }) {
  const hasImages = gallery.length > 0;
  return (
    <section id="gallery" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={t.kicker} title={t.title} />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {hasImages
            ? gallery.map((img, i) => (
                <figure
                  key={img.src}
                  className="reveal relative aspect-[4/5] overflow-hidden bg-sand"
                  style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                >
                  <Image
                    src={withBase(img.src)}
                    alt={img.alt[lang]}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
                  />
                </figure>
              ))
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="reveal flex aspect-[4/5] items-center justify-center border border-line bg-sand"
                  style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                >
                  <span className="text-[0.6rem] tracking-[0.3em] text-muted uppercase">
                    {t.placeholder}
                  </span>
                </div>
              ))}
        </div>
      </Container>
    </section>
  );
}
