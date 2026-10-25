import type { ReactNode } from "react";
import { SiteIcon, type SiteIconName } from "@/components/SiteIcon";

export function PageIntro({
  kicker,
  title,
  icon,
  children,
  className = "",
  titleClassName = "text-navy",
}: {
  kicker: string;
  title: string;
  icon: SiteIconName;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <header className={`border-b border-line bg-card ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          <SiteIcon name={icon} className="h-4 w-4" />
          {kicker}
        </p>
        <h1 className={`mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl ${titleClassName}`}>
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-8 text-muted">{children}</div>
      </div>
    </header>
  );
}
