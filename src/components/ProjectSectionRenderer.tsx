import type { ReactNode } from 'react'
import type { ProjectSection } from '../types/project'
import { ProjectChapter } from './ProjectChapter'
import { ProjectMetrics } from './ProjectMetrics'
import { ProjectSlideshow } from './ProjectSlideshow'
import { ScrollChapter } from './ScrollChapter'

export function ProjectSectionRenderer({ section }: { section: ProjectSection }) {
  if (section.type === 'chapter') return <ProjectChapter chapter={section} />
  if (section.type === 'image-grid' && (!Array.isArray(section.images) || section.images.length === 0)) return null
  let content: ReactNode
  switch (section.type) {
    case 'text': content = <>{section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</>; break
    case 'bullets': content = <ul className="technical-list">{section.items.map(item => <li key={item}>{item}</li>)}</ul>; break
    case 'metrics': content = <ProjectMetrics items={section.items} />; break
    case 'process': content = <ol className="process-list">{section.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>; break
    case 'image-grid': content = <>{section.intro && <p className="section-intro">{section.intro}</p>}<ProjectSlideshow images={section.images} label={section.title} /></>; break
  }
  return <ScrollChapter className={`section-${section.type}`}><h2>{section.title}</h2>{content}</ScrollChapter>
}
