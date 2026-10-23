import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { aboutSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Elektronik Alarm posluje od 1990. — tradicija, iskustvo i povjerenje u auto elektronici, Zagreb.",
};

export default function ONamaPage() {
  return (
    <>
      <PageHero
        title="O nama"
        subtitle="Elektronik Alarm — tradicija, iskustvo i povjerenje."
        image="/images/hero-headlights.jpg"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-10">
            {aboutSections.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <article>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 h-1 w-12 bg-yellow" />
                  <p className="mt-4 text-base leading-relaxed text-muted">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative aspect-[3/4] overflow-hidden bg-soft lg:sticky lg:top-28">
            <Image
              src="/images/workshop-2009.jpg"
              alt="Radionica Elektronik Alarm"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 text-white">
              <p className="font-display text-2xl font-bold">Od 1990.</p>
              <p className="mt-1 text-sm text-white/75">Zagreb · Nova cesta 73</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
