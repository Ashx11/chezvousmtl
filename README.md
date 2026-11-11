# Chez Vous MTL

Bilingual (French / English) one-page website for **Chez Vous MTL**, a private chef service in Montréal.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is static, and it deploys free on Vercel.

- French (default): `/`
- English: `/en`

---

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Changes appear as soon as you save a file.

---

## Where to edit things

| What you want to change | File |
| --- | --- |
| **Any text on the site** (both languages) | `content/translations.ts` |
| **Menus** (names, descriptions, dishes, prices) | `content/menus.ts` |
| **Email, phone/WhatsApp, Instagram** | `content/site.ts` |
| **Gallery photos** | `content/gallery.ts` + `public/gallery/` |
| **Hero photo** (optional split layout) | add `public/hero.jpg` |
| **Colours, paper grain strength** | `app/globals.css` (top of the file) |
| **Favicon** | `app/icon.svg` |
| **Social share image** | `app/og.png/route.tsx` |

### Text (`content/translations.ts`)

All wording lives in this one file. The `fr` block comes first and the `en` block second, with the same structure in each. Change the words inside the quotes and leave the rest alone.

- Lists such as FAQ questions, occasions or form dropdown options can be lengthened or shortened. Make the same change in **both** languages.
- The SEO title and description that Google shows are in `meta`.
- The chef's name and bio are in `chefs`. **Replace `[Nom du chef]` / `[Chef's name]`.**

### Menus (`content/menus.ts`)

Each menu has the following fields:

```ts
{
  id: "bistro",          // any unique word
  price: 95,             // "from $95 / person", a number with no $ sign
  fr: { name: "...", description: "...", courses: ["...", "..."] },
  en: { name: "...", description: "...", courses: ["...", "..."] },
}
```

To add, remove or reorder menus, edit the list. Three or four menus look best. Use `courses: []` to hide the dish list on a card.

### Contact details (`content/site.ts`)

⚠️ The email and phone number are **placeholders**. Replace them before going live. `phoneE164` is the same number written as `+15145550123`. The phone and WhatsApp links use it.

### Gallery

The gallery section stays **hidden** until you add photos:

1. Put the images in `public/gallery/`, for example `public/gallery/dinner-1.jpg`. JPG or WebP about 1600px wide works well.
2. List them in `content/gallery.ts`:
   ```ts
   export const gallery = [
     { src: "/gallery/dinner-1.jpg", alt: { fr: "Table dressée", en: "Set table" } },
   ];
   ```

The section and its menu link then appear on their own. Six photos, or any multiple of 3, gives the cleanest grid. To preview the empty layout first, set `showGalleryPlaceholders = true`.

### Hero photo (optional)

With no photo, the hero is centred and uses only typography. To switch to a **split layout** (text on the left, photo on the right), add a photo at `public/hero.jpg`. `hero.webp` and `hero.png` also work. A portrait (4:5) photo at least 1200px wide looks best. The site checks for the file when it builds, so restart `npm run dev` or redeploy after adding or removing it. Delete the file to go back to the centred layout.

The hero photo's alt text (a description for screen readers and Google) is `hero.imageAlt` in `content/translations.ts`.

### Paper grain

The page has a faint paper texture. Its strength is `--grain-opacity` near the top of `app/globals.css` (default `0.06`). Set it to `0` to turn the texture off.

### Chef photo

Put a photo at `public/chef.jpg`. Then follow the comment at the top of `components/sections/Chef.tsx` to swap out the placeholder frame.

---

## Booking form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) and make a new form.
2. Copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Locally, copy `.env.example` to `.env.local` and paste the endpoint:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
4. On Vercel, add the same variable (see below).

Each inquiry arrives by email with every field. A `language` field (FR/EN) shows which version of the site the visitor used. A hidden honeypot field blocks basic spam.

If the endpoint is missing, the form shows a message asking visitors to email you directly.

---

## Deploy to GitHub Pages (current setup)

The site is live at **https://ashx11.github.io/chezvousmtl/**.

Every push to `main` rebuilds and publishes it automatically through `.github/workflows/deploy.yml`. You can follow each run in the repo's **Actions** tab.

- **Booking form:** in the repo, go to **Settings → Secrets and variables → Actions → Variables** and add `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. Then rerun the workflow (**Actions → Deploy to GitHub Pages → Run workflow**).
- **Custom domain:** add it under **Settings → Pages → Custom domain**. Then rerun the workflow. The site path and SEO URLs adjust automatically.

`npm run build` produces a fully static site in the `out/` folder, so it can also be hosted on Vercel, Netlify or anywhere else.

## Deploy to Vercel (alternative, free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**. Then pick the repository.
3. Vercel detects Next.js automatically, so keep the default settings.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint
   - `NEXT_PUBLIC_SITE_URL` = your live address, e.g. `https://chezvousmtl.com` (no trailing slash). SEO tags, the share image and the sitemap use it.
5. Click **Deploy**.

After that, every push to GitHub redeploys the site automatically. If you change an environment variable later, redeploy from the Vercel dashboard so the change takes effect.

**Custom domain:** in the Vercel project, open **Settings → Domains** and add `chezvousmtl.com`. Then follow the DNS instructions shown there.

---

## SEO checklist

The site already includes:

- Title, description and keywords in each language ("chef à domicile Montréal" / "private chef Montreal")
- Open Graph and Twitter share tags with a generated share image
- `hreflang` links between the French and English pages, plus canonical URLs
- `sitemap.xml`, `robots.txt` and schema.org `LocalBusiness` structured data

After launch, add the site to [Google Search Console](https://search.google.com/search-console), submit `https://yourdomain/sitemap.xml`, and create a Google Business Profile.

---

## Project structure

```
app/
  (fr)/          French root layout + page  →  /
  (en)/en/       English root layout + page →  /en
  globals.css    colours, fonts, animations
  icon.svg, og.png/ (share image), sitemap.ts, robots.ts
components/
  HomePage.tsx   assembles the sections in order
  Header.tsx     sticky nav + FR/EN toggle
  sections/      one file per section
content/         ← everything you'll normally edit
lib/             i18n + SEO helpers
public/gallery/  your photos
```
