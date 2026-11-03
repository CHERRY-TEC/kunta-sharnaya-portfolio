import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { GitHubIcon } from "./Navbar.jsx";
import {
  CONTACT,
  DEMO_URLS,
  EXCLUDED_REPOS,
  FALLBACK_REPOS,
  FEATURED,
  PROFILE,
  REPO_TAGS,
} from "../data/profile.js";

const FILTERS = ["All", "Full-Stack", "AI", "Frontend"];

const LANG_COLORS = {
  HTML: "#e34c26",
  CSS: "#563d7c",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
};

/** Live repos from the GitHub API, merged over the baked-in snapshot. */
function useGithubRepos() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${PROFILE.github}/repos?sort=pushed&per_page=40`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        const fallbackByName = Object.fromEntries(FALLBACK_REPOS.map((r) => [r.name, r]));
        const merged = data
          .filter((r) => !r.fork && !EXCLUDED_REPOS.includes(r.name))
          .map((r) => {
            const snap = fallbackByName[r.name];
            return {
              name: r.name,
              // prefer the curated (README-sourced) description when GitHub has none
              description:
                snap?.description ||
                r.description ||
                `Personal project built and maintained by ${PROFILE.fullName}.`,
              language: r.language || snap?.language || "Code",
              stars: r.stargazers_count ?? 0,
              updated: (r.pushed_at || "").slice(0, 10),
              url: r.html_url,
              homepage: r.homepage,
              // live GitHub Pages status beats the static map
              pages: r.has_pages ? `https://${r.owner.login}.github.io/${r.name}/` : null,
              tag: REPO_TAGS[r.name] || snap?.tag || "Frontend",
            };
          });
        setRepos(merged);
        setLive(true);
      })
      .catch(() => {
        /* offline → keep the snapshot */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return { repos, live, loading };
}

function ProjectCard({ repo, featured }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const color = LANG_COLORS[repo.language] || "#8b5cf6";
  const demo = repo.pages || DEMO_URLS[repo.name] || null;

  return (
    <article
      ref={ref}
      className={`glass tilt group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 ${
        featured ? "sm:p-7" : ""
      }`}
      style={{
        borderColor: featured ? "rgba(139,92,246,0.35)" : undefined,
        boxShadow: featured ? "0 30px 70px -45px rgba(139,92,246,0.9)" : undefined,
      }}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:from-violet-500/10 group-hover:to-cyan-500/10 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 text-violet-200 ring-1 ring-white/10">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
          </svg>
        </span>
        <div className="flex items-center gap-2">
          {featured && (
            <span className="rounded-full border border-violet-400/30 bg-violet-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-300">
              Featured
            </span>
          )}
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
            {repo.tag}
          </span>
        </div>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
        {repo.name.replace(/-/g, " ")}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted">{repo.description}</p>

      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4 text-xs">
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
            {repo.language}
          </span>
          <span className="flex items-center gap-1.5" title={`${repo.stars} stars`}>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="m12 17.3 6.2 3.7-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.8-1.6 7 6.2-3.7Z" />
            </svg>
            {repo.stars}
          </span>
          <span className="hidden sm:inline">{repo.updated}</span>
        </div>

        <div className="flex items-center gap-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-md shadow-violet-700/30 transition hover:brightness-110"
              aria-label={`Open the live demo of ${repo.name}`}
            >
              Live demo
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          )}
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.05] px-3 py-1.5 font-semibold text-violet-300 transition hover:border-violet-400/50 hover:text-cyan-300"
            aria-label={`Open ${repo.name} source code on GitHub`}
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { repos, live, loading } = useGithubRepos();
  const [filter, setFilter] = useState("All");

  const featuredSet = useMemo(() => new Set(FEATURED), []);
  const featured = useMemo(() => repos.filter((r) => featuredSet.has(r.name)), [repos, featuredSet]);
  const rest = useMemo(
    () => repos.filter((r) => !featuredSet.has(r.name)),
    [repos, featuredSet]
  );

  const visibleRest = filter === "All" ? rest : rest.filter((r) => r.tag === filter);
  const visibleFeatured = filter === "All" ? featured : featured.filter((r) => r.tag === filter);
  const shown = [...visibleFeatured, ...visibleRest];

  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="section-label">Selected work</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Projects pulled straight from <span className="gradient-text">my GitHub</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted">
              <span className={`h-2 w-2 rounded-full ${live ? "bg-emerald-400" : "bg-amber-400"}`} />
              {loading ? "Syncing with GitHub…" : live ? "Live data from GitHub API" : "Offline snapshot of GitHub"}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-600/25"
                      : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-violet-400/40 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {loading && repos.length === 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass h-56 animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="mt-10 space-y-5">
            {shown.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                {shown.slice(0, 4).map((repo) => (
                  <Reveal key={repo.name} delay={40}>
                    <ProjectCard repo={repo} featured={featuredSet.has(repo.name) && filter === "All"} />
                  </Reveal>
                ))}
              </div>
            )}

            {shown.length > 4 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {shown.slice(4).map((repo, i) => (
                  <Reveal key={repo.name} delay={(i % 3) * 70}>
                    <ProjectCard repo={repo} />
                  </Reveal>
                ))}
              </div>
            )}

            {shown.length === 0 && (
              <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-8 text-center text-sm text-muted">
                No projects in this category yet.
              </p>
            )}
          </div>
        )}

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              <GitHubIcon />
              See every repository on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
