import { Exercise } from "@/utils/exercise";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getExercises(): Promise<Exercise[]> {
  const res = await fetch(API_URL, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch exercises");
  return res.json();
}

export async function getExercise(id: number): Promise<Exercise | undefined> {
  const exercises = await getExercises();
  return exercises.find((e) => e.id === id);
}
