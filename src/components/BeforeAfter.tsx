"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink select-none">
        <Image
          src={after}
          alt={`${title} — poslije`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${title} — prije`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-yellow"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-yellow text-ink shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 6L3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </div>
        <span className="absolute left-3 top-3 bg-ink/80 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
          Prije
        </span>
        <span className="absolute right-3 top-3 bg-yellow px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink">
          Poslije
        </span>
        <input
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba-range absolute inset-0 z-10 h-full w-full opacity-0"
          aria-label={`Usporedba prije i poslije: ${title}`}
        />
      </div>
      <figcaption className="mt-3 font-display text-lg font-semibold text-ink">
        {title}
      </figcaption>
    </figure>
  );
}
