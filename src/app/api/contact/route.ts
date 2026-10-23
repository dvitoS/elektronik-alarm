import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const mode = String(body.mode ?? "contact");

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Molimo ispunite sva obavezna polja." },
        { status: 400 },
      );
    }

    if (mode === "contact") {
      const email = String(body.email ?? "").trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { ok: false, error: "Unesite valjanu e-mail adresu." },
          { status: 400 },
        );
      }
    }

    // Validated successfully. Wire SMTP / Resend / Formspree here for production delivery.
    console.info("[contact]", {
      mode,
      name,
      phone,
      email: body.email,
      carMake: body.carMake,
      carModel: body.carModel,
      carYear: body.carYear,
      message: message.slice(0, 200),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neočekivana greška." },
      { status: 500 },
    );
  }
}
