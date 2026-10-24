import type { Metadata } from "next";
import Link from "next/link";
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
      <PageIntro kicker="Leadership" title="Meet the leadership team.">
        <></>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-2">
          {leaders.map((leader) => (
            <li key={leader.name} className="rounded-3xl border border-line bg-card p-7">
              <div className="flex items-center gap-4">
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={leader.photoAlt ?? `${leader.name} portrait`}
                    className="h-56 w-56 rounded-2xl border border-navy/10 bg-white object-contain p-1 sm:h-72 sm:w-72"
                  />
                ) : (
                  <span className="flex h-40 w-40 items-center justify-center rounded-2xl border border-navy/10 bg-navy font-serif text-xl text-ribbon sm:h-52 sm:w-52">
                    <span className="sr-only">{leader.name}. </span>
                    {leader.initials}
                  </span>
                )}
                <div>
                  <h2 className="font-serif text-3xl text-navy">{leader.name}</h2>
                  <p className="font-semibold text-gold-deep">{leader.role}</p>
                </div>
              </div>
              {leader.school ? (
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  {leader.school}
                </p>
              ) : null}
              <p className="mt-3 text-lg leading-8">{leader.bio}</p>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
