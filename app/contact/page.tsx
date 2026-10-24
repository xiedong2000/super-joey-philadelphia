import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/content";

type ContactIconName = "email" | "phone" | "instagram" | "youtube";

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, ReactNode> = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5H7Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: (
      <>
        <path d="M21 8a2.5 2.5 0 0 0-1.8-1.8C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8a26 26 0 0 0-.4 4 26 26 0 0 0 .4 4 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4A2.5 2.5 0 0 0 21 16a26 26 0 0 0 .4-4 26 26 0 0 0-.4-4Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0 text-ribbon"
    >
      {paths[name]}
    </svg>
  );
}

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
            <ContactIcon name="email" />
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
            <ContactIcon name="phone" />
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
            <ContactIcon name="instagram" />
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
            <ContactIcon name="youtube" />
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
