import type { Metadata } from "next";
import { JoinForm } from "@/components/JoinForm";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join Super Joey Foundation Philadelphia as a student volunteer, musician, tennis player, or school partner.",
};

export default function JoinPage() {
  return (
    <>
      <PageIntro kicker="Join" title="Come help the next activity.">
        <p>
          Students, musicians, tennis players, and school groups are welcome.
          Send your name and the kind of help you can offer. The note goes to
          the chapter at {site.email}.
        </p>
      </PageIntro>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-serif text-3xl text-navy">Ways to help</h2>
          <ul className="mt-4 space-y-3 text-lg leading-8">
            <li>Serve at the next Serve for Love</li>
            <li>Play, staff, or sponsor the tennis tournament</li>
            <li>Perform or help produce the charity concert</li>
            <li>Help with the July 4th Charity Sale</li>
            <li>Join Father’s Day Team Building</li>
            <li>Start interest at your school</li>
          </ul>
          <p className="mt-6 text-muted">
            Questions can also go straight to{" "}
            <a className="font-semibold text-navy" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
        <div className="md:col-span-7">
          <JoinForm />
        </div>
      </div>
    </>
  );
}
