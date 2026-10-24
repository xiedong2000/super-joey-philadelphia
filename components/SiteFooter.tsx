import Link from "next/link";
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
              <Link href="/events" className="hover:text-ribbon">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-ribbon">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/alumni" className="hover:text-ribbon">
                Alumni
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-ribbon">
                Join
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-ribbon">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ribbon">
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
              <a className="hover:text-ribbon" href={site.instagramUrl}>
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a className="hover:text-ribbon" href={site.youtubeUrl}>
                {site.youtubeLabel}
              </a>
            </li>
            <li>
              <a className="hover:text-ribbon" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
