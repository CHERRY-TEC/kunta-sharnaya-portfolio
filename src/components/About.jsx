import Reveal from "./Reveal.jsx";
import { PROFILE } from "../data/profile.js";

const MARQUEE = [
  "React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Python",
  "Supabase", "LLM APIs", "RAG", "AI Agents", "Prompt Engineering", "Git", "Vercel",
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="section-label">About me</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A builder who ships the <span className="gradient-text">whole product</span>, not just a slice.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80} className="glass glass-hover rounded-3xl p-7 sm:p-9">
            <p className="text-[1.05rem] leading-relaxed text-slate-300">
              I&apos;m <span className="font-semibold text-white">Hanmanth</span> — a full-stack developer who
              builds complete websites and web apps with AI at the core of the workflow. From the first
              wireframe to the production database, I own every layer of the stack.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              AI is my leverage: I use it to prototype faster, write cleaner code, and fold real
              intelligence — RAG search, tool-calling agents, smart assistants — into products people
              actually use. The result is the kind of velocity that usually needs a whole team.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["End-to-end ownership", "AI-first development", "Clean, maintainable code", "Fast iteration"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={160} className="glass glass-hover rounded-3xl p-7 sm:p-9">
            <h3 className="font-display text-lg font-semibold">What I bring</h3>
            <ul className="mt-5 space-y-4">
              {[
                { k: "Full-stack delivery", v: "Frontends, APIs, auth and databases — one person, whole app." },
                { k: "AI features", v: "RAG over your data, agents with tools, LLM-powered experiences." },
                { k: "Product sense", v: "Design choices that serve users, not just the tech stack." },
                { k: "Speed", v: "AI-assisted cycles that get working software in front of users early." },
              ].map((row) => (
                <li key={row.k} className="flex gap-3.5">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{row.k}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{row.v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* infinite tech marquee */}
      <div className="relative mt-16 overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060b] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060b] to-transparent" />
        <div className="marquee-track gap-3">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
