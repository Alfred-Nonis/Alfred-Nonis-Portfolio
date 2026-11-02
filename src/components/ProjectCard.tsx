import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { ImageTile } from './Media'
import { projectCardImage } from '../data/media'

export function Tags({ tags }: { tags: string[] }) { return <ul className="tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul> }

export function ProjectCard({ project }: { project: Project }) {
  const cardImage = projectCardImage(project)
  const titleId = `project-${project.slug}-title`
  return <Link to={`/projects/${project.slug}`} className="project-card" aria-labelledby={titleId}>
    <div className="project-card-image">{cardImage ? <ImageTile image={cardImage} fit={project.cardMediaFolder ? 'contain' : undefined} /> : <div className="project-card-cover"><span>{project.category}</span><strong>{project.shortTitle || project.title}</strong><small>Project imagery being added</small></div>}</div>
    <div className="project-card-content"><p className="eyebrow">{project.status || project.category}</p><h3 id={titleId}>{project.shortTitle || project.title}</h3><p>{project.summary}</p>{project.role && <p className="role"><strong>Role:</strong> {project.role}</p>}<Tags tags={project.tags} /><span className="text-link" aria-hidden="true">View project <span>→</span></span></div>
  </Link>
}
