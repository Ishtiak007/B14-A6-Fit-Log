"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const MAX_PLAN = 5;
const STORAGE_KEY = "fitlog:v1";

type AddResult = "added" | "exists" | "full";

type PlanContextValue = {
  plan: number[];
  saved: number[];
  planCount: number;
  savedCount: number;
  addToPlan: (id: number) => AddResult;
  addToSaved: (id: number) => Exclude<AddResult, "full">;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load once after mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (Array.isArray(parsed.plan)) setPlan(parsed.plan);
        if (Array.isArray(parsed.saved)) setSaved(parsed.saved);
      }
    } catch {
      /* ignore corrupted storage */
    }
    setHydrated(true);
  }, []);

  // Persist on change (only after the initial load)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan, saved }));
    } catch {
      /* storage unavailable */
    }
  }, [plan, saved, hydrated]);

  function addToPlan(id: number): AddResult {
    if (plan.includes(id)) return "exists";
    if (plan.length >= MAX_PLAN) return "full";
    setPlan([...plan, id]);
    return "added";
  }

  function addToSaved(id: number): "added" | "exists" {
    if (saved.includes(id)) return "exists";
    setSaved([...saved, id]);
    return "added";
  }

  function removeFromPlan(id: number) {
    setPlan(plan.filter((x) => x !== id));
  }

  function removeFromSaved(id: number) {
    setSaved(saved.filter((x) => x !== id));
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        planCount: plan.length,
        savedCount: saved.length,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
