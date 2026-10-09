"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/b4fire/language-context";

/**
 * B4Fire brand mark — shield with an integrated flame.
 * Pure SVG so it stays crisp at any size and inherits currentColor.
 */
export function FlameShieldMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="B4Fire flame and shield emblem"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      {/* shield */}
      <path
        d="M24 3.5 40.5 9.4v12.2c0 10.6-6.9 18.6-16.5 22.9C14.4 40.2 7.5 32.2 7.5 21.6V9.4L24 3.5Z"
        className="fill-navy-800"
        stroke="url(#b4f-stroke)"
        strokeWidth="2.2"
      />
      {/* flame */}
      <path
        d="M24 12.2c.4 3.9-1.9 6-3.9 8.2-1.9 2.1-3.4 4.3-3.4 7.1 0 4.3 3.3 7.8 7.3 7.8s7.3-3.5 7.3-7.8c0-1.9-.6-3.5-1.5-4.9-.5 1.1-1.2 1.9-2.2 2.4.3-4.4-1.2-9.6-3.6-12.8Z"
        fill="url(#b4f-flame)"
        className="animate-flame"
      />
      <path
        d="M24 22.4c.2 2-.9 3.1-1.9 4.2-1 1.1-1.7 2.2-1.7 3.6 0 2.2 1.6 3.9 3.6 3.9s3.6-1.7 3.6-3.9c0-2.4-1.6-5-3.6-7.8Z"
        className="fill-navy-900"
      />
      <defs>
        <linearGradient id="b4f-flame" x1="24" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fb923c" />
          <stop offset="1" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="b4f-stroke" x1="24" y1="3" x2="24" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function B4FireLogo({
  className,
  full = false,
}: {
  className?: string;
  /** Always render the full lockup (used in footer/sheet). Header auto-compacts below 2xl. */
  full?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <FlameShieldMark />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">
          B4<span className="text-flame">Fire</span>
          <span
            className={cn(
              "ml-1.5 text-sm font-semibold tracking-[0.18em] text-slate-400 uppercase",
              full ? "inline" : "hidden 2xl:inline"
            )}
          >
            Technology
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium tracking-[0.22em] text-slate-500 uppercase",
            full ? "block" : "hidden 2xl:block"
          )}
        >
          {t.logo.tagline}
        </span>
      </span>
    </span>
  );
}
