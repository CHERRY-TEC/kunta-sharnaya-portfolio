// Profile + GitHub data for the portfolio.
// FALLBACK_REPOS is a snapshot of github.com/hanmanthmarkanti-ux so the site
// still renders every project when the live GitHub API is unreachable.

export const PROFILE = {
  firstName: "Hanmanth",
  fullName: "Markanti Hanmanth",
  role: "Full-Stack Developer",
  github: "hanmanthmarkanti-ux",
  githubUrl: "https://github.com/hanmanthmarkanti-ux",
  avatar: "https://avatars.githubusercontent.com/u/278888250?v=4",
  location: "India",
  focus: "Full-stack web apps, built end-to-end with AI",
  bio: "I design, build and ship complete web products — frontends, APIs, databases and AI features — using an AI-native workflow that takes ideas from zero to deployed fast.",
};

// Rotating hero headline
export const ROLES = [
  "Full-Stack Developer",
  "AI Product Builder",
  "RAG & Agent Engineer",
  "React / Node Engineer",
];

export const STATS = [
  { value: "13+", label: "Public repos" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "AI-assisted builds" },
  { value: "∞", label: "Ideas shipped" },
];

// Category tag used by the project filter (keyed by repo name)
export const REPO_TAGS = {
  khet: "Full-Stack",
  "PG-HOSTAL-INFO": "Full-Stack",
  "real-estate-land": "Full-Stack",
  "group-fund": "Full-Stack",
  "temples-tasks": "Frontend",
  "poultry-farm-tracker": "Frontend",
  "studyflow-student-tracker": "Frontend",
  "fitness-traker": "Frontend",
  khentara: "Frontend",
  cherry: "AI",
  "ai-agent-rag": "AI",
};

export const FEATURED = ["khet", "PG-HOSTAL-INFO", "ai-agent-rag", "cherry"];

// Repos that should never appear on the portfolio (filtered from the live API too)
export const EXCLUDED_REPOS = ["for-her-apology", "apology-website"];

// Live GitHub Pages demos (used as fallback; the API's has_pages wins when reachable)
export const DEMO_URLS = {
  khet: "https://hanmanthmarkanti-ux.github.io/khet/",
  "temples-tasks": "https://hanmanthmarkanti-ux.github.io/temples-tasks/",
  "poultry-farm-tracker": "https://hanmanthmarkanti-ux.github.io/poultry-farm-tracker/",
  "PG-HOSTAL-INFO": "https://hanmanthmarkanti-ux.github.io/PG-HOSTAL-INFO/",
  "studyflow-student-tracker": "https://hanmanthmarkanti-ux.github.io/studyflow-student-tracker/",
  "fitness-traker": "https://hanmanthmarkanti-ux.github.io/fitness-traker/",
  "group-fund": "https://hanmanthmarkanti-ux.github.io/group-fund/",
  khentara: "https://hanmanthmarkanti-ux.github.io/khentara/",
};

// Fill these in to light up the contact buttons (empty string = button hidden)
export const CONTACT = {
  email: "",
  linkedin: "",
};

