# Mechanical Engineering Portfolio

A React and TypeScript portfolio that presents mechanical engineering work as concise technical case studies. It is configured for GitHub Pages and uses hash-based navigation, so individual project links remain reliable after a refresh.

## Running locally

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Building

```bash
npm run build
```

The production website is generated in `dist/`.

## Personal details

Update your name, email, LinkedIn, GitHub, resume path, and bio in `src/config/profile.ts`.

Place your resume at `public/resume/resume.pdf`.

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

## Adding Project Images

1. Put the image in its matching folder under `public/images/`.
2. Open `src/data/projects.ts` and find the project’s `image-grid` section.
3. Add an image object with `src`, `alt`, and `caption`.
4. Save, then run `npm run dev`.

Use these project folders:

```text
public/images/baja/
public/images/react/
public/images/engine-rebuild/
public/images/velocity-stack/
public/images/gokart/
```

Empty galleries stay hidden until at least one real image is added. Use paths relative to `public/` and do not start them with a slash:

```ts
{ src: 'images/baja/chassis-cad.jpg', alt: 'SolidWorks model of the Baja chassis', caption: 'Final chassis CAD' }
```

No React component changes are required.

## Previewing the Website Locally

From the repository terminal:

```bash
npm install
npm run dev
```

Vite will display a local URL, typically `http://localhost:5173/`. Open it in a browser. While the dev server is running, saved changes should automatically refresh in the browser.

Validate a production build with:

```bash
npm run build
```

## Adding or editing a project

The reusable project-page renderer is driven by `src/data/projects.ts`. Copy an existing project object, edit its fields and `sections`, then add any image files to the appropriate `public/images/` folder.

## GitHub Pages

The deployment workflow is in `.github/workflows/deploy.yml`. Push the repository to GitHub, then enable **GitHub Actions** as the Pages source in the repository’s Pages settings. The Vite `base` setting in `vite.config.ts` is intentionally relative, so there is no repository name to update.
