import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { joeyStory, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Super Joey Foundation Philadelphia is a chapter team of the Super Joey Foundation, supporting families affected by childhood cancer.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="About" title="A Philadelphia chapter of a national foundation.">
        <p>
          Super Joey Foundation Philadelphia is the local chapter team. Students
          here organize volunteers and yearly charity activities for the Super
          Joey Foundation.
        </p>
      </PageIntro>

      <article className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl text-navy">The foundation</h2>
            <p className="mt-4 text-lg leading-8">
              The Super Joey Foundation is a 501(c)(3) public charity. Its
              mission is to support families in the United States affected by
              childhood cancer: ease the strain of treatment, share useful
              experience from other families, and raise funds for research,
              including research at Dana-Farber Cancer Institute.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              Across the country, foundation volunteers also take part in meals
              for families staying near treatment, gifts for children in care,
              and Go Gold awareness in schools. Philadelphia carries that same
              mission through its own yearly calendar.
            </p>
            <p className="mt-4 text-lg leading-8">
              <a
                className="font-semibold text-navy underline decoration-ribbon underline-offset-4"
                href={site.nationalUrl}
              >
                Read the foundation site
              </a>
            </p>
          </div>
          <aside className="rounded-3xl bg-navy p-6 text-paper md:col-span-5">
            <h2 className="font-serif text-3xl">In Philadelphia</h2>
            <ul className="mt-4 space-y-3 text-paper/85">
              <li>Serve for Love</li>
              <li>Charity Tennis Tournament</li>
              <li>Charity Concert</li>
              <li>July 4th Charity Sale</li>
              <li>Father’s Day Team Building</li>
            </ul>
            <Link
              href="/events"
              className="mt-6 inline-block font-semibold text-ribbon"
            >
              See the activities
            </Link>
          </aside>
        </div>

        <section className="mt-14 max-w-3xl border-t border-line pt-10">
          <h2 className="font-serif text-3xl text-navy">Joey</h2>
          <div className="mt-4 space-y-4 text-lg leading-8">
            {joeyStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-4">
            <a
              className="font-semibold text-navy underline decoration-ribbon underline-offset-4"
              href={site.aboutUrl}
            >
              Foundation story
            </a>
          </p>
        </section>

        <section className="mt-14 max-w-3xl border-t border-line pt-10">
          <h2 className="font-serif text-3xl text-navy">How the chapter is recognized</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Chapter teams complete the foundation’s yearly recognition process.
            Philadelphia is listed on the foundation’s public volunteer page,
            with Patrick Xie and Richard Wan named as team leaders. That page is
            the current national listing.
          </p>
          <p className="mt-4">
            <a
              className="font-semibold text-navy underline decoration-ribbon underline-offset-4"
              href={site.volunteersUrl}
            >
              Foundation volunteer page
            </a>
          </p>
        </section>
      </article>
    </>
  );
}
