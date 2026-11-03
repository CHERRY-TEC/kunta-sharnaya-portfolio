import Reveal from "./Reveal.jsx";
import { PROCESS } from "../data/profile.js";

export default function Process() {
  return (
    <section id="process" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="section-label">How I work</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A tight loop from <span className="gradient-text">idea to shipped</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:block" />
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="glass glass-hover relative h-full rounded-3xl p-6">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 font-display text-lg font-bold text-white shadow-lg shadow-violet-600/30">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
