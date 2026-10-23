import { Link, Navigate, useParams } from 'react-router-dom'
import { experienceHref, experiences } from '../data/experience'
import { ExperienceCard } from '../components/ExperienceCard'
import { ImageTile } from '../components/Media'
import { Tags } from '../components/ProjectCard'
import { ProjectSectionRenderer } from '../components/ProjectSectionRenderer'

export function Experience() {
  return <main className="inner-page experience-page">
    <header className="page-intro"><p className="eyebrow">Professional work</p><h1>Industry Experience</h1></header>
    {experiences.length === 0
      ? <div className="experience-empty"><h2>Experience details coming soon.</h2><p>Industry roles and engineering contributions will be added here.</p><Link className="text-link" to="/projects">Explore engineering projects <span aria-hidden="true">→</span></Link></div>
      : <div className="experience-grid">{experiences.map(item => <ExperienceCard experience={item} key={item.slug} />)}</div>}
  </main>
}

export function ExperienceDetail() {
  const { slug } = useParams()
  const experience = experiences.find(item => item.slug === slug)
  if (!experience) return <main className="inner-page"><h1>Experience not found.</h1><Link className="button" to="/experience">Industry Experience</Link></main>
  if (!experience.sections?.length) return <Navigate to={experienceHref(experience)} replace />
  return <main className="inner-page experience-page experience-detail">
    <div className="breadcrumbs"><Link to="/experience">Industry Experience</Link><span>/</span><span>{experience.organization}</span></div>
    <header className={`experience-hero${experience.heroImage ? ' experience-hero-with-media' : ''}`}>
      <div><p className="eyebrow">Industry Experience</p><h1>{experience.organization}</h1>
        <p className="experience-role">{experience.role}</p><p className="experience-period">{experience.period}</p>
        <p className="experience-description">{experience.summary}</p><Tags tags={experience.tags} />
      </div>
      {experience.heroImage && <div className="experience-hero-image"><ImageTile image={experience.heroImage} priority /></div>}
    </header>
    {experience.sections.map((section, index) => <ProjectSectionRenderer section={section} key={`${experience.slug}-${index}`} />)}
    <div className="experience-end"><Link className="text-link" to="/experience">View all industry experience <span aria-hidden="true">→</span></Link></div>
  </main>
}
