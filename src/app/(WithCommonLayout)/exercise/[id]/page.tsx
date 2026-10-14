import { Suspense } from "react";
import { getExercises } from "@/lib/api";
import ExerciseDetails from "@/components/modules/ExerciseDetails/ExerciseDetails";

export async function generateStaticParams() {
  const exercises = await getExercises();
  return exercises.map((e) => ({ id: String(e.id) }));
}

function DetailsSkeleton() {
  return (
    <div className="mx-auto grid w-full max-w-[1060px] animate-pulse gap-8 px-4 pt-8 sm:px-6 sm:pt-10 md:grid-cols-2">
      <div className="aspect-[11/16] rounded-2xl bg-[#1a1d24]" />
      <div className="space-y-4">
        <div className="h-10 w-3/4 rounded bg-[#1a1d24]" />
        <div className="h-4 w-full rounded bg-[#1a1d24]" />
        <div className="h-64 rounded-2xl bg-[#1a1d24]" />
      </div>
    </div>
  );
}

export default function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<DetailsSkeleton />}>
      <ExerciseDetails params={params} />
    </Suspense>
  );
}
