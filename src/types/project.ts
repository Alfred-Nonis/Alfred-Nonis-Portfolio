export type ProjectImage = { src: string; alt: string; caption?: string; description?: string }

export type ProjectSection =
  | { type: 'text'; title: string; body: string[] }
  | { type: 'bullets'; title: string; items: string[] }
  | { type: 'metrics'; title: string; items: { value: string; label: string; note?: string }[] }
  | { type: 'image-grid'; title: string; intro?: string; images: ProjectImage[] }
  | { type: 'process'; title: string; steps: { title: string; description: string }[] }

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  subtitle: string
  organization?: string
  role: string
  date?: string
  category: string
  heroImage?: ProjectImage
  summary: string
  tags: string[]
  featured?: boolean
  sections: ProjectSection[]
}
