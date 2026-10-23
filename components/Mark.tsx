export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="6" fill="#1b3a34" />
      <path
        fill="#d7a441"
        d="M32 10c-1 2.6-4 6-8 7.7C18.2 20 15 24.2 15 29c0 5 3.4 8.4 7.6 8.4 1.6 0 2.8-.9 3.4-2 .9 3.4 2.6 5.6 5.9 5.6s5-2.2 5.9-5.6c.6 1.1 1.8 2 3.4 2 4.2 0 7.6-3.4 7.6-8.4 0-4.8-3.2-9-9-11.3-4-1.7-7-5.1-8-7.7z"
      />
      <path
        fill="#f7faf7"
        d="M26.4 42.2 21.6 58l8.2-8.2L32 58l2.2-8.2L42.4 58l-4.8-15.8c-1.6 1.1-3.5 1.7-5.6 1.7s-4-.6-5.6-1.7z"
      />
    </svg>
  );
}
