export type MediaFit = 'contain' | 'cover'
export type ProjectImage = { src: string; alt: string; caption?: string; description?: string; mediaFit?: MediaFit }
export type ProjectMetric = { value: string; label: string; note?: string }
export type Contribution = { title?: string; role?: string; items: string[] }
export type ProjectMedia = {
  images?: ProjectImage[]
  mediaFit?: MediaFit
  // Relative to src/assets/. Overrides accept exact filenames or basenames.
  mediaFolder?: string
  mediaOverrides?: Record<string, Partial<Omit<ProjectImage, 'src'>>>
}
export type EngineeringStory = ProjectMedia & {
  title: string
  featureEyebrow?: string
  featurePriority?: 'secondary'
  featureResult?: string
  body?: string[]
  calculations?: string[]
  // Keep typed math until this story has discovered or explicit image media.
  replaceCalculationsWhenMediaPresent?: boolean
}
export type ProjectChapter = {
  type: 'chapter'
  title: string
  eyebrow?: string
  body?: string[]
  bodyAfterMedia?: string[]
  engineeringStories?: EngineeringStory[]
  images?: ProjectImage[]
  metrics?: ProjectMetric[]
  mediaFit?: MediaFit
  // Relative to src/assets/, e.g. project-media/baja/01-design.
  mediaFolder?: string
  mediaOverrides?: Record<string, Partial<Omit<ProjectImage, 'src'>>>
}

export type ProjectSection =
  | ProjectChapter
  | { type: 'text'; title: string; body: string[] }
  | { type: 'bullets'; title: string; items: string[] }
  | { type: 'metrics'; title: string; items: ProjectMetric[] }
  | { type: 'image-grid'; title: string; intro?: string; images: ProjectImage[] }
  | { type: 'process'; title: string; steps: { title: string; description: string }[] }

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  subtitle: string
  organization?: string
  role?: string
  contribution?: Contribution
  keyMetrics?: ProjectMetric[]
  date?: string
  category: string
  heroImage?: ProjectImage
  // Optional card image selected from the same discovered media as the gallery.
  cardMediaFolder?: string
  cardPreferredBasename?: string
  // A project-detail hero drawn from src/assets/project-media/. When set, this
  // takes precedence over heroImage on the detail page only.
  heroMediaFolder?: string
  heroPreferredBasename?: string
  summary: string
  overview?: string[]
  status?: string
  tags: string[]
  featured?: boolean
  // A title-less, visual-first gallery for projects with confirmed media but no
  // written case-study content yet.
  gallery?: ProjectMedia
  sections: ProjectSection[]
}
