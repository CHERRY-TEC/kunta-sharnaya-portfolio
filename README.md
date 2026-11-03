# Hanmanth — Portfolio

Dark glassmorphism portfolio for **Markanti Hanmanth** — full-stack developer working AI-first.
Projects are pulled **live from the GitHub API** (`hanmanthmarkanti-ux`) with a baked-in fallback snapshot so the page still renders offline.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- No other runtime dependencies — animations are hand-rolled (canvas particle field, CSS 3D tilt, reveal-on-scroll)

## Run

```bash
npm install
npm run dev      # http://localhost:5180
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.

1. Push this folder to a repo on **hanmanthmarkanti-ux** (e.g. `hanmanth-portfolio`).
2. Repo → **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the site goes live at `https://hanmanthmarkanti-ux.github.io/hanmanth-portfolio/`.

If the repo is named differently, update the 3 URLs in `index.html` (canonical + `og:url` + JSON-LD) to match.

## Build / deploy

```bash
npm run build    # outputs dist/ (relative paths, safe for GitHub Pages subfolders)
npm run preview
```

## Where to edit things

| What | File |
| --- | --- |
| Name, GitHub handle, avatar, stats | `src/data/profile.js` → `PROFILE`, `STATS` |
| **Email + LinkedIn (contact buttons)** | `src/data/profile.js` → `CONTACT` (empty string = button hidden) |
| **Live demo URLs** | `src/data/profile.js` → `DEMO_URLS` (live API `has_pages` wins) |
| Project fallback descriptions & tags | `src/data/profile.js` → `FALLBACK_REPOS`, `REPO_TAGS` |
| Featured projects (shown large) | `src/data/profile.js` → `FEATURED` |
| Skills cards | `src/data/profile.js` → `SKILLS` |
| Process steps | `src/data/profile.js` → `PROCESS` |
| Colours, glass, buttons, animations | `src/index.css` |

Note: your home folder has a `postcss.config.js` with Tailwind **v3** — the local `postcss.config.js` here exists so Vite doesn't pick that up. Keep it.
