/**
 * GALLERY
 *
 * The gallery section (and its menu link) stays HIDDEN while this list is empty.
 *
 * To add photos:
 *   1. Put your image files in /public/gallery/  (e.g. public/gallery/dinner-1.jpg)
 *   2. Add one entry per photo below, e.g.
 *        { src: "/gallery/dinner-1.jpg", alt: { fr: "Table dressée", en: "Set table" } },
 *
 * Tip: 6 photos (or any multiple of 3) looks best. JPG/WebP around 1600px wide is plenty.
 */
export type GalleryImage = { src: string; alt: { fr: string; en: string } };

export const gallery: GalleryImage[] = [
  // { src: "/gallery/dinner-1.jpg", alt: { fr: "Table dressée", en: "Set table" } },
];

/**
 * Set to true to preview the gallery layout with empty placeholder frames
 * before you have photos. Keep false for the live site.
 */
export const showGalleryPlaceholders = false;