export const FALLBACK_REPOS = [
  {
    name: "khet",
    description:
      "Farm & Home Tracker for Indian farmers — manage crops, per-crop expenses, home budgeting and profit tracking from a phone.",
    language: "HTML",
    stars: 1,
    updated: "2026-10-28",
    url: "https://github.com/hanmanthmarkanti-ux/khet",
    tag: "Full-Stack",
  },
  {
    name: "temples-tasks",
    description: "A JavaScript task manager for temple visits, sevas and daily schedules.",
    language: "JavaScript",
    stars: 0,
    updated: "2026-09-19",
    url: "https://github.com/hanmanthmarkanti-ux/temples-tasks",
    tag: "Frontend",
  },
  {
    name: "real-estate-land",
    description: "Real-estate and land listings platform built with TypeScript.",
    language: "TypeScript",
    stars: 1,
    updated: "2026-09-14",
    url: "https://github.com/hanmanthmarkanti-ux/real-estate-land",
    tag: "Full-Stack",
  },
  {
    name: "poultry-farm-tracker",
    description: "Poultry farm tracker for flock counts, feed cycles and daily farm records.",
    language: "HTML",
    stars: 1,
    updated: "2026-09-05",
    url: "https://github.com/hanmanthmarkanti-ux/poultry-farm-tracker",
    tag: "Frontend",
  },
  {
    name: "PG-HOSTAL-INFO",
    description:
      "Premium PG/hostel finder for Telangana — search, city & distance filters, price slider, real photos and instant booking.",
    language: "JavaScript",
    stars: 2,
    updated: "2026-08-07",
    url: "https://github.com/hanmanthmarkanti-ux/PG-HOSTAL-INFO",
    tag: "Full-Stack",
  },
  {
    name: "studyflow-student-tracker",
    description: "StudyFlow — an all-in-one student tracker for academic success.",
    language: "HTML",
    stars: 1,
    updated: "2026-07-28",
    url: "https://github.com/hanmanthmarkanti-ux/studyflow-student-tracker",
    tag: "Frontend",
  },
  {
    name: "cherry",
    description:
      "Voice-activated personal assistant with speech recognition, female voice replies and bilingual English/Telugu support.",
    language: "Python",
    stars: 1,
    updated: "2026-07-20",
    url: "https://github.com/hanmanthmarkanti-ux/cherry",
    tag: "AI",
  },
  {
    name: "ai-agent-rag",
    description:
      "Hybrid CLI combining RAG over your own documents (local vector store) with an LLM agent that calls tools: web_search, calculator, file reader.",
    language: "Python",
    stars: 1,
    updated: "2026-07-19",
    url: "https://github.com/hanmanthmarkanti-ux/ai-agent-rag",
    tag: "AI",
  },
  {
    name: "fitness-traker",
    description: "Fitness tracker web app for workouts, reps and progress.",
    language: "HTML",
    stars: 1,
    updated: "2026-07-19",
    url: "https://github.com/hanmanthmarkanti-ux/fitness-traker",
    tag: "Frontend",
  },
  {
    name: "khentara",
    description: "Tools and resources built to help Indian farmers.",
    language: "HTML",
    stars: 1,
    updated: "2026-06-17",
    url: "https://github.com/hanmanthmarkanti-ux/khentara",
    tag: "Frontend",
  },
  {
    name: "group-fund",
    description: "Shared fund manager that tracks payments across a group of people.",
    language: "HTML",
    stars: 1,
    updated: "2026-06-21",
    url: "https://github.com/hanmanthmarkanti-ux/group-fund",
    tag: "Full-Stack",
  },
];

export const SKILLS = [
  {
    title: "Frontend",
    icon: "code",
    blurb: "Interfaces that feel fast, modern and alive.",
    items: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive UI", "GSAP / Motion"],
  },
  {
    title: "Backend",
    icon: "server",
    blurb: "APIs, auth and data models that hold up in production.",
    items: ["Node.js", "REST APIs", "Python", "Supabase", "Postgres", "Auth & Sessions"],
  },
  {
    title: "AI Engineering",
    icon: "sparkles",
    blurb: "AI woven into products — not bolted on top.",
    items: ["LLM APIs", "RAG pipelines", "Vector search", "Tool-calling agents", "Prompt design", "Copilot workflows"],
  },
  {
    title: "Workflow",
    icon: "rocket",
    blurb: "From blank repo to deployed, in AI-speed cycles.",
    items: ["Git & GitHub", "AI pair-programming", "Rapid prototyping", "CI-ready builds", "Vercel / Pages", "Testing & QA"],
  },
];

export const PROCESS = [
  { step: "01", title: "Scope", text: "Clarify the problem, users and the smallest lovable version." },
  { step: "02", title: "Design", text: "Lay out data models, API contracts and the visual system." },
  { step: "03", title: "Build", text: "Full-stack coding with AI pair-programming for velocity." },
  { step: "04", title: "Ship", text: "Test, polish, deploy and iterate on real feedback." },
];
