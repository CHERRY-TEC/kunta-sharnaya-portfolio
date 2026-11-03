// Profile + GitHub data for the portfolio.
// FALLBACK_REPOS is a snapshot of github.com/CHERRY-TEC so the site still
// renders every project when the live GitHub API is unreachable.

export const PROFILE = {
  firstName: "Sharnaya",
  fullName: "Kunta Sharnaya",
  role: "AI Developer",
  education: "B.Tech CSE",
  college: "Malla Reddy Vishwavidyapeeth",
  github: "CHERRY-TEC",
  githubUrl: "https://github.com/CHERRY-TEC",
  avatar: "https://avatars.githubusercontent.com/u/294595837?v=4",
  location: "India",
  focus: "AI agents, RAG systems & full-stack products",
  bio: "I'm a CSE undergraduate at Malla Reddy Vishwavidyapeeth and an AI developer. I design and ship intelligent, full-stack web products — frontends, APIs, databases and AI features — with an AI-native workflow that takes an idea from zero to deployed fast.",
};

// Rotating hero headline
export const ROLES = ["AI Developer", "Full-Stack Developer", "RAG & Agent Engineer"];

export const STATS = [
  { value: "16+", label: "Public repos" },
  { value: "4+", label: "Languages" },
  { value: "100%", label: "AI-assisted builds" },
  { value: "∞", label: "Ideas shipped" },
];

// Category tag used by the project filter (keyed by repo name)
export const REPO_TAGS = {
  nearby: "Full-Stack",
  "css-zero-to-hero": "Frontend",
  "html-master-quiz": "Frontend",
  "studybuddy-tracker": "Full-Stack",
  "ai-self-improving-agent": "AI",
  "python-mastery-website": "Frontend",
  "resume-checker": "Full-Stack",
  securestaff: "Full-Stack",
  realestate: "Full-Stack",
  "trello-saas": "Full-Stack",
  reantease: "Frontend",
  "college-event-management": "Full-Stack",
  "collaborative-editor": "Full-Stack",
  "CSE-ROADMAP": "Frontend",
  "AIML-ROADMAP": "Frontend",
  "CHERRY-WEB-COURSE": "Frontend",
};

export const FEATURED = ["nearby", "trello-saas", "ai-self-improving-agent", "collaborative-editor"];

// Repos that should never appear on the portfolio (filtered from the live API too)
export const EXCLUDED_REPOS = ["kunta-sharnaya-portfolio", "hanmanth-portfolio"];

// Live GitHub Pages demos (used as fallback; the API's has_pages wins when reachable)
export const DEMO_URLS = {
  "html-master-quiz": "https://cherry-tec.github.io/html-master-quiz/",
  "studybuddy-tracker": "https://cherry-tec.github.io/studybuddy-tracker/",
  "trello-saas": "https://cherry-tec.github.io/trello-saas/",
  "AIML-ROADMAP": "https://cherry-tec.github.io/AIML-ROADMAP/",
  "CHERRY-WEB-COURSE": "https://cherry-tec.github.io/CHERRY-WEB-COURSE/",
};

// Fill these in to light up the contact buttons (empty string = button hidden)
export const CONTACT = {
  email: "",
  linkedin: "",
};

