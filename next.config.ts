import type { NextConfig } from "next";

/**
 * Static export: `npm run build` writes a plain HTML/CSS/JS site to /out,
 * which can be hosted anywhere (GitHub Pages, Vercel, Netlify…).
 *
 * NEXT_PUBLIC_BASE_PATH is the sub-folder the site lives under, e.g.
 * "/chezvousmtl" for https://ashx11.github.io/chezvousmtl. Leave it empty for
 * a custom domain or Vercel. The GitHub Pages workflow sets it automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
