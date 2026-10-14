import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import { Exercise } from "@/utils/exercise";

type WorkoutRowProps = {
  exercise: Exercise;
  variant: "plan" | "saved";
  isDone: boolean;
  onToggleDone: () => void;
  onRemove: () => void;
};

export default function WorkoutRow({
  exercise,
  variant,
  isDone,
  onToggleDone,
  onRemove,
}: WorkoutRowProps) {
  const { id, name, image, equipment, duration, caloriesBurned, rating } =
    exercise;

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#1a1d24] p-5 sm:flex-row sm:items-center ${
        variant === "plan" && isDone ? "opacity-70" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[120px] sm:w-[180px]">
        <Image
          src={image}
          alt={`${name} thumbnail`}
          fill
          sizes="(min-width: 640px) 180px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3
          className={`font-heading text-xl font-normal uppercase tracking-wide text-white ${
            variant === "plan" && isDone
              ? "line-through decoration-white/40"
              : ""
          }`}
        >
          {name}
        </h3>
        <p className="mt-0.5 text-neutral-400">{equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-200">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#c6ff00]" />
            {duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-[#c6ff00]" />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-[#c6ff00]" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          href={`/exercise/${id}`}
          className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/5"
        >
          View Details
        </Link>

        {variant === "plan" && (
          <button
            type="button"
            onClick={onToggleDone}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition active:scale-[0.98] ${
              isDone
                ? "border border-[#c6ff00]/50 bg-[#c6ff00]/10 text-[#c6ff00]"
                : "bg-[#c6ff00] text-black hover:brightness-95"
            }`}
          >
            <Check className="h-4 w-4" />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className="rounded-full p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
