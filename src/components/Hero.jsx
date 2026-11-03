import { useEffect, useRef, useState } from "react";
import { PROFILE, ROLES, STATS } from "../data/profile.js";
import { GitHubIcon } from "./Navbar.jsx";

/** Typewriter cycle through the role list. */
function useTypedRole() {
  const [text, setText] = useState("");
  const stateRef = useRef({ index: 0, deleting: false });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(ROLES[0]);
      return undefined;
    }

    let timer;
    const tick = () => {
      const s = stateRef.current;
      const current = ROLES[s.index];
      s.deleting ? (s.length = s.length - 1) : (s.length = s.length + 1);

      setText(current.slice(0, s.length));

      let delay = s.deleting ? 45 : 95;
      if (!s.deleting && s.length === current.length) {
        delay = 1700;
        s.deleting = true;
      } else if (s.deleting && s.length === 0) {
        s.deleting = false;
        s.index = (s.index + 1) % ROLES.length;
        delay = 320;
      }
      timer = setTimeout(tick, delay);
    };

    const s = stateRef.current;
    s.length = 0;
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

/** Subtle 3D parallax that follows the pointer. */
function usePointerTilt(strength = 12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg) translateZ(0)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}

export default function Hero() {
  const typed = useTypedRole();
  const cardRef = usePointerTilt(8);

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance & full-time roles
          </div>

          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Hey, I&apos;m
          </p>

          <h1 className="font-display text-[clamp(2.9rem,8vw,5.2rem)] font-bold leading-[1.02]">
            {PROFILE.fullName.split(" ")[0]}{" "}
            <span className="gradient-text">{PROFILE.fullName.split(" ").slice(1).join(" ")}</span>
          </h1>

          <h2 className="mt-4 font-display text-[clamp(1.25rem,3.4vw,2rem)] font-semibold text-slate-200">
            {typed}
            <span className="caret" aria-hidden="true" />
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-200">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 4 9 5-9 5-9-5 9-5Z" />
                <path d="M7 11.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5" />
              </svg>
              {PROFILE.education} · {PROFILE.college}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {PROFILE.role}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            I build <span className="text-white">full-stack web products end-to-end</span> — UI, APIs,
            database and AI features — using an AI-native workflow that turns an idea into a deployed
            app in days, not months.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View my work
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
              <GitHubIcon />
              github.com/{PROFILE.github}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-2xl px-4 py-3.5">
                <dt className="order-2 text-[11px] uppercase tracking-wider text-muted">{s.label}</dt>
                <dd className="font-display text-xl font-bold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Avatar / identity card with 3D tilt */}
        <div ref={cardRef} className="relative mx-auto w-full max-w-sm">
          <div className="glass relative rounded-[28px] p-6 shadow-[0_40px_100px_-40px_rgba(124,58,237,0.85)]">
            {/* Avatar with animated gradient ring */}
            <div className="relative mx-auto h-44 w-44">
              <div className="frame-shift h-full w-full rounded-full p-[3px] shadow-[0_28px_70px_-32px_rgba(139,92,246,0.95)]">
                <div className="h-full w-full rounded-full bg-[#07080f] ring-1 ring-white/10">
                  <img
                    src={PROFILE.avatar}
                    alt={`${PROFILE.fullName} — profile photo`}
                    loading="eager"
                    className="h-full w-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
              <span className="absolute -bottom-2 left-1/2 inline-block max-w-[95%] -translate-x-1/2 truncate rounded-full border border-white/15 bg-[#0a0c16]/90 px-3 py-1 text-[10px] font-semibold tracking-tight text-slate-200 shadow-lg backdrop-blur">
                {PROFILE.github}
              </span>
            </div>

            <div className="mt-9 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                <span className="shrink-0 text-muted">Focus</span>
                <span className="text-right font-medium text-slate-100">AI + full-stack</span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                <span className="shrink-0 text-muted">Education</span>
                <span className="text-right font-medium text-slate-100">{PROFILE.education}</span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                <span className="shrink-0 text-muted">College</span>
                <span className="text-right font-medium leading-snug text-slate-100">{PROFILE.college}</span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                <span className="shrink-0 text-muted">Based in</span>
                <span className="text-right font-medium text-slate-100">{PROFILE.location}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 px-3 py-2.5 text-xs font-medium text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {STATS[0].value} repos · AI-first builds
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted transition hover:text-white lg:flex"
      >
        Scroll
        <span className="h-9 w-px bg-gradient-to-b from-violet-400 to-transparent" />
      </a>
    </section>
  );
}
