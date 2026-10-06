# Portfolio Maintenance Guide

## Architecture

- Project content belongs in `src/data/projects.ts`.
- Profile and contact information belongs in `src/config/profile.ts`.
- Project images belong in `public/images/<project>/`.
- Reuse the existing components and project section types. Do not create one-off React pages for individual projects.
- Do not redesign the site unless the user explicitly requests it.

## Content edits

When the user provides project information, identify the appropriate project and existing section, then update only the relevant data. Preserve factual accuracy, do not invent missing values, and use concise engineering language rather than generic corporate wording.

## Image handling

When the user attaches or pastes an image and identifies its project:

1. If the environment exposes the attachment as a local file, copy it into `public/images/<project>/`.
2. Use a descriptive lowercase, hyphenated filename such as `frontal-impact-equivalent-stress.png` or `magnetometer-tower-cad.jpg`; avoid names like `image1.png` or `Screenshot1.png`.
3. Preserve the original file format unless there is a clear reason not to.
4. Add one `{ src, alt, caption }` object to the relevant `image-grid` in `src/data/projects.ts`.
5. Reuse the existing gallery/lightbox. Do not create duplicate copies unnecessarily.

If an attachment is not available as a local file, tell the user the one manual copy step required; never invent a file path or asset.

## Safe editing and validation

- For normal content and image updates, do not change routing, deployment, shared design, or dependencies.
- Do not change TypeScript interfaces unless the requested content truly requires it.
- Keep updates narrowly scoped.
- After code or data changes, run `npm run build` and fix any errors before finishing.
