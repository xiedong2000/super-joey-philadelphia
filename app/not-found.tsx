import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
        Missing page
      </p>
      <h1 className="mt-3 font-serif text-5xl text-navy">That page is not on this site.</h1>
      <p className="mt-4 text-lg text-muted">
        The activities, leadership, and join pages are linked from the home page.
      </p>
      <Link href="/" className="mt-6 inline-block font-semibold text-gold-deep">
        Back home
      </Link>
    </div>
  );
}
