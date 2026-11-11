import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.28em] text-accent uppercase">
      <span aria-hidden className="h-px w-8 bg-accent/60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  center = false,
}: {
  kicker: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`reveal mb-14 sm:mb-20 ${center ? "mx-auto max-w-2xl text-center [&>p:first-child]:justify-center" : "max-w-2xl"}`}
    >
      <Kicker>{kicker}</Kicker>
      <h2 className="font-serif text-4xl leading-[1.08] font-light tracking-tight text-balance sm:text-5xl md:text-[3.5rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

/** Primary / secondary link-buttons */
export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent"
      : "border border-ink/20 text-ink hover:border-ink";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
