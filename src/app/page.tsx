import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { featuredServices, homeAbout, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-circuit.jpg"
            alt=""
            fill
            priority
            className="hero-media object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-site flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.35em] text-yellow">
            Elektronik Alarm
          </p>
          <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Dogovorite termin
            <span className="block">već danas!</span>
          </h1>
          <p className="animate-fade-up mt-5 max-w-xl text-lg text-white/75" style={{ animationDelay: "120ms" }}>
            Dijagnostika, popravak i ugradnja auto elektronike u Zagrebu — pouzdano, stručno i s
            opremom koja prati moderne vozila.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center bg-yellow px-7 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-yellow-bright"
            >
              Kontaktirajte nas
            </Link>
            <Link
              href="/usluge"
              className="inline-flex min-h-12 items-center border border-white/35 px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-yellow hover:text-yellow"
            >
              Pogledajte usluge
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Usluge</p>
              <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
                Što radimo
              </h2>
              <p className="mt-3 text-muted">
                Specijalizirani zahvati na elektroničkim sustavima osobnih i gospodarskih vozila.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <article className="service-tile h-full border border-ink/10 bg-white/70 p-6">
                  <div className="mb-4 h-1 w-10 bg-yellow" />
                  <h3 className="font-display text-2xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Link
              href="/usluge"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-8"
            >
              Sve usluge
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/service-multimedia.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-site px-4 sm:px-6">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                Zašto mi
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
                Zašto odabrati Elektronik Alarm?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{homeAbout}</p>
              <Link
                href="/o-nama"
                className="mt-8 inline-flex min-h-12 items-center bg-ink px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-ink/90"
              >
                O nama
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ispunite obrazac i odgovorit ćemo vam u najkraćem roku.
              </h2>
              <p className="mt-3 text-white/65">
                Ili nas nazovite na{" "}
                <a href={site.phoneHref} className="text-yellow hover:underline">
                  {site.phone}
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 shrink-0 items-center bg-yellow px-7 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-yellow-bright"
            >
              Pošaljite upit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
