# Elektronik Alarm

Modern marketing site for **Elektronik Alarm** (Zagreb) — Next.js App Router, Croatian copy only.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Brand palette: `#1A1A1A` / `#FDDA1E` / `#F2E205`
- Assets sourced from the live WordPress media library

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start
```

## Pages

| Route | Page |
|-------|------|
| `/` | Početna |
| `/usluge` | Usluge |
| `/galerija` | Galerija (Prije/Poslije) |
| `/o-nama` | O nama |
| `/kontakt` | Kontakt + forma |

## WooCommerce

Live site has Trgovina / Košarica pages, but **no published products**. The shop path is intentionally omitted.

## Contact form

`POST /api/contact` validates submissions and returns success/error. Wire SMTP / Resend / Formspree in `src/app/api/contact/route.ts` for production email delivery.
