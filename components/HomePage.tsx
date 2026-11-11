import type { Lang } from "@/content/site";
import { gallery, showGalleryPlaceholders } from "@/content/gallery";
import { getDictionary } from "@/lib/i18n";
import { getHeroImage } from "@/lib/heroImage";
import Header from "./Header";
import RevealObserver from "./RevealObserver";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Menus from "./sections/Menus";
import Occasions from "./sections/Occasions";
import Services from "./sections/Services";
import Chef from "./sections/Chef";
import Gallery from "./sections/Gallery";
import Faq from "./sections/Faq";
import Booking from "./sections/Booking";
import Footer from "./sections/Footer";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const showGallery = gallery.length > 0 || showGalleryPlaceholders;

  return (
    <>
      <Header lang={lang} t={t.nav} showGallery={showGallery} />
      <main>
        <Hero t={t.hero} image={getHeroImage()} />
        <HowItWorks t={t.how} />
        <Menus lang={lang} t={t.menus} />
        <Occasions t={t.occasions} />
        <Services t={t.services} />
        <Chef t={t.chefs} />
        {showGallery && <Gallery lang={lang} t={t.gallery} />}
        <Faq t={t.faq} />
        <Booking lang={lang} t={t.booking} />
      </main>
      <Footer t={t.footer} />
      <RevealObserver />
    </>
  );
}
