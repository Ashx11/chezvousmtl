"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import type { Lang } from "@/content/site";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/translations";
import { Container, Kicker } from "@/components/ui";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink/35 transition-colors focus:border-accent focus:ring-0 focus:outline-none";

function Field({
  label,
  htmlFor,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block text-[0.68rem] font-medium tracking-[0.2em] text-muted uppercase"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ id, options, placeholder }: { id: string; options: string[]; placeholder: string }) {
  return (
    <div className="relative">
      <select id={id} name={id} defaultValue="" className={`${inputCls} appearance-none pr-8`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-xs text-muted">
        ▾
      </span>
    </div>
  );
}

export default function Booking({ lang, t }: { lang: Lang; t: Dictionary["booking"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const f = t.fields;
  // Set on the client only, so the static HTML never has a stale date
  const [today, setToday] = useState<string>();
  useEffect(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    setToday(d.toISOString().split("T")[0]);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) {
      setErrorMsg(t.notConfigured);
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setErrorMsg(t.error);
      setStatus("error");
    }
  }

  return (
    <section id="booking" className="bg-sand py-24 sm:py-36">
      <Container className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="reveal">
          <Kicker>{t.kicker}</Kicker>
          <h2 className="font-serif text-4xl leading-[1.08] font-light sm:text-5xl md:text-[3.5rem]">
            {t.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted sm:text-lg">{t.intro}</p>
          <div className="mt-10 space-y-1.5 border-t border-ink/15 pt-8 font-serif text-xl">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phoneE164}`} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="reveal [transition-delay:150ms]">
          {status === "success" ? (
            <div
              role="status"
              className="flex min-h-[24rem] flex-col items-center justify-center border border-ink/15 bg-paper px-8 py-16 text-center"
            >
              <span aria-hidden className="font-serif text-5xl text-accent italic">
                ✓
              </span>
              <p className="mt-6 font-serif text-4xl font-light sm:text-5xl">{t.successTitle}</p>
              <p className="mt-4 text-lg text-muted">{t.successText}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-x-8 gap-y-9 border border-ink/10 bg-paper p-7 sm:grid-cols-2 sm:p-12"
            >
              {/* Formspree extras: email subject, language, and a spam honeypot */}
              <input type="hidden" name="_subject" value="Nouvelle demande — Chez Vous MTL" />
              <input type="hidden" name="language" value={lang.toUpperCase()} />
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <Field label={f.name} htmlFor="name" required>
                <input id="name" name="name" required autoComplete="name" className={inputCls} />
              </Field>
              <Field label={f.email} htmlFor="email" required>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
              </Field>
              <Field label={f.phone} htmlFor="phone">
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
              </Field>
              <Field label={f.date} htmlFor="date" required>
                <input id="date" name="date" type="date" required min={today} className={inputCls} />
              </Field>
              <Field label={f.guests} htmlFor="guests" required>
                <input id="guests" name="guests" type="number" min={1} max={200} required inputMode="numeric" className={inputCls} />
              </Field>
              <Field label={f.occasion} htmlFor="occasion">
                <Select id="occasion" options={t.occasionOptions} placeholder={f.select} />
              </Field>
              <Field label={f.service} htmlFor="service">
                <Select id="service" options={t.serviceOptions} placeholder={f.select} />
              </Field>
              <Field label={f.budget} htmlFor="budget">
                <Select id="budget" options={t.budgetOptions} placeholder={f.select} />
              </Field>
              <Field label={f.dietary} htmlFor="dietary" className="sm:col-span-2">
                <input id="dietary" name="dietary" placeholder={f.dietaryPlaceholder} className={inputCls} />
              </Field>
              <Field label={f.message} htmlFor="message" className="sm:col-span-2">
                <textarea id="message" name="message" rows={4} placeholder={f.messagePlaceholder} className={`${inputCls} resize-y`} />
              </Field>

              <div className="flex flex-col-reverse items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  <span className="text-accent">*</span> {t.required}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-ink px-10 py-4 text-[0.78rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors duration-300 hover:bg-accent disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? t.sending : t.submit}
                </button>
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-accent sm:col-span-2">
                  {errorMsg}{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
