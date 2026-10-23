import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-card">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy md:text-6xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-8 text-muted">{children}</div>
      </div>
    </header>
  );
}
