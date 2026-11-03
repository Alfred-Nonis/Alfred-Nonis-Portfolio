import { Link, useParams } from 'react-router-dom'
import { findProject } from '../data/projects'
import { ImageTile } from '../components/Media'
import { Tags } from '../components/ProjectCard'
import { ProjectSectionRenderer } from '../components/ProjectSectionRenderer'
import { ProjectSlideshow } from '../components/ProjectSlideshow'
import { chapterImages, projectHeroImage } from '../data/media'
import { ContributionBlock } from '../components/ContributionBlock'
import { ProjectMetrics } from '../components/ProjectMetrics'
import { DetailShell } from '../components/DetailShell'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? findProject(slug) : undefined

  if (!project) return <main className="inner-page empty-state"><p className="eyebrow">404</p><h1>Project not found.</h1><Link className="button" to="/projects">Browse projects</Link></main>

  const heroImage = projectHeroImage(project)
  const galleryImages = project.gallery ? chapterImages(project.gallery) : []
  const heroClassName = `project-hero${heroImage ? '' : ' project-hero-no-media'}`
  const position = project.contribution?.role || project.role
  return <main className="project-detail">
    <DetailShell sections={project.sections} top={<>
    <div className="breadcrumbs"><Link to="/projects">Projects</Link><span>/</span><span>{project.shortTitle || project.title}</span></div>
    <header className={heroClassName}>
      <div>
        <p className="eyebrow">{project.category}{project.organization && ` · ${project.organization}`}</p>
        <h1>{project.shortTitle || project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        {position && <dl className="project-position"><div><dt>Position</dt><dd>{position}</dd></div></dl>}
        {project.status && <p className="eyebrow">{project.status}</p>}
        <Tags tags={project.tags} />
      </div>
      {heroImage && <div className={`project-hero-image${project.heroMediaFolder ? ' project-hero-image-wide' : ''}`}><ImageTile image={heroImage} priority /></div>}
    </header>
    </>} end={<div className="project-end"><p className="eyebrow">Explore more work</p><Link className="button" to="/projects">All projects</Link></div>}>
    {!!galleryImages.length && <ProjectSlideshow images={galleryImages} label={`${project.title} gallery`} mediaFit={project.gallery?.mediaFit} />}
    {project.sections.length > 0 && <>
      <div id="overview" tabIndex={-1} className="detail-overview">
        {project.contribution && <ContributionBlock contribution={project.contribution} />}
        {!!project.keyMetrics?.length && <section className="key-metrics" aria-labelledby="key-metrics-heading"><h2 id="key-metrics-heading">Key Metrics</h2><ProjectMetrics items={project.keyMetrics} /></section>}
        <div className="project-summary">{(project.overview ?? [project.summary]).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      </div>
      <div className="case-study">{project.sections.map((section, index) => <ProjectSectionRenderer section={section} key={`${project.slug}-${section.title}-${index}`} />)}</div>
    </>}
    </DetailShell>
  </main>
}
