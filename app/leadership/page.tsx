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
      <PageIntro kicker="Leadership" title="The officers guiding Philadelphia.">
        <p>
          This page names people who have a public role with the chapter. It
          lists a role, a school, and a short note. Personal phone numbers and
          home addresses stay off the site.
        </p>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-2">
          {leaders.map((leader) => (
            <li key={leader.name} className="rounded-3xl border border-line bg-card p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-serif text-xl text-ribbon">
                  <span className="sr-only">{leader.name}. </span>
                  {leader.initials}
                </span>
                <div>
                  <h2 className="font-serif text-3xl text-navy">{leader.name}</h2>
                  <p className="font-semibold text-gold-deep">{leader.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                {leader.school}
              </p>
              <p className="mt-3 text-lg leading-8">{leader.bio}</p>
            </li>
          ))}
        </ul>

        <section className="mt-12 max-w-3xl">
          <h2 className="font-serif text-3xl text-navy">More of the team</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Other officers can be added when each person agrees to be listed
            and the chapter sends a name, title, and optional photo. The
            foundation’s own volunteer page remains the national listing of
            chapter team leaders.
          </p>
          <p className="mt-4">
            <a
              className="font-semibold text-navy underline decoration-ribbon underline-offset-4"
              href={site.volunteersUrl}
            >
              See the national volunteer list
            </a>
          </p>
          <p className="mt-6">
            <Link href="/join" className="font-semibold text-gold-deep">
              Ask about joining the team
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
