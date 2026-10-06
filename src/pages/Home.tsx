import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile } from '../config/profile'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

const areas = ['Mechanical Design', 'CAD', 'Finite Element Analysis', 'Manufacturing', 'Fabrication', 'Prototyping', 'Testing', 'Vehicle Systems', 'CubeSat Hardware']
const heroStyle = profile.heroImage ? { backgroundImage: `url(${import.meta.env.BASE_URL}${profile.heroImage})` } : undefined

export function Home() {
  return <main>
    <section className={profile.heroImage ? 'hero has-hero-image' : 'hero hero-placeholder'} style={heroStyle}>
      <div className="hero-content"><p className="eyebrow">{profile.school}</p><h1>{profile.name}<span>{profile.title}</span></h1><p className="hero-line">Design <b>|</b> Analysis <b>|</b> Manufacturing <b>|</b> Testing</p><p className="hero-bio">{profile.bio}</p><div className="hero-actions"><Link className="button" to="/projects">View Projects</Link><a className="button button-secondary" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">Resume</a><Link className="resume-link" to="/contact">Contact Me</Link></div></div>
      <motion.aside className="hero-aside" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}><dl className="focus-list"><div><dt>01</dt><dd>Mechanical Design</dd></div><div><dt>02</dt><dd>FEA / Analysis</dd></div><div><dt>03</dt><dd>Manufacturing</dd></div><div><dt>04</dt><dd>Prototyping</dd></div></dl></motion.aside>
    </section>
    <section className="page-section featured"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Featured engineering projects</h2></div><Link className="text-link" to="/projects">View all projects <span aria-hidden="true">→</span></Link></div><div className="project-grid">{projects.filter(project => project.featured).map(project => <ProjectCard project={project} key={project.slug} />)}</div></section>
    <section className="home-approach"><div><p className="eyebrow">Engineering approach</p><h2>Concept development through build-ready design.</h2></div><p>CAD, FEA, fabrication planning, and prototype work are used together to guide design decisions.</p></section>
    <section className="page-section capabilities"><div><p className="eyebrow">Technical areas</p><h2>Design, analysis, manufacturing, and hands-on development.</h2></div><ul>{areas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}</ul></section>
    <section className="home-contact-cta"><div><p className="eyebrow">Contact</p><h2>Engineering opportunities and project work.</h2><p>Available to discuss internships, jobs and mechanical design projects.</p></div><Link className="button button-light" to="/contact">Contact Me</Link></section>
  </main>
}
