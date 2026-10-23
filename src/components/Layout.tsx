import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../config/profile'
import { projects } from '../data/projects'
import { experienceHref, experiences } from '../data/experience'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { NavigationGroup } from './NavigationGroup'

const navClass = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link'

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView({ block: 'start' })
      target?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const header = useRef<HTMLElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const mobile = useMediaQuery('(max-width: 1023px)')
  const { pathname } = useLocation()
  const close = () => { setOpen(false); setExpanded(null) }

  useEffect(close, [pathname, mobile])
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) close()
    }
    document.addEventListener('pointerdown', outside)
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape) }
  }, [])

  const groups = [
    { id: 'experience', label: 'Industry Experience', to: '/experience', items: experiences.map(item => ({ to: experienceHref(item), label: item.shortName || item.organization })), overviewLabel: 'View all industry experience →', overviewPosition: 'last' as const },
    { id: 'projects', label: 'Projects', to: '/projects', items: projects.map(project => ({ to: `/projects/${project.slug}`, label: project.shortTitle || project.title })) },
  ]

  return <header ref={header} className="site-header" onKeyDown={event => {
    if (event.key === 'Escape') {
      close()
      if (mobile && open) toggle.current?.focus()
    }
  }} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) close()
  }}>
    <div className="nav-shell">
      <Link to="/" className="brand" onClick={close}><span className="brand-mark">ME</span><span>{profile.name}</span></Link>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => { setOpen(!open); setExpanded(null) }}><span className="sr-only">Toggle navigation</span><i></i><i></i><i></i></button>
      <nav id="primary-nav" className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
        <NavLink end to="/" className={navClass} onClick={close}>Home</NavLink>
        {groups.map(group => <NavigationGroup key={group.id} {...group} mobile={mobile} expanded={expanded === group.id}
          onToggle={() => setExpanded(current => current === group.id ? null : group.id)}
          onOpen={() => setExpanded(group.id)} onClose={() => setExpanded(current => current === group.id ? null : current)} onNavigate={close} />)}
        <NavLink to="/contact" className={navClass} onClick={close}>Contact</NavLink>
      </nav>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-identity"><span className="brand-mark">ME</span><p><strong>{profile.name}</strong><span>{profile.title}</span></p></div><div className="footer-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div><p className="footer-copyright">© {new Date().getFullYear()} · {profile.school}</p></footer>
}
