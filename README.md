# Mechanical Engineering Portfolio

A React and TypeScript portfolio that presents mechanical engineering work as concise technical case studies. It is configured for GitHub Pages and uses hash-based navigation, so individual project links remain reliable after a refresh.

## Running locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local address shown in the terminal.

## Building

```powershell
npm.cmd run build
```

The production website is generated in `dist/`.

## Personal details

Update your name, email, LinkedIn, GitHub, resume path, and bio in `src/config/profile.ts`.

Keep your resume's filename in `public/resume/` and set `profile.resume` in `src/config/profile.ts` to `resume/<your filename>.pdf`. No renaming is required. The current selection is `Resume 2026-2027 Alfred Nonis.pdf`; if other PDFs are present, they remain unused until explicitly selected. The resume itself is not modified.

## Updating the Portfolio with Codex

Open this repository in Codex and describe the change in plain language. The coding assistant should follow `AGENTS.md` when updating the portfolio.

```text
Add the attached image to the Baja FEA section.
This is the equivalent stress result for the 10,000 lbf frontal-impact load case.
```

```text
Add the following information to the REACT magnetometer section:
[my new information]
```

```text
Add a new project called ______ using the existing project architecture.
```

## Editing portfolio content

- **Text:** projects in `src/data/projects.ts`; experience in `src/data/experience.ts`; home sections and skills in `src/data/home.ts`; hero/profile/contact in `src/config/profile.ts`.
- **Images:** drag files into the matching chapter folder below. Folder location selects the project/experience and chapter. Any reasonable filename works with `.png`, `.jpg`, `.jpeg`, `.webp` or `.avif` (including uppercase extensions). Empty folders render nothing; no manual imports are needed.
- **Order:** slides sort alphabetically by filename. Numbered prefixes such as `01-sketch.png`, `02-hand-calcs.png`, `03-final-cad.png` are recommended, not required. The text after a prefix can be anything reasonable.
- **Captions:** `02-hand-calculation.jpg` becomes “Hand calculation”. To customize, add `mediaOverrides: { '02-hand-calculation.jpg': { caption: 'Member sizing', alt: 'Hand calculation for member sizing', mediaFit: 'contain' } }` to that chapter in project/experience data.
- **Fit:** technical images default to `contain`, preserving CAD and equations. Set chapter `mediaFit: 'cover'` for photos, or override individual images. Lightboxes always show the full image.
- **Hero:** put the intended photo in `src/assets/home/` and set `heroFilename` in `src/config/profile.ts` to its existing filename. The current selection is `hero-welding.jpg`. No renaming is required and unrelated photos are never substituted. Missing selected photos render no empty frame. Inspect the desktop crop; mobile shows the full photo.
- **Refresh:** save/rebuild with `npm.cmd run build`. Vite normally detects added files; if a new file does not appear, restart `npm.cmd run dev`.

The shared `src/data/media.ts` loader merges new files into the existing slideshow. Current `public/images/` assets stay in place. Numbered copies matching an existing explicit image filename are skipped; avoid adding renamed copies of an existing image.

The dev server occupies its terminal. Before running `npm.cmd run build`, either stop it with **Ctrl + C**, or open a **second VS Code terminal** and leave the server running in the first. Use `npm.cmd run dev` to start/restart it. Do not change PowerShell execution policy.

```text
src/assets/
  home/                         # selected hero photo; filename is configurable
  project-media/
    baja/
      01-design/
      02-cad-analysis/
      03-integration/
      04-fabrication/
    react/
      01-experimental-hardware/
      02-magnetic-packaging/
      03-damping/
    velocity-stack/
      01-concept/
      02-cad/
      03-testing/
    engine-model/
      01-mechanisms/
      02-assembly/
      03-completed/
    go-kart/
      01-concept/
      02-design/
      03-build-test/
  experience-media/
    agentic-innovations/
      01-workflow/
      02-development/
      03-validation/
    encotech/
```

## Previewing the Website Locally

From the repository terminal:

```powershell
npm.cmd install
npm.cmd run dev
```

Vite will display a local URL, typically `http://localhost:5173/`. Open it in a browser. While the dev server is running, saved changes should automatically refresh in the browser.

Validate a production build with:

```powershell
npm.cmd run build
```

## Adding or editing a project

The reusable project-page renderer is driven by `src/data/projects.ts`. Copy an existing project object, edit its fields and `sections`, then set each chapter's `mediaFolder` and add files under `src/assets/project-media/`.

## GitHub Pages

The deployment workflow is in `.github/workflows/deploy.yml`. The existing Vite `base` in `vite.config.ts` is `/Alfred-Nonis-Portfolio/`; keep it aligned with the hosting path. Local editing and validation do not require deployment.
