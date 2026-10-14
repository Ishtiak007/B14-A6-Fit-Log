import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#1a1d24] px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-6 md:px-14 md:py-0">
        {/* Text */}
        <div className="order-2 md:order-1 md:py-24">
          <p className="font-heading text-sm font-normal uppercase tracking-wide text-[#c6ff00]">
            Workout Library
          </p>

          <h1 className="mt-4 font-heading text-4xl font-light uppercase leading-[1.1] text-[#e8e9f0] sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center rounded-full bg-[#c6ff00] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95 active:scale-[0.98]"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Image */}
        <div className="relative order-1 mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] md:order-2 md:max-w-none md:py-8">
          <Image
            src="/assets/banner.png" // TODO: replace with your banner image path
            alt="Anatomical figure using a preacher curl machine"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 360px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
