import { useEffect, useRef, type FocusEvent } from 'react'
import { Link, NavLink } from 'react-router-dom'

export interface NavigationItem { to: string; label: string }

export function NavigationGroup({ id, label, to, items, emptyMessage, overviewLabel, overviewPosition = 'first', expanded, mobile, onToggle, onOpen, onClose, onNavigate }: {
  id: string
  label: string
  to: string
  items: NavigationItem[]
  emptyMessage?: string
  overviewLabel?: string
  overviewPosition?: 'first' | 'last'
  expanded: boolean
  mobile: boolean
  onToggle: () => void
  onOpen: () => void
  onClose: () => void
  onNavigate: () => void
}) {
  const trigger = useRef<HTMLButtonElement>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>()
  const cancelLeave = () => clearTimeout(leaveTimer.current)
  useEffect(() => cancelLeave, [])
  useEffect(() => { if (!expanded) cancelLeave() }, [expanded])
  const closeOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    // Mobile lists occupy layout space: collapsing on blur would move the next tap target.
    if (!mobile && !event.currentTarget.contains(event.relatedTarget)) onClose()
  }
  const overview = <li><Link to={to} onClick={onNavigate}>{overviewLabel || `All ${label.toLowerCase()}`}</Link></li>

  return <div className="nav-group"
    onPointerEnter={event => {
      cancelLeave()
      if (!mobile && event.pointerType === 'mouse') onOpen()
    }}
    onPointerLeave={event => {
      if (!mobile && event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) {
        // Allow diagonal movement into the wider dropdown without a flicker.
        leaveTimer.current = setTimeout(onClose, 160)
      }
    }}
    onBlur={closeOnBlur}
    onKeyDown={event => {
      if (event.key === 'Escape' && expanded) {
        event.stopPropagation()
        onClose()
        trigger.current?.focus()
      }
    }}>
    <div className="nav-group-heading">
      <NavLink to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={onNavigate}>{label}</NavLink>
      <button ref={trigger} type="button" className="nav-disclosure" aria-label={`${label} links`}
        aria-expanded={expanded} aria-controls={`${id}-links`} onClick={onToggle}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
      </button>
    </div>
    <div id={`${id}-links`} className="nav-dropdown" hidden={!expanded}>
      <ul>
        {overviewPosition === 'first' && overview}
        {items.map(item => <li key={item.to}><Link to={item.to} onClick={onNavigate}>{item.label}</Link></li>)}
        {overviewPosition === 'last' && overview}
      </ul>
      {items.length === 0 && emptyMessage && <p className="nav-empty">{emptyMessage}</p>}
    </div>
  </div>
}
