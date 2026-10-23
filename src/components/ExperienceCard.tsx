import { Link } from 'react-router-dom'
import { experienceHref, type IndustryExperience } from '../data/experience'
import { ImageTile } from './Media'
import { Tags } from './ProjectCard'

export function ExperienceCard({ experience, compact = false }: { experience: IndustryExperience; compact?: boolean }) {
  const hasDetail = !!experience.sections?.length
  const titleId = `experience-${experience.slug}-${compact ? 'preview' : 'card'}-title`
  const Heading = compact ? 'h3' : 'h2'
  const company = compact ? experience.shortName || experience.organization : experience.organization

  return <Link to={experienceHref(experience)} id={compact ? undefined : experience.slug}
    className={`experience-card${compact ? ' experience-card-compact' : ''}`} aria-labelledby={titleId}>
    {!compact && experience.heroImage && <div className="experience-card-image"><ImageTile image={experience.heroImage} /></div>}
    <Heading id={titleId}>{company}</Heading>
    <p className="experience-role">{experience.role}</p>
    <p className="experience-period">{experience.period}</p>
    {!compact && <><p className="experience-description">{experience.summary}</p><Tags tags={experience.tags} /></>}
    <span className="text-link experience-card-link" aria-hidden="true">
      {hasDetail ? 'View experience' : 'View on overview'} <span aria-hidden="true">→</span>
    </span>
  </Link>
}
