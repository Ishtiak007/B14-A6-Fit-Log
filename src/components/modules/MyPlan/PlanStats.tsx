type PlanStatsProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

export default function PlanStats({
  exercises,
  minutes,
  calories,
}: PlanStatsProps) {
  const stats = [
    { label: "Exercises", value: exercises, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1a1d24]">
      {stats.map(({ label, value, accent }) => (
        <div
          key={label}
          className="border-l border-dashed border-white/10 px-4 py-5 first:border-l-0 sm:px-8 sm:py-6"
        >
          <p className="text-xs text-neutral-400 sm:text-sm">{label}</p>
          <p
            className={`mt-1 text-3xl font-extrabold sm:text-4xl ${
              accent ? "text-[#c6ff00]" : "text-white"
            }`}
          >
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
