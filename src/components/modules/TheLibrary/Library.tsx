import { getExercises } from "@/lib/api";
import ExerciseCard from "./ExerciseCard";

export default async function Library() {
  const exercises = await getExercises();

  return (
    <section
      id="library"
      className="mx-auto w-full max-w-[1200px] scroll-mt-6 px-4 pt-14 sm:px-6"
    >
      <h2 className="font-heading text-3xl font-normal uppercase text-white sm:text-4xl">
        The Library
      </h2>
      <p className="mt-2 text-neutral-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
}
