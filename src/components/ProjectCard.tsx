import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { ImageTile } from './Media'
import { projectCardImage } from '../data/media'
import { CardContent } from './CardContent'

export { Tags } from './CardContent'

export function ProjectCard({ project }: { project: Project }) {
  const cardImage = projectCardImage(project)
  const titleId = `project-${project.slug}-title`
  return <Link to={`/projects/${project.slug}`} className="project-card work-card work-card-with-media" aria-labelledby={titleId}>
    <div className="project-card-image work-card-image">{cardImage ? <ImageTile image={cardImage} fit={project.cardMediaFolder ? 'contain' : undefined} /> : <div className="project-card-cover"><span>{project.category}</span><strong>{project.shortTitle || project.title}</strong><small>Project imagery being added</small></div>}</div>
    <CardContent className="project-card-content" eyebrow={project.status || project.category} title={project.shortTitle || project.title}
      titleId={titleId} summary={project.summary} role={project.role} tags={project.tags} action="View project" />
  </Link>
}
