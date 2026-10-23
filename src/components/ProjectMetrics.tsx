import type { ProjectMetric } from '../types/project'

export function ProjectMetrics({ items }: { items: ProjectMetric[] }) {
  return <div className="metrics">{items.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span>{item.note && <small>{item.note}</small>}</div>)}</div>
}
