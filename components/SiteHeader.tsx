"use client";

import Link from "next/link";
import { SiteIcon, type SiteIconName } from "@/components/SiteIcon";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hasDonationLink, site } from "@/lib/content";

const links = [
  { href: "/about", label: "About", icon: "about" },
  { href: "/events", label: "Activities", icon: "activities" },
  { href: "/leadership", label: "Leadership", icon: "leadership" },
  { href: "/alumni", label: "Alumni", icon: "alumni" },
  { href: "/join", label: "Join", icon: "join" },
  { href: "/contact", label: "Contact", icon: "contact" },
] satisfies { href: string; label: string; icon: SiteIconName }[];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  function toggleMenu() {
    setMenuPath(open ? null : pathname);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/super-joey-logo.png"
            alt="Super Joey Foundation"
            className="h-10 w-auto max-w-[56vw] sm:h-12"
          />
          <span className="hidden border-l border-navy/30 pl-3 text-[11px] font-bold uppercase tracking-[0.14em] text-navy md:block">
            Philadelphia
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={`relative text-sm font-semibold text-navy after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-ribbon after:transition-transform ${
                isCurrent(pathname, link.href)
                  ? "after:w-full"
                  : "after:w-full after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={hasDonationLink() ? site.donationUrl : "/donate"}
            className="border border-navy bg-ribbon px-4 py-2 text-sm font-bold text-white shadow-[3px_3px_0_#171a2b]"
            {...(hasDonationLink()
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 lg:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={
                    isCurrent(pathname, link.href) ? "page" : undefined
                  }
                  className="flex items-center gap-3 rounded-lg px-2 py-3 text-base font-semibold text-navy"
                >
                  <SiteIcon name={link.icon} className="h-5 w-5" />
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={hasDonationLink() ? site.donationUrl : "/donate"}
                className="mt-2 flex items-center justify-center gap-3 border border-navy bg-ribbon px-4 py-3 text-base font-bold text-white shadow-[3px_3px_0_#171a2b]"
                {...(hasDonationLink()
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <SiteIcon name="donate" className="h-5 w-5 text-white" />
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
