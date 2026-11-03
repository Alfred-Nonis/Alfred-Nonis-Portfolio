import { Link } from 'react-router-dom'
import { experienceHref, type IndustryExperience } from '../data/experience'
import { ImageTile } from './Media'
import { CardContent } from './CardContent'

export function ExperienceCard({ experience, compact = false }: { experience: IndustryExperience; compact?: boolean }) {
  const hasDetail = !!experience.sections?.length
  const titleId = `experience-${experience.slug}-${compact ? 'preview' : 'card'}-title`
  const company = compact ? experience.shortName || experience.organization : experience.organization
  const showImage = !compact && !!experience.heroImage

  return <Link to={experienceHref(experience)} id={compact ? undefined : experience.slug}
    className={`experience-card work-card${compact ? ' experience-card-compact work-card-compact' : ''}${showImage ? ' work-card-with-media' : ''}`} aria-labelledby={titleId}>
    {showImage && experience.heroImage && <div className="experience-card-image work-card-image"><ImageTile image={experience.heroImage} /></div>}
    <CardContent eyebrow="Industry Experience" title={company} titleId={titleId} heading={compact ? 'h3' : 'h2'}
      summary={experience.summary} role={experience.role} period={experience.period} tags={experience.tags}
      action={hasDetail ? 'View experience' : 'View on overview'} className="experience-card-content" />
  </Link>
}
