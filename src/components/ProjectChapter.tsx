import type { ProjectChapter as ProjectChapterData } from '../types/project'
import { ProjectMetrics } from './ProjectMetrics'
import { ProjectSlideshow } from './ProjectSlideshow'
import { ScrollChapter } from './ScrollChapter'
import { chapterImages } from '../data/media'

export function ProjectChapter({ chapter }: { chapter: ProjectChapterData }) {
  const images = chapterImages(chapter)
  return <ScrollChapter className="section-chapter">
    {chapter.eyebrow && <p className="eyebrow">{chapter.eyebrow}</p>}
    <h2>{chapter.title}</h2>
    <div className="chapter-copy">{chapter.body?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
    {!!chapter.metrics?.length && <ProjectMetrics items={chapter.metrics} />}
    {!!images.length && <ProjectSlideshow images={images} label={chapter.title} mediaFit={chapter.mediaFit} />}
  </ScrollChapter>
}
