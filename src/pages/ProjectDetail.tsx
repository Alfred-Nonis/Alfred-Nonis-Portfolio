import { Link, useParams } from 'react-router-dom'
import { findProject } from '../data/projects'
import { ImageTile } from '../components/Media'
import { Tags } from '../components/ProjectCard'
import { ProjectSectionRenderer } from '../components/ProjectSectionRenderer'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? findProject(slug) : undefined

  if (!project) return <main className="inner-page empty-state"><p className="eyebrow">404</p><h1>Project not found.</h1><Link className="button" to="/projects">Browse projects</Link></main>

  return <main className="project-detail">
    <div className="breadcrumbs"><Link to="/projects">Projects</Link><span>/</span><span>{project.shortTitle || project.title}</span></div>
    <header className={project.heroImage ? 'project-hero' : 'project-hero project-hero-no-media'}>
      <div>
        <p className="eyebrow">{project.category}{project.organization && ` · ${project.organization}`}</p>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <dl><div><dt>My role</dt><dd>{project.role}</dd></div>{project.organization && <div><dt>Organization</dt><dd>{project.organization}</dd></div>}</dl>
        <Tags tags={project.tags} />
      </div>
      {project.heroImage && <div className="project-hero-image"><ImageTile image={project.heroImage} priority /></div>}
    </header>
    <div className="project-summary"><span>01</span><p>{project.summary}</p></div>
    <div className="case-study">{project.sections.map((section, index) => <ProjectSectionRenderer section={section} key={`${section.title}-${index}`} />)}</div>
    <div className="project-end"><p className="eyebrow">Explore more work</p><Link className="button" to="/projects">All projects</Link></div>
  </main>
}
