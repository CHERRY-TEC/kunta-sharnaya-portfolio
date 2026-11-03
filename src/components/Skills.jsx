import Reveal from "./Reveal.jsx";
import { SKILLS } from "../data/profile.js";

function Icon({ name }) {
  const common = { className: "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" };
  if (name === "code")
    return (
      <svg {...common}>
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    );
  if (name === "server")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </svg>
    );
  if (name === "sparkles")
    return (
      <svg {...common}>
        <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z" />
        <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M5 13l4 4L19 7" />
      <path d="M12 22a10 10 0 1 1 0-20c4 0 6 2 6 5s-2 4-4 4h-1a2 2 0 0 0-1 3.5A2 2 0 0 1 12 22Z" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="section-label">Skills</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            The stack I use to go from <span className="gradient-text">prompt to production</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="glass glass-hover group h-full rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 text-violet-300 ring-1 ring-white/10 transition group-hover:from-violet-500 group-hover:to-cyan-500 group-hover:text-white">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1.5 text-[12px] font-medium text-slate-300 transition group-hover:border-violet-400/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
