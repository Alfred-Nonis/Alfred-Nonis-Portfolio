import type { ReactNode } from 'react'

// Chapters stay fully readable throughout normal document scrolling.
export function ScrollChapter({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} tabIndex={id ? -1 : undefined} className={`project-section ${className}`}>{children}</section>
}
