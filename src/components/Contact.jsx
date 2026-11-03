import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { GitHubIcon } from "./Navbar.jsx";
import { CONTACT, PROFILE } from "../data/profile.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.github);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(PROFILE.githubUrl, "_blank", "noopener");
    }
  };

  return (
    <section id="contact" className="relative px-5 pb-14 pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[32px] px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/40 via-fuchsia-500/25 to-cyan-500/40 blur-3xl" />

            <div className="relative">
              <span className="section-label justify-center">Contact</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Got an idea? Let&apos;s <span className="gradient-text">build it together.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
                Open to freelance projects, collaborations and full-time roles — especially anything
                full-stack or AI-powered. Fastest way to reach me is GitHub.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                {CONTACT.email && (
                  <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    Email me
                  </a>
                )}
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`btn ${CONTACT.email ? "btn-ghost" : "btn-primary"}`}
                >
                  <GitHubIcon />
                  Message me on GitHub
                </a>
                {CONTACT.linkedin && (
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.35-2.04-3.35-2.04 0-2.36 1.6-2.36 3.25V21h-4V9Z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                <button type="button" onClick={copyHandle} className="btn btn-ghost">
                  {copied ? "Copied ✓" : `Copy @${PROFILE.github}`}
                </button>
                <a href="#projects" className="btn btn-ghost">
                  Browse projects
                </a>
              </div>

              <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
                <span className="flex items-center gap-2">
                  <span className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
                  Available now
                </span>
                <span>{PROFILE.location}</span>
                <span>Remote-friendly</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/8 px-1 pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName} — built with React, Vite & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 transition hover:text-white">
            <GitHubIcon /> GitHub
          </a>
          <a href="#top" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
