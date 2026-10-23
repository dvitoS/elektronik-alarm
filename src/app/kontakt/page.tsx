import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Elektronik Alarm — Nova cesta 73, Zagreb. Tel 01 3821 333.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Javite nam se telefonom, e-mailom ili putem obrasca."
        image="/images/hero-headlights.jpg"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Adresa
                </h2>
                <p className="mt-2 text-lg text-ink">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Kontakt
                </h2>
                <p className="mt-2 text-lg text-ink">
                  <a href={site.phoneHref} className="block hover:underline">
                    tel: {site.phone}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Email
                </h2>
                <p className="mt-2 text-lg text-ink">
                  <a href={site.emailHref} className="hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Radno vrijeme
                </h2>
                <ul className="mt-2 space-y-1 text-lg text-ink">
                  {site.hours.map((h) => (
                    <li key={h.label}>
                      {h.label}: {h.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-ink/10 bg-soft/70 p-6 sm:p-8">
              <h2 className="font-display text-3xl font-bold text-ink">Pošaljite poruku</h2>
              <p className="mt-2 text-sm text-muted">
                Ispunite obrazac i odgovorit ćemo vam u najkraćem roku.
              </p>
              <div className="mt-6">
                <ContactForm mode="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
