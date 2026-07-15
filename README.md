# Siwani Sinha — Portfolio (React + TypeScript)

Two routes, one codebase, one shared data file — so the story version and terminal version can never drift apart.

- `/` — Coffee-Break storytelling scroll page (Beans → Grind → Brew → Pour → Sip)
- `/terminal` — Coffee-shop terminal, type `help`, `experience`, `projects`, etc.
- `src/data/resumeData.ts` — the single source of truth both pages read from. Edit your resume content **here only**.

Built with Vite + React + TypeScript. Routing uses `HashRouter` (URLs look like `/#/terminal`) specifically because GitHub Pages has no server-side routing — this avoids 404s on refresh with zero extra config.

## Before you deploy

1. Open `src/data/resumeData.ts` and replace the two `github: '#'` / `linkedin: '#'` placeholders in `profile` with your real profile URLs.
2. Open `vite.config.ts` and confirm `base: '/siwani-portfolio/'` matches your actual GitHub repo name. If you name the repo something else, update this line to match — otherwise fonts/assets will 404 on the live site.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to GitHub Pages (automatic, via GitHub Actions)

1. Push this whole folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "portfolio: react + ts"
   git branch -M main
   git remote add origin https://github.com/<your-username>/siwani-portfolio.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source → GitHub Actions** (not "Deploy from a branch" — the included workflow handles the build itself).
3. That's it. The workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`: it installs dependencies, runs `npm run build`, and publishes the `dist/` output to Pages.
4. Check the **Actions** tab to watch the build. Once it's green, your live URL appears under **Settings → Pages** — something like `https://<your-username>.github.io/siwani-portfolio/`.
5. From then on: edit code, `git push`, and the live site rebuilds and redeploys itself within ~a minute. No manual build step, ever — this is what keeps your deployed site and your source code permanently in sync.

## Project structure

```
src/
  data/resumeData.ts       ← single source of truth for all content
  pages/
    StoryPage.tsx + .css    ← scrolling story version
    TerminalPage.tsx + .css ← interactive terminal version
  components/story/         ← Hero, Beans, Grind, Brew, Pour, Sip, Nav, Reveal, ScrollGauge
  styles/variables.css      ← shared coffee palette design tokens
  App.tsx                   ← routing between the two pages
```
