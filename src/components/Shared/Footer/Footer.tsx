import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-white/[0.06] bg-[#1a1d24]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:h-24 md:flex-row md:py-0 md:text-left">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png" // TODO: replace with your logo path
            alt="FitLog logo"
            width={22}
            height={22}
          />
          <span className="font-heading text-lg font-normal uppercase tracking-wide text-white">
            FitLog
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-neutral-400">
          &copy; 2026 FitLog &mdash; Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
