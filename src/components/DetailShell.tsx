import type { ReactNode } from 'react'
import type { ProjectSection } from '../types/project'
import { DetailSections } from './SectionNavigator'

/** Top, story, and end navigation share the same rail and content columns. */
export function DetailShell({ top, end, sections, children }: {
  top: ReactNode
  end: ReactNode
  sections: ProjectSection[]
  children: ReactNode
}) {
  return <div className="detail-shell">
    <div className="detail-top-layout detail-grid"><div className="detail-top-main">{top}</div></div>
    {sections.length > 0
      ? <DetailSections sections={sections}>{children}</DetailSections>
      : <div className="detail-layout detail-grid"><div className="detail-content">{children}</div></div>}
    <div className="detail-end-layout detail-grid"><div className="detail-end-main">{end}</div></div>
  </div>
}
