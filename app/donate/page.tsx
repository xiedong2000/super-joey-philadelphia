import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { hasDonationLink, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Super Joey Foundation Philadelphia and the Super Joey Foundation’s work with families affected by childhood cancer.",
};

export default function DonatePage() {
  return (
    <>
      <PageIntro kicker="Donate" title="Support the chapter’s work.">
        <p>
          Gifts help the Philadelphia chapter carry out its five yearly
          activities and the Super Joey Foundation’s mission to support
          families affected by childhood cancer.
        </p>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_24px_50px_-36px_rgba(22,48,68,0.7)]">
          <div className="flex min-h-[320px] items-center justify-center bg-[#edf3f8] p-3 md:min-h-[420px] md:p-5">
            <img
              src="/photo/Donations.png"
              alt="Super Joey Foundation donations"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
          <h2 className="font-serif text-3xl text-navy">Before you give</h2>
          <p className="mt-4 text-lg leading-8">
            Use the chapter’s approved donation page. On that page, confirm the
            recipient name before you send money. The Super Joey Foundation is a
            501(c)(3) public charity.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted">
            Questions about a gift can go to{" "}
            <a className="font-semibold text-navy" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
          <aside className="rounded-3xl border border-[#bfdff3]/70 bg-[#eaf6ff] p-7 text-navy md:col-span-5">
            {hasDonationLink() ? (
              <>
                <h2 className="font-serif text-3xl text-navy">Give now</h2>
              <p className="mt-3 leading-7 text-navy/80">
                This button opens the chapter’s approved donation page.
              </p>
              <a
                href={site.donationUrl}
                className="mt-6 inline-block rounded-full bg-ribbon px-5 py-3 font-semibold text-navy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </>
            ) : (
              <>
                <h2 className="font-serif text-3xl text-navy">Giving link coming</h2>
                <p className="mt-3 leading-7 text-navy/80">
                  The approved donation link is not on the site yet. When the
                  chapter adds it, the button on this page will open that page.
                </p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Donation question — Super Joey Philadelphia",
                  )}`}
                  className="mt-6 inline-block rounded-full bg-ribbon px-5 py-3 font-semibold text-navy"
                >
                  Ask about a gift
                </a>
              </>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
