"use client";

import { FormEvent, useState } from "react";
import { joinInterests, site } from "@/lib/content";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-3 py-3 text-base text-ink";

export function JoinForm() {
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const school = String(data.get("school") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !email.includes("@")) {
      setReady(false);
      setError("Add your name and a real email address so the chapter can reply.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      school ? `School: ${school}` : "School: (not given)",
      `Interest: ${interest || "General volunteer"}`,
      "",
      message || "(No extra message)",
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      "Join Super Joey Foundation Philadelphia",
    )}&body=${encodeURIComponent(body)}`;

    setError("");
    setReady(true);
    window.location.href = mailto;
  }

  return (
    <form
      className="rounded-3xl border border-line bg-card p-6 shadow-[0_20px_50px_-36px_rgba(22,48,68,0.7)] md:p-8"
      onSubmit={onSubmit}
    >
      <div className="grid gap-5">
        <label className="block text-sm font-semibold text-navy">
          Name
          <input className={fieldClass} name="name" autoComplete="name" required />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Email
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          School
          <span className="ml-2 font-normal text-muted">Optional</span>
          <input className={fieldClass} name="school" autoComplete="organization" />
        </label>
        <label className="block text-sm font-semibold text-navy">
          How do you want to help?
          <select className={fieldClass} name="interest" defaultValue={joinInterests[3]}>
            {joinInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Message
          <span className="ml-2 font-normal text-muted">Optional</span>
          <textarea className={`${fieldClass} min-h-32`} name="message" />
        </label>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-semibold text-gold-deep" role="alert">
          {error}
        </p>
      ) : null}
      {ready ? (
        <p className="mt-4 text-sm leading-6 text-navy" role="status">
          Your email app should open with this note to {site.email}. If it does
          not, send the same details there yourself.
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ribbon px-5 py-3 text-base font-semibold text-navy hover:bg-gold-deep hover:text-paper sm:w-auto"
      >
        Email the chapter
      </button>
      <p className="mt-4 text-sm leading-6 text-muted">
        This opens an email to {site.email}. The website does not store what you
        type.
      </p>
    </form>
  );
}