export const FALLBACK_REPOS = [
  {
    name: "nearby",
    description: "Find students near you on campus and chat safely — React + Vite + Tailwind + Supabase.",
    language: "TypeScript",
    stars: 0,
    updated: "2026-11-01",
    url: "https://github.com/CHERRY-TEC/nearby",
    tag: "Full-Stack",
  },
  {
    name: "css-zero-to-hero",
    description: "Learn CSS from Zero to Hero — a complete tutorial with story-based learning.",
    language: "HTML",
    stars: 1,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/css-zero-to-hero",
    tag: "Frontend",
  },
  {
    name: "html-master-quiz",
    description: "HTML quiz with 50 questions, from easy to extremely hard.",
    language: "JavaScript",
    stars: 1,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/html-master-quiz",
    tag: "Frontend",
  },
  {
    name: "studybuddy-tracker",
    description:
      "Study tracker for two friends — dashboard, Pomodoro & focus timer, weekly goals, chat, gamification and analytics.",
    language: "HTML",
    stars: 2,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/studybuddy-tracker",
    tag: "Full-Stack",
  },
  {
    name: "ai-self-improving-agent",
    description: "AI agent that modifies and improves its own code autonomously, with free Ollama LLM support.",
    language: "Python",
    stars: 2,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/ai-self-improving-agent",
    tag: "AI",
  },
  {
    name: "python-mastery-website",
    description: "Complete Python learning hub with tutorials, exercises, quizzes and resources.",
    language: "HTML",
    stars: 1,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/python-mastery-website",
    tag: "Frontend",
  },
  {
    name: "resume-checker",
    description:
      "Free resume review tool — upload a resume, paste a job description, get detailed analysis and recommendations.",
    language: "TypeScript",
    stars: 1,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/resume-checker",
    tag: "Full-Stack",
  },
  {
    name: "securestaff",
    description:
      "Website platform for RBM Security Services (Uppal, Hyderabad) — legacy Flask app and new RBM platform, both live.",
    language: "HTML",
    stars: 2,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/securestaff",
    tag: "Full-Stack",
  },
  {
    name: "realestate",
    description: "Real-estate listings web app built with TypeScript.",
    language: "TypeScript",
    stars: 0,
    updated: "2026-09-15",
    url: "https://github.com/CHERRY-TEC/realestate",
    tag: "Full-Stack",
  },
  {
    name: "trello-saas",
    description:
      "Project management SaaS built with Next.js, Prisma and PostgreSQL — boards, columns and drag-and-drop cards with auth.",
    language: "TypeScript",
    stars: 0,
    updated: "2026-08-26",
    url: "https://github.com/CHERRY-TEC/trello-saas",
    tag: "Full-Stack",
  },
  {
    name: "rentease",
    description: "Rental property listings web app.",
    language: "HTML",
    stars: 0,
    updated: "2026-08-24",
    url: "https://github.com/CHERRY-TEC/rentease",
    tag: "Frontend",
  },
  {
    name: "college-event-management",
    description:
      "Full-stack MERN app for college events with JWT auth and role-based access for admin, faculty and students.",
    language: "JavaScript",
    stars: 0,
    updated: "2026-08-23",
    url: "https://github.com/CHERRY-TEC/college-event-management",
    tag: "Full-Stack",
  },
  {
    name: "collaborative-editor",
    description:
      "Real-time collaborative document editor powered by CRDTs (Yjs), WebSockets, Redis Pub/Sub and PostgreSQL.",
    language: "JavaScript",
    stars: 1,
    updated: "2026-08-22",
    url: "https://github.com/CHERRY-TEC/collaborative-editor",
    tag: "Full-Stack",
  },
  {
    name: "CSE-ROADMAP",
    description: "CSE student roadmap with curated learning paths and resources.",
    language: "TypeScript",
    stars: 1,
    updated: "2026-08-22",
    url: "https://github.com/CHERRY-TEC/CSE-ROADMAP",
    tag: "Frontend",
  },
  {
    name: "AIML-ROADMAP",
    description: "AI & ML learning roadmap with curated paths, tools and resources.",
    language: "TypeScript",
    stars: 1,
    updated: "2026-08-22",
    url: "https://github.com/CHERRY-TEC/AIML-ROADMAP",
    tag: "Frontend",
  },
  {
    name: "CHERRY-WEB-COURSE",
    description: "Complete web development course to master HTML, CSS and JavaScript.",
    language: "HTML",
    stars: 2,
    updated: "2026-07-31",
    url: "https://github.com/CHERRY-TEC/CHERRY-WEB-COURSE",
    tag: "Frontend",
  },
];

export const SKILLS = [
  {
    title: "AI Engineering",
    icon: "sparkles",
    blurb: "AI woven into products — not bolted on top.",
    items: ["LLM APIs", "RAG pipelines", "Agents & tools", "Vector search", "Prompt design", "Ollama / local LLMs"],
  },
  {
    title: "Frontend",
    icon: "code",
    blurb: "Interfaces that feel fast, modern and alive.",
    items: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive UI", "Motion & effects"],
  },
  {
    title: "Backend",
    icon: "server",
    blurb: "APIs, auth and data models that hold up in production.",
    items: ["Node.js", "REST APIs", "Python", "Supabase", "Postgres", "Auth & Sessions"],
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
