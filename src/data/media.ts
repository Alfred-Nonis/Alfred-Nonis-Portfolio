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
  const explicit = (chapter.images ?? []).map(image => ({ ...image, ...overrides[image.src.split('/').pop() ?? ''] }))
  const folderFiles = mediaByFolder[chapter.mediaFolder ?? ''] ?? []
  const discovered = folderFiles.map(({ filename, src }) => {
    const caption = filenameCaption(filename)
    return { src, alt: caption, caption, ...overrides[filename] }
  })
  const seen = new Set<string>()
  // Curated images retain their order. Numbered copies of existing filenames are skipped.
  return [...explicit, ...discovered].filter(image => {
    const original = folderFiles.find(file => file.src === image.src)
    const key = imageKey(original?.filename ?? image.src)
    if (seen.has(key) || seen.has(image.src)) return false
    seen.add(key)
    seen.add(image.src)
    return true
  })
}
