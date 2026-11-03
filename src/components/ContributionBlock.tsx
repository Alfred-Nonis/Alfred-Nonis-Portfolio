import type { Contribution } from '../types/project'

export function ContributionBlock({ contribution }: { contribution: Contribution }) {
  return <section className="contribution-block" aria-labelledby="contribution-heading">
    <h2 id="contribution-heading">{contribution.title ?? 'My Contribution'}</h2>
    {contribution.role && <p className="contribution-role">{contribution.role}</p>}
    <ul className="contribution-items">{contribution.items.map(item => <li key={item}>{item}</li>)}</ul>
  </section>
}
