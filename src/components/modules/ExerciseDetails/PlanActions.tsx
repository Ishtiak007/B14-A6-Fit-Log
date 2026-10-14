"use client";

import { MAX_PLAN, usePlan } from "@/app/context/PlanContext";
import { Bookmark, CalendarPlus, CircleX, Cross } from "lucide-react";
import toast from "react-hot-toast";

export default function PlanActions({ id }: { id: number; name?: string }) {
  const { addToPlan, addToSaved } = usePlan();

  function handleAddToPlan() {
    const result = addToPlan(id);

    if (result === "added") {
      toast.success("Added to today's plan");
    } else if (result === "exists") {
      toast("Already in your plan", {
        icon: <CircleX className="text-red-400" />,
      });
    } else {
      toast.error(`Today's plan is full (${MAX_PLAN} lifts max)`);
    }
  }

  function handleSave() {
    const result = addToSaved(id);

    if (result === "added") {
      toast.success("Saved for later");
    } else {
      toast("Already in your save list", {
        icon: <CircleX className="text-red-400" />,
      });
    }
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="inline-flex items-center gap-2 rounded-full bg-[#c6ff00] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95 active:scale-[0.98]"
      >
        <CalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5 active:scale-[0.98]"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
}
