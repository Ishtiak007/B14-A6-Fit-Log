<div align="center">

# 🏋️ FitLog — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: browse a library of lifts, lock them into today's plan, and watch your workload add up.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[Live Demo](#) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## 📖 About

**FitLog** is a workout library and daily planner built for lifters who want zero clutter. Browse twelve lifts covering every major muscle group, open any exercise for full details and step-by-step instructions, then build a capped plan for today (five lifts max) and track total exercises, minutes and calories as you go.

The whole experience runs on a bold dark theme with a neon-lime accent, and it is fully responsive from phones to desktops.

## 🛠️ Technologies Used

| Category             | Tools                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| **Framework**        | [Next.js](https://nextjs.org/) (App Router, Cache Components, React Compiler) |
| **Language**         | [TypeScript](https://www.typescriptlang.org/)                                 |
| **UI Library**       | [React](https://react.dev/)                                                   |
| **Styling**          | [Tailwind CSS](https://tailwindcss.com/)                                      |
| **State Management** | React Context API with `localStorage` persistence                             |
| **Notifications**    | [react-hot-toast](https://react-hot-toast.com/)                               |
| **Icons**            | [Lucide React](https://lucide.dev/)                                           |
| **Fonts**            | Oswald (headings) and Inter (body) via `next/font`                            |
| **Data**             | REST API: `https://api.abcz.workers.dev/api/fitlog`                           |
| **Deployment**       | [Vercel](https://vercel.com/)                                                 |

## ✨ Key Features

### 1. 📚 Workout Library

Browse twelve lifts in a responsive card grid (3 columns on desktop, 2 on tablet, 1 on mobile). Every card shows muscle-group tags, equipment, duration, calories and rating, and links straight to the exercise page.

### 2. 🔍 Detailed Exercise Pages

Each workout has its own page with a large image, description, a spec table (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions. Pages are pre-rendered with `generateStaticParams` and cached for fast loads.

### 3. 📅 Today's Plan with a Five-Lift Cap

Add any workout to today's plan in one click. The plan is capped at five lifts, duplicates are blocked, and every action fires a toast notification. The **Plan** badge in the navbar updates instantly.

### 4. 🔖 Save for Later

Bookmark workouts you want to come back to. Saved lifts live in their own tab, and the **Saved** badge in the navbar stays in sync. Trying to save the same lift twice shows a friendly "already in your save list" message.

### 5. 📊 My Plan Dashboard

A single place to manage your day:

- **Live stats** for total exercises, minutes and calories
- **Tabs** to switch between _Today's Plan_ and _Saved_
- **Sorting** by duration, calories, rating or name
- **Mark as Done** and **remove** actions on every lift
- **Loading and empty states** that guide you back to the library

Your plan and saved list persist across refreshes through `localStorage`.

## 🗂️ Project Structure

```
src/
├── app/
│   ├── context/
│   │   └── PlanContext.tsx        # Plan, saved and done state + persistence
│   ├── exercise/[id]/page.tsx     # Exercise details route
│   ├── my-plan/page.tsx           # My Plan route
│   ├── layout.tsx                 # Providers, header, footer, toaster
│   └── page.tsx                   # Home (hero + library)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── modules/
│       ├── TheLibrary/            # Library grid and exercise cards
│       ├── ExerciseDetails/       # Details view and plan actions
│       └── MyPlan/                # Stats, tabs, workout rows, empty state
├── lib/
│   └── api.ts                     # Cached data fetching
└── types/
    └── exercise.ts                # Exercise type
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm, yarn or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/fitlog.git

# 2. Move into the project
cd fitlog

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🔌 API

FitLog reads from a public REST API.

| Endpoint              | Description              |
| --------------------- | ------------------------ |
| `GET /api/fitlog`     | Returns all workouts     |
| `GET /api/fitlog/:id` | Returns a single workout |

Example workout object:

```json
{
  "id": 1,
  "name": "Barbell Bench Press",
  "image": "https://...",
  "muscleGroups": ["Chest", "Arms"],
  "equipment": "Barbell, Bench",
  "difficulty": "Intermediate",
  "duration": 25,
  "caloriesBurned": 180,
  "sets": 4,
  "reps": "6-8",
  "rating": 4.8,
  "description": "A compound press that builds chest thickness...",
  "instructions": ["Lie on the bench...", "..."]
}
```

> Remote images are served from `img.magnific.com`, which is allowed in `next.config.ts` under `images.remotePatterns`.

## 🎨 Design

| Token      | Value             |
| ---------- | ----------------- |
| Background | `#0b0c0e`         |
| Surface    | `#1a1d24`         |
| Accent     | `#c6ff00`         |
| Headings   | Oswald, uppercase |
| Body       | Inter             |

## 🗺️ Roadmap

- [ ] Weekly calorie tracking
- [ ] Search and muscle-group filters
- [ ] Custom workouts
- [ ] User accounts and cloud sync

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Fork the repo, create a branch, commit your changes and open a pull request.

## 📄 License

Distributed under the MIT License.

---

<div align="center">

**© 2026 FitLog — Workout Library. Train hard, log honest.**

</div>
