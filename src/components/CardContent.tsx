export function Tags({ tags }: { tags: string[] }) {
  return <ul className="tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
}

/** Shared recruiter-facing hierarchy for both project and experience cards. */
export function CardContent({ eyebrow, title, titleId, summary, role, period, tags, action, heading = 'h3', className = '' }: {
  eyebrow: string
  title: string
  titleId: string
  summary: string
  role?: string
  period?: string
  tags: string[]
  action: string
  heading?: 'h2' | 'h3'
  className?: string
}) {
  const Heading = heading
  return <div className={`work-card-content ${className}`}>
    <p className="eyebrow">{eyebrow}</p>
    <Heading id={titleId} className="work-card-title">{title}</Heading>
    <p className="work-card-summary">{summary}</p>
    {role && <p className="work-card-role"><strong>Role:</strong> {role}</p>}
    {period && <p className="work-card-period">{period}</p>}
    <Tags tags={tags} />
    <span className="text-link work-card-link" aria-hidden="true">{action} <span>→</span></span>
  </div>
}
