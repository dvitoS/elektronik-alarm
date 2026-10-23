"use client";

import { FormEvent, useState } from "react";

type Mode = "contact" | "inquiry";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ mode = "contact" }: { mode?: Mode }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email") || "",
          carMake: data.get("carMake") || "",
          carModel: data.get("carModel") || "",
          carYear: data.get("carYear") || "",
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Greška pri slanju");
      }
      setStatus("success");
      setMessage("Hvala! Vaš upit je zaprimljen. Javit ćemo vam se u najkraćem roku.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Slanje nije uspjelo. Nazovite nas na 01 3821 333 ili pošaljite e-mail.");
    }
  }

  const field =
    "w-full border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-yellow";
  const label = "mb-1.5 block text-sm font-medium text-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor={`${mode}-name`} className={label}>
          Ime
        </label>
        <input
          id={`${mode}-name`}
          name="name"
          required
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`${mode}-phone`} className={label}>
          Tel
        </label>
        <input
          id={`${mode}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </div>
      {mode === "contact" ? (
        <div>
          <label htmlFor={`${mode}-email`} className={label}>
            Email
          </label>
          <input
            id={`${mode}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${mode}-make`} className={label}>
                Marka automobila
              </label>
              <input id={`${mode}-make`} name="carMake" className={field} />
            </div>
            <div>
              <label htmlFor={`${mode}-model`} className={label}>
                Model automobila
              </label>
              <input id={`${mode}-model`} name="carModel" className={field} />
            </div>
          </div>
          <div>
            <label htmlFor={`${mode}-year`} className={label}>
              Godina proizvodnje automobila
            </label>
            <input id={`${mode}-year`} name="carYear" className={field} />
          </div>
        </>
      )}
      <div>
        <label htmlFor={`${mode}-message`} className={label}>
          Poruka
        </label>
        <textarea
          id={`${mode}-message`}
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center bg-yellow px-8 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-yellow-bright disabled:opacity-60"
      >
        {status === "submitting"
          ? "Šaljem…"
          : mode === "contact"
            ? "Pošalji"
            : "Pošalji upit"}
      </button>
      {status === "success" && (
        <p className="border-l-4 border-yellow bg-soft px-4 py-3 text-sm text-ink" role="status">
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-ink" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
