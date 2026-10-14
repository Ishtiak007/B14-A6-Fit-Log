"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";
import { usePlan } from "@/app/context/PlanContext";
import { Exercise } from "@/utils/exercise";
import PlanStats from "./PlanStats";
import EmptyState from "./EmptyState";
import WorkoutRow from "./WorkoutRow";

const TABS = [
  { key: "plan", label: "Today's Plan" },
  { key: "saved", label: "Saved" },
] as const;

type Tab = (typeof TABS)[number]["key"];
type SortKey = "duration" | "calories" | "rating" | "name";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "calories", label: "Calories" },
  { key: "rating", label: "Rating" },
  { key: "name", label: "Name" },
];

const SORTERS: Record<SortKey, (a: Exercise, b: Exercise) => number> = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => b.caloriesBurned - a.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
  name: (a, b) => a.name.localeCompare(b.name),
};

export default function MyPlan({ exercises }: { exercises: Exercise[] }) {
  const {
    plan,
    saved,
    done,
    hydrated,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = usePlan();

  const [tab, setTab] = useState<Tab>("plan");
  const [sort, setSort] = useState<SortKey>("duration");

  const byId = new Map(exercises.map((e) => [e.id, e]));
  const toList = (ids: number[]) =>
    ids.map((id) => byId.get(id)).filter((e): e is Exercise => Boolean(e));

  const planItems = toList(plan);
  const savedItems = toList(saved);

  // Stats always reflect Today's Plan
  const totalMinutes = planItems.reduce((sum, e) => sum + e.duration, 0);
  const totalCalories = planItems.reduce((sum, e) => sum + e.caloriesBurned, 0);

  const visible = [...(tab === "plan" ? planItems : savedItems)].sort(
    SORTERS[sort],
  );

  function handleRemove(id: number) {
    if (tab === "plan") {
      removeFromPlan(id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.success("Removed from saved");
    }
  }

  function handleToggleDone(id: number) {
    const wasDone = done.includes(id);
    toggleDone(id);
    toast.success(wasDone ? "Marked as not done" : "Marked as done");
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6">
      <h1 className="font-heading text-4xl font-normal uppercase text-white sm:text-5xl">
        My Plan
      </h1>
      <p className="mt-2 text-neutral-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <PlanStats
        exercises={planItems.length}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      {/* Tabs + sort */}
      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div
          role="tablist"
          className="inline-flex rounded-xl border border-white/[0.06] bg-[#1a1d24] p-1"
        >
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === key
                  ? "bg-[#0b0c0e] text-[#c6ff00]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-80">
          <label htmlFor="sort" className="mb-1 block text-sm text-neutral-200">
            Sort By
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full cursor-pointer appearance-none rounded-full border border-white/20 bg-transparent px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-[#c6ff00]/60"
            >
              {SORT_OPTIONS.map(({ key, label }) => (
                <option key={key} value={key} className="bg-[#1a1d24]">
                  {label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-300" />
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mt-6 space-y-4">
        {!hydrated ? (
          <p className="py-16 text-center text-neutral-400">
            Loading workouts…
          </p>
        ) : visible.length === 0 ? (
          <EmptyState />
        ) : (
          visible.map((exercise) => (
            <WorkoutRow
              key={exercise.id}
              exercise={exercise}
              variant={tab}
              isDone={done.includes(exercise.id)}
              onToggleDone={() => handleToggleDone(exercise.id)}
              onRemove={() => handleRemove(exercise.id)}
            />
          ))
        )}
      </div>
    </section>
  );
}
