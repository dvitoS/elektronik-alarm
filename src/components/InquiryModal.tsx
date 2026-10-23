"use client";

import { useEffect } from "react";
import { ContactForm } from "./ContactForm";

export function InquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-stretch justify-end" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      <button
        type="button"
        className="absolute inset-0 bg-ink/60 animate-fade-in"
        aria-label="Zatvori"
        onClick={onClose}
      />
      <aside className="relative z-10 flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl animate-fade-up">
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Upit</p>
            <h2 id="inquiry-title" className="mt-1 font-display text-2xl font-bold text-ink">
              Ispunite obrazac
            </h2>
            <p className="mt-2 text-sm text-muted">
              Odgovorit ćemo vam u najkraćem roku.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-ink hover:bg-soft"
            aria-label="Zatvori obrazac"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6">
          <ContactForm mode="inquiry" />
        </div>
      </aside>
    </div>
  );
}
