"use client";

import { usePlan } from "@/app/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full border-b border-white/[0.06] bg-[#0b0c0e]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:grid sm:h-16 sm:grid-cols-[1fr_auto_1fr] sm:flex-nowrap sm:gap-y-0 sm:px-6 sm:py-0">
        {/* Logo */}
        <Link href="/" className="flex w-fit items-center gap-2">
          <Image
            src="/assets/logo.png" // TODO: replace with your logo path
            alt="FitLog logo"
            width={22}
            height={22}
            priority
          />
          <span className="text-[13px] font-bold uppercase tracking-wide text-white">
            FitLog
          </span>
        </Link>

        {/* Dynamic counters */}
        <div className="flex items-center justify-end gap-3 sm:order-3 sm:gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white sm:gap-2"
          >
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6ff00] px-1.5 text-[11px] font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white sm:gap-2"
          >
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 px-1.5 text-[11px] font-medium text-neutral-300">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="order-last flex w-full items-center justify-center gap-1 sm:order-2 sm:w-auto">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive(href)
                  ? "bg-[#c6ff00]/10 text-[#c6ff00]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
