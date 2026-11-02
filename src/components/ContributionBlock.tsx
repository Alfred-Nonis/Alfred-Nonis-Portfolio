import type { Contribution } from '../types/project'

export function ContributionBlock({ contribution }: { contribution: Contribution }) {
  return <section className="contribution-block" aria-labelledby="contribution-heading">
    <h2 id="contribution-heading">My Contribution</h2>
    {contribution.title && <h3>{contribution.title}</h3>}
    <p>{contribution.body}</p>
  </section>
}
