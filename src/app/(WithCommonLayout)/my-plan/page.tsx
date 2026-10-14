import { Suspense } from "react";
import { getExercises } from "@/lib/api";
import MyPlan from "@/components/modules/MyPlan/MyPlan";

async function MyPlanLoader() {
  const exercises = await getExercises();
  return <MyPlan exercises={exercises} />;
}

export default function MyPlanPage() {
  return (
    <Suspense
      fallback={
        <section className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6">
          <p className="py-24 text-center text-neutral-400">
            Loading workouts…
          </p>
        </section>
      }
    >
      <MyPlanLoader />
    </Suspense>
  );
}
