import type { ReactNode } from "react";

export type SiteIconName =
  | "email"
  | "phone"
  | "instagram"
  | "youtube"
  | "activities"
  | "leadership"
  | "alumni"
  | "join"
  | "donate"
  | "contact";

export function SiteIcon({
  name,
  className = "h-6 w-6",
}: {
  name: SiteIconName;
  className?: string;
}) {
  const paths: Record<SiteIconName, ReactNode> = {
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
    activities: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6" />
      </>
    ),
    leadership: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20" />
      </>
    ),
    alumni: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6" />
      </>
    ),
    join: (
      <>
        <circle cx="9" cy="8" r="4" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1M19 8v8M15 12h8" />
      </>
    ),
    donate: (
      <path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z" />
    ),
    contact: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-2 2v-6A7.5 7.5 0 1 1 20 11.5Z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
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
      className={`${className} shrink-0 text-ribbon`}
    >
      {paths[name]}
    </svg>
  );
}
