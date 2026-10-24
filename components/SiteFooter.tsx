import Link from "next/link";
import { SiteIcon } from "@/components/SiteIcon";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#bfdff3]/70 bg-[#eaf6ff] text-navy">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-navy">Super Joey Foundation Philadelphia</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-navy/80">
            A Philadelphia chapter team of the{" "}
            <a
              className="underline decoration-ribbon underline-offset-4"
              href={site.nationalUrl}
            >
              Super Joey Foundation
            </a>
            , a 501(c)(3) public charity.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ribbon">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm text-navy/80">
            <li>
              <Link href="/events" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="activities" className="h-4 w-4" />
                Activities
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="leadership" className="h-4 w-4" />
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/alumni" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="alumni" className="h-4 w-4" />
                Alumni
              </Link>
            </li>
            <li>
              <Link href="/join" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="join" className="h-4 w-4" />
                Join
              </Link>
            </li>
            <li>
              <Link href="/donate" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="donate" className="h-4 w-4" />
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-flex items-center gap-2 hover:text-ribbon">
                <SiteIcon name="contact" className="h-4 w-4" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ribbon">
            Chapter channels
          </p>
          <ul className="mt-3 space-y-2 text-sm text-navy/80">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-ribbon" href={site.instagramUrl}>
                <SiteIcon name="instagram" className="h-4 w-4" />
                <span>Instagram {site.instagramHandle}</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-ribbon" href={site.youtubeUrl}>
                <SiteIcon name="youtube" className="h-4 w-4" />
                <span>{site.youtubeLabel}</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-ribbon" href={`mailto:${site.email}`}>
                <SiteIcon name="email" className="h-4 w-4" />
                <span>{site.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-[#bfdff3]/70 px-5 py-4 text-center text-xs text-navy/60">
        © 2026 Super Joey Foundation
      </p>
    </footer>
  );
}
