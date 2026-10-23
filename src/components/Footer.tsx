import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/logo-figma.png"
              alt={site.name}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-lg font-bold leading-tight">
              Elektronik
              <span className="mt-0.5 block text-xs font-semibold tracking-[0.28em] text-yellow">
                ALARM
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Specijalizirani centar za dijagnostiku, popravak i ugradnju elektroničkih sustava u
            vozilima — Zagreb.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Adresa
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Kontakt
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-yellow">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-yellow">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Radno vrijeme
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {site.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-4">
                <span>{h.label}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Podnožje">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-yellow">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
