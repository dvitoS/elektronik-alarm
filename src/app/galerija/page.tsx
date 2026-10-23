import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { galleryPairs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galerija",
  description: "Galerija popravaka — usporedbe prije i poslije, Elektronik Alarm Zagreb.",
};

export default function GalerijaPage() {
  return (
    <>
      <PageHero
        title="Galerija"
        subtitle="Galerija popravaka — povucite klizač za usporedbu prije i poslije."
        image="/images/auto-service.jpg"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Galerija popravaka
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Primjeri zahvata s oznakama Prije / Poslije, preuzeti s postojeće stranice.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {galleryPairs.map((pair, i) => (
              <Reveal key={pair.title} delay={i * 80}>
                <BeforeAfter {...pair} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
