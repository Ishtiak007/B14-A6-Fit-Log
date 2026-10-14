import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/10 bg-[#1a1d24] px-6 py-16 text-center">
      <h2 className="font-heading text-xl font-normal uppercase text-white">
        Nothing here yet
      </h2>
      <p className="mt-3 text-neutral-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-[#c6ff00] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95 active:scale-[0.98]"
      >
        Go to workouts
      </Link>
    </div>
  );
}
