import fs from "node:fs";
import path from "node:path";

/**
 * Looks for an optional hero photo in /public at build time.
 * If one exists, the hero switches to a split layout (text left, photo right).
 * Delete the file to go back to the centred, typography-only hero.
 */
const CANDIDATES = ["hero.jpg", "hero.jpeg", "hero.webp", "hero.png"];

export function getHeroImage(): string | null {
  for (const file of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return `/${file}`;
  }
  return null;
}
