import type { ReactNode } from "react";
import RootShell from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";

export { viewport } from "@/lib/seo";
export const metadata = buildMetadata("fr");

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
