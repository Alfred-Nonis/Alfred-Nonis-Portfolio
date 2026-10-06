import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { ImageTile } from './Media'

export function Tags({ tags }: { tags: string[] }) { return <ul className="tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul> }

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <Link to={`/projects/${project.slug}`} className="project-card-image" aria-label={`View ${project.title}`}>{project.heroImage ? <ImageTile image={project.heroImage} /> : <div className="project-card-cover"><span>{project.category}</span><strong>{project.shortTitle || project.title}</strong><small>Project imagery being added</small></div>}</Link>
    <div className="project-card-content"><p className="eyebrow">{project.category}</p><h3><Link to={`/projects/${project.slug}`}>{project.shortTitle || project.title}</Link></h3><p>{project.summary}</p><p className="role"><strong>Role:</strong> {project.role}</p><Tags tags={project.tags} /><Link className="text-link" to={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link></div>
  </article>
}
