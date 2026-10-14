import { Exercise } from "@/utils/exercise";
import { cacheLife } from "next/cache";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getExercises(): Promise<Exercise[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch exercises");
  return res.json();
}

export async function getExercise(id: number): Promise<Exercise | null> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${API_URL}/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch exercise");
  return res.json();
}
