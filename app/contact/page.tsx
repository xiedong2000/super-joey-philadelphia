import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteIcon } from "@/components/SiteIcon";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Super Joey Foundation Philadelphia by email, Instagram, or YouTube.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro kicker="Contact" title="Write to the chapter.">
        <p>
          New volunteers, schools, and families who want event details can use
          the addresses below. The phone number is the one published by the
          Super Joey Foundation.
        </p>
      </PageIntro>

      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-4 px-5 py-14 md:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="min-w-0 rounded-3xl border border-line bg-card p-7 hover:border-gold"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Email
            </p>
            <SiteIcon name="email" />
          </div>
          <p className="mt-3 font-serif text-3xl text-navy [overflow-wrap:anywhere]">
            {site.email}
          </p>
          <p className="mt-3 text-muted">
            Email for Super Joey Foundation Philadelphia.
          </p>
        </a>
        <a
          href={site.phoneHref}
          className="min-w-0 rounded-3xl border border-line bg-card p-7 hover:border-gold"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Phone
            </p>
            <SiteIcon name="phone" />
          </div>
          <p className="mt-3 font-serif text-3xl text-navy [overflow-wrap:anywhere]">
            {site.phoneDisplay}
          </p>
          <p className="mt-3 text-muted">Super Joey Foundation Phone Line.</p>
        </a>
        <a
          href={site.instagramUrl}
          className="min-w-0 rounded-3xl border border-line bg-card p-7 hover:border-gold"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Instagram
            </p>
            <SiteIcon name="instagram" />
          </div>
          <p className="mt-3 font-serif text-3xl text-navy [overflow-wrap:anywhere]">
            {site.instagramHandle}
          </p>
          <p className="mt-3 text-muted">Photos and announcements from the Philadelphia chapter.</p>
        </a>
        <a
          href={site.youtubeUrl}
          className="min-w-0 rounded-3xl border border-line bg-card p-7 hover:border-gold"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              YouTube
            </p>
            <SiteIcon name="youtube" />
          </div>
          <p className="mt-3 font-serif text-3xl text-navy [overflow-wrap:anywhere]">
            Watch the channel
          </p>
          <p className="mt-3 text-muted">
            Concerts and other chapter video, when the team posts them.
          </p>
        </a>
      </div>
    </>
  );
}
