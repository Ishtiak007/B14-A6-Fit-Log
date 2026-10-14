import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Exercise } from "@/utils/exercise";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <Link
      href={`/exercise/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1a1d24] transition hover:border-[#c6ff00]/60"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} demonstration`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c6ff00] px-3 py-0.5 text-xs font-medium text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-heading text-xl font-semibold uppercase tracking-wide text-white">
          {name}
        </h3>

        <p className="mt-2 text-sm text-neutral-400">{equipment}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-200">
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
    </Link>
  );
}
