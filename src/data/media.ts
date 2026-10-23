import type { ProjectChapter, ProjectImage } from '../types/project'

// Shared discovery for all projects/experiences. Vite emits base-aware asset URLs.
const files = import.meta.glob<string>(
  '../assets/{project-media,experience-media}/**/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)
export const mediaByFolder: Record<string, { filename: string; src: string }[]> = {}
for (const [path, src] of Object.entries(files).sort(([a], [b]) => a.localeCompare(b, 'en'))) {
  const relative = path.replace('../assets/', '')
  const slash = relative.lastIndexOf('/')
  const folder = relative.slice(0, slash)
  ;(mediaByFolder[folder] ??= []).push({ filename: relative.slice(slash + 1), src })
}
const imageKey = (path: string) => decodeURIComponent(path.split('/').pop() ?? path)
  .replace(/^\d+[-_\s]+/, '').toLowerCase()

export function filenameCaption(filename: string): string {
  const words = filename.replace(/\.[^.]+$/, '').replace(/^\d+[-_\s]+/, '').replace(/[-_]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export function chapterImages(chapter: ProjectChapter): ProjectImage[] {
  const overrides = chapter.mediaOverrides ?? {}
  const explicit = (chapter.images ?? []).map(image => {
    const filename = image.src.split('/').pop() ?? ''
    return { filename, image: { ...image, ...overrides[filename] } }
  })
  const folderFiles = mediaByFolder[chapter.mediaFolder ?? ''] ?? []
  const discovered = folderFiles.map(({ filename, src }) => {
    const caption = filenameCaption(filename)
    return { filename, image: { src, alt: caption, caption, ...overrides[filename] } }
  })
  const seen = new Set<string>()
  // Preserve curated metadata when a numbered copy of a legacy file is added.
  // Numbering is optional; distinct new files such as 01-photo / 02-photo both work.
  const legacyNames = new Set(explicit.map(({ filename }) => imageKey(filename)))
  return [...explicit, ...discovered.filter(({ filename }) => !legacyNames.has(imageKey(filename)))]
    .sort((a, b) => a.filename.localeCompare(b.filename, 'en'))
    .filter(({ image }) => {
      if (seen.has(image.src)) return false
      seen.add(image.src)
      return true
    })
    .map(({ image }) => image)
}
