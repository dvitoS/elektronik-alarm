"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/content";
import { InquiryModal } from "./InquiryModal";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <div className="border-b border-ink/10 bg-warm text-sm text-ink">
        <div className="mx-auto flex max-w-site flex-col gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
          <p>
            <span className="text-muted">Radno vrijeme:</span>{" "}
            <span className="font-medium">{site.hoursShort}</span>
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href={site.phoneHref} className="hover:text-ink/70">
              Tel: {site.phone}
            </a>
            <a href={site.emailHref} className="hover:text-ink/70">
              Email: {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-figma.png"
              alt={site.name}
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="font-display text-lg font-bold leading-tight tracking-tight text-ink sm:text-xl">
              Elektronik
              <span className="block text-sm font-semibold tracking-[0.28em] text-ink/80 sm:text-base">
                ALARM
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-ink underline decoration-yellow decoration-2 underline-offset-8"
                      : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="ml-3 bg-yellow px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow-bright"
            >
              Obrazac za upite
            </button>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Izbornik</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-ink/10 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-site flex-col px-4 py-3 sm:px-6" aria-label="Mobilna navigacija">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-ink/5 py-3 text-base font-medium ${
                    pathname === item.href ? "text-ink" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setInquiryOpen(true);
                }}
                className="mt-4 bg-yellow py-3 text-sm font-semibold text-ink"
              >
                Obrazac za upite
              </button>
            </nav>
          </div>
        )}
      </header>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
