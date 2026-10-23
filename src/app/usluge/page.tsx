import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { allServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Popravak instrument table, parking senzori, audio, ECU, airbag, dijagnostika i više — Elektronik Alarm Zagreb.",
};

export default function UslugePage() {
  return (
    <>
      <PageHero
        title="Usluge"
        subtitle="Ugradnja, dijagnostika i popravak elektroničkih sustava vozila."
        image="/images/hero-circuit.jpg"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="grid gap-3">
            {allServices.map((service, i) => (
              <Reveal key={service.title} delay={Math.min(i * 40, 280)}>
                <article className="service-tile border border-ink/10 bg-soft/60 px-5 py-6 sm:px-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                    <h2 className="min-w-[12rem] font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-ink/10 pt-10">
            <p className="font-display text-2xl font-semibold text-ink">
              Trebate savjet ili termin?
            </p>
            <Link
              href="/kontakt"
              className="mt-4 inline-flex min-h-12 items-center bg-yellow px-7 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-yellow-bright"
            >
              Kontakt
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
