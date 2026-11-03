# Kunta Sharnaya — Portfolio

Dark glassmorphism portfolio for **Kunta Sharnaya** — CSE undergraduate at Malla Reddy Vishwavidyapeeth and AI developer.

Projects are pulled **live from the GitHub API** (`CHERRY-TEC`) with a baked-in fallback snapshot so the page still renders offline.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- No other runtime dependencies — animations are hand-rolled (canvas particle field, CSS gradient frames, reveal-on-scroll)

## Run

```bash
npm install
npm run dev      # http://localhost:5180
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.

1. Push this folder to a repo on **CHERRY-TEC** (e.g. `kunta-sharnaya-portfolio`).
2. Repo → **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the site goes live at `https://cherry-tec.github.io/kunta-sharnaya-portfolio/`.

If the repo is named differently, update the 3 URLs in `index.html` (canonical + `og:url` + JSON-LD) to match.

## Deploy (Vercel)

This machine's network hands Node a NAT64 IPv6 address Vercel's API can't use, so always set:

```bash
$env:NODE_OPTIONS="--dns-result-order=ipv4first"; vercel deploy --prod --yes
```

Live alias: `https://kunta-sharnaya-portfolio.vercel.app`

## Where to edit things

| What | File |
| --- | --- |
| Name, college, GitHub handle, avatar, stats | `src/data/profile.js` → `PROFILE`, `STATS`, `ROLES` |
| **Email + LinkedIn (contact buttons)** | `src/data/profile.js` → `CONTACT` (empty string = button hidden) |
| **Live demo URLs** | `src/data/profile.js` → `DEMO_URLS` (live API `has_pages` wins) |
| Project fallback descriptions & tags | `src/data/profile.js` → `FALLBACK_REPOS`, `REPO_TAGS` |
| Featured projects (shown large) | `src/data/profile.js` → `FEATURED` |
| Hidden repos | `src/data/profile.js` → `EXCLUDED_REPOS` |
| Skills cards | `src/data/profile.js` → `SKILLS` |
| Process steps | `src/data/profile.js` → `PROCESS` |
| Colours, glass, buttons, animations | `src/index.css` |

Note: your home folder has a `postcss.config.js` with Tailwind **v3** — the local `postcss.config.js` here exists so Vite doesn't pick that up. Keep it.
