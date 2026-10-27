import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableImage } from "@/components/ExpandableImage";
import { PageIntro } from "@/components/PageIntro";
import { leaders, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Co-presidents of Super Joey Foundation Philadelphia: Patrick Xie and Richard Wan.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageIntro icon="leadership" kicker="Leadership" title="Meet the leadership team.">
        <></>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-2">
          {leaders.map((leader) => (
            <li key={leader.name} className="min-w-0 rounded-3xl border border-line bg-card p-4 sm:p-5 lg:p-7">
              <div className="flex items-center gap-3">
                {leader.photo ? (
                  <ExpandableImage
                    src={leader.photo}
                    alt={leader.photoAlt ?? `${leader.name} portrait`}
                    imageClassName="h-44 w-44 rounded-2xl border border-navy/10 bg-white object-contain p-1 lg:h-56 lg:w-56"
                    buttonClassName="shrink-0 cursor-zoom-in rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ribbon"
                  />
                ) : (
                  <span className="flex h-44 w-44 shrink-0 items-center justify-center rounded-2xl border border-navy/10 bg-navy font-serif text-4xl text-ribbon lg:h-56 lg:w-56 lg:text-5xl">
                    <span className="sr-only">{leader.name}. </span>
                    {leader.initials}
                  </span>
                )}
                <div className="min-w-0">
                  <h2 className="font-serif text-base leading-tight text-navy [overflow-wrap:anywhere] lg:text-2xl">{leader.name}</h2>
                  <p className="mt-1 text-sm font-semibold leading-snug text-gold-deep [overflow-wrap:anywhere] lg:text-base">{leader.role}</p>
                </div>
              </div>
              {leader.school ? (
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-muted [overflow-wrap:anywhere]">
                  {leader.school}
                </p>
              ) : null}
              {leader.bio ? <p className="mt-3 text-lg leading-8">{leader.bio}</p> : null}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
