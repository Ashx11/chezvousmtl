import type { Dictionary } from "@/content/translations";
import { site } from "@/content/site";
import { Container } from "@/components/ui";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  const year = new Date().getFullYear();
  const linkCls = "transition-colors hover:text-paper";
  return (
    <footer className="bg-ink pt-20 pb-10 text-paper/60 sm:pt-28">
      <Container>
        <div className="grid gap-12 border-b border-paper/10 pb-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-6xl leading-none font-light text-paper sm:text-7xl">
              Chez Vous
            </p>
            <p className="mt-4 text-[0.7rem] tracking-[0.25em] uppercase">{t.tagline}</p>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] tracking-[0.3em] text-paper/40 uppercase">
              {t.contact}
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${site.email}`} className={linkCls}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneE164}`} className={linkCls}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.phoneE164.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  {t.whatsapp} ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] tracking-[0.3em] text-paper/40 uppercase">
              {t.follow}
            </p>
            <a
              href={`https://www.instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Instagram @{site.instagram} ↗
            </a>
          </div>
        </div>

        <p className="pt-8 text-xs tracking-wide">
          © {year} {site.name}. {t.rights}
        </p>
      </Container>
    </footer>
  );
}
