import Image from "next/image";
import { notFound } from "next/navigation";
import { getExercise } from "@/lib/api";
import PlanActions from "./PlanActions";

export default async function ExerciseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exerciseId = Number(id);
  if (!Number.isInteger(exerciseId)) notFound();

  const exercise = await getExercise(exerciseId);
  if (!exercise) notFound();

  const specs = [
    ["Equipment", exercise.equipment],
    ["Difficulty", exercise.difficulty],
    ["Sets", String(exercise.sets)],
    ["Reps", exercise.reps],
    ["Duration", `${exercise.duration} min`],
    ["Calories", `${exercise.caloriesBurned} kcal`],
    ["Rating", exercise.rating.toFixed(1)],
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-8 sm:px-6 sm:pt-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative mx-auto aspect-[11/16] w-full max-w-md overflow-hidden rounded-2xl md:max-w-none">
          <Image
            src={exercise.image}
            alt={`${exercise.name} demonstration`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="font-heading text-3xl font-normal uppercase text-white sm:text-4xl">
            {exercise.name}
          </h1>
          <p className="mt-3 text-neutral-400">{exercise.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#c6ff00] px-3 py-0.5 text-xs font-medium text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Spec table */}
          <dl className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#12141a]">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-2 border-b border-white/[0.06] px-4 py-3.5 last:border-b-0"
              >
                <dt className="font-heading text-xs uppercase tracking-wide text-neutral-300">
                  {label}
                </dt>
                <dd className="text-sm text-neutral-100">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Instructions */}
          <h2 className="mt-8 font-heading text-2xl font-normal uppercase text-white">
            Instructions
          </h2>
          <ol className="mt-3 list-inside list-decimal space-y-2.5 text-[15px] text-neutral-100">
            {exercise.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <PlanActions id={exercise.id} name={exercise.name} />
        </div>
      </div>
    </section>
  );
}
