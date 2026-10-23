import { Link } from 'react-router-dom'
import { experienceHref, type IndustryExperience } from '../data/experience'
import { ImageTile } from './Media'
import { Tags } from './ProjectCard'

export function ExperienceCard({ experience, compact = false }: { experience: IndustryExperience; compact?: boolean }) {
  const hasDetail = !!experience.sections?.length
  const titleId = `experience-${experience.slug}-${compact ? 'preview' : 'card'}-title`
  const Heading = compact ? 'h3' : 'h2'
  const company = compact ? experience.shortName || experience.organization : experience.organization

  return <article id={compact ? undefined : experience.slug} tabIndex={compact ? undefined : -1}
    className={`experience-card${compact ? ' experience-card-compact' : ''}`} aria-labelledby={titleId}>
    {!compact && experience.heroImage && <div className="experience-card-image"><ImageTile image={experience.heroImage} /></div>}
    <Heading id={titleId}>{hasDetail || compact ? <Link to={experienceHref(experience)}>{company}</Link> : company}</Heading>
    <p className="experience-role">{experience.role}</p>
    <p className="experience-period">{experience.period}</p>
    {!compact && <><p className="experience-description">{experience.summary}</p><Tags tags={experience.tags} /></>}
    {(hasDetail || compact) && <Link className="text-link experience-card-link" to={experienceHref(experience)}
      aria-label={`${hasDetail ? 'View experience' : 'View on overview'}: ${experience.shortName || experience.organization}`}>
      {hasDetail ? 'View experience' : 'View on overview'} <span aria-hidden="true">→</span>
    </Link>}
  </article>
}
