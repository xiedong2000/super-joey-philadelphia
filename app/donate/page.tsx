import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { hasDonationLink, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support local youth and families affected by childhood cancer. Donate to benefit Ronald McDonald House Philadelphia.",
};

export default function DonatePage() {
  return (
    <>
      <PageIntro kicker="Donate" title="Support local youth and families.">
        <p>
          Super Joey is a youth organization dedicated to supporting families
          affected by childhood cancer. Donations help support Ronald McDonald
          House Philadelphia.
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
            <section>
              <h2 className="font-serif text-3xl text-navy">Why partner with us</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-lg leading-8">
                <li>Connect with local community members</li>
                <li>Support youth development</li>
                <li>Build positive local business exposure</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-serif text-3xl text-navy">Donor recognition</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-lg leading-8">
                <li>Business name and logo featured in the concert program</li>
                <li>A donation certificate for display</li>
                <li>A nonprofit receipt for tax purposes</li>
              </ul>
              <p className="mt-4 leading-7 text-muted">
                The Super Joey Foundation is a 501(c)(3) public charity.
              </p>
            </section>

            <p className="mt-8 text-lg leading-8 text-muted">
              Questions about a gift? Email{" "}
              <a className="font-semibold text-navy" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>

          <aside className="rounded-3xl border border-[#bfdff3]/70 bg-[#eaf6ff] p-7 text-navy md:col-span-5">
            <h2 className="font-serif text-3xl text-navy">
              Donate by Venmo, Zelle, or PayPal
            </h2>
            <p className="mt-3 leading-7 text-navy/80">
              Scan the Venmo or Zelle code, or use the PayPal email below. For
              Zelle, include the note shown.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <figure className="rounded-2xl border border-line bg-white p-4 text-center">
                <img
                  src="/photo/donate-venmo.jpg"
                  alt="Venmo QR code to donate to Super Joey Foundation"
                  className="mx-auto max-h-64 w-full object-contain"
                />
                <figcaption className="mt-3 font-semibold">Venmo</figcaption>
              </figure>
              <figure className="rounded-2xl border border-line bg-white p-4 text-center">
                <img
                  src="/photo/donate-zelle.jpg"
                  alt="Zelle QR code for Super Joey Foundation Corporation"
                  className="mx-auto max-h-64 w-full object-contain"
                />
                <figcaption className="mt-3 font-semibold">Zelle</figcaption>
              </figure>
            </div>
            <p className="mt-5 leading-7">
              <span className="font-semibold">Zelle:</span>{" "}
              <a className="underline" href="mailto:donations@superjoey.org">
                donations@superjoey.org
              </a>
              <br />
              <span className="font-semibold">Add note:</span> To Philly Branch
            </p>
            <p className="mt-4 leading-7">
              <span className="font-semibold">PayPal:</span>{" "}
              <a
                className="underline"
                href="mailto:sjf.philadelphia.donation@gmail.com"
              >
                sjf.philadelphia.donation@gmail.com
              </a>
            </p>
            {hasDonationLink() ? (
              <a
                href={site.donationUrl}
                className="mt-6 inline-block rounded-full bg-ribbon px-5 py-3 font-semibold text-navy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give online
              </a>
            ) : null}
          </aside>
        </div>
      </div>
    </>
  );
}
