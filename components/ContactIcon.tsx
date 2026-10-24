import type { ReactNode } from "react";

export type ContactIconName = "email" | "phone" | "instagram" | "youtube";

export function ContactIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ContactIconName;
  className?: string;
}) {
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
      className={`${className} shrink-0 text-ribbon`}
    >
      {paths[name]}
    </svg>
  );
}
