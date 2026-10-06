import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../config/profile'
import { projects } from '../data/projects'

const navClass = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <div className="nav-shell">
      <Link to="/" className="brand" onClick={close}><span className="brand-mark">ME</span><span>{profile.name}</span></Link>
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span className="sr-only">Toggle navigation</span><i></i><i></i><i></i></button>
      <nav id="primary-nav" className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
        <NavLink end to="/" className={navClass} onClick={close}>Home</NavLink>
        <div className="projects-menu">
          <NavLink to="/projects" className={navClass} onClick={close}>Projects</NavLink>
          <details>
            <summary aria-label="Open projects menu">⌄</summary>
            <div className="project-dropdown">
              {projects.map(project => <Link to={`/projects/${project.slug}`} key={project.slug} onClick={close}>{project.shortTitle || project.title}</Link>)}
            </div>
          </details>
        </div>
        <NavLink to="/about" className={navClass} onClick={close}>About</NavLink>
        <NavLink to="/contact" className={navClass} onClick={close}>Contact</NavLink>
      </nav>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-identity"><span className="brand-mark">ME</span><p><strong>{profile.name}</strong><span>{profile.title}</span></p></div><div className="footer-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div><p className="footer-copyright">© {new Date().getFullYear()} · {profile.school}</p></footer>
}
