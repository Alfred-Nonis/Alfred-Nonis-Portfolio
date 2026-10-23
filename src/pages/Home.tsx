import { Fragment } from 'react'
import { home } from '../data/home'
import { Link } from 'react-router-dom'
import { profile } from '../config/profile'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { experiences } from '../data/experience'

export function Home() {
  return <main>
    <section className={`hero${profile.heroImage ? ' hero-with-photo' : ''}`}>
      <div className="hero-content">
        <p className="eyebrow">{profile.school}</p>
        <h1>{profile.name}<span>{profile.title}</span></h1>
        <p className="hero-line">{home.focus.map((focus, index) => <Fragment key={focus}>{index > 0 && <> <b>|</b> </>}{focus}</Fragment>)}</p>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <Link className="button" to="/projects">View Projects</Link>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">Resume</a>
          <Link className="button button-secondary" to="/contact">Contact Me</Link>
        </div>
      </div>
      {profile.heroImage && <figure className="hero-photo"><img src={profile.heroImage} alt={profile.heroAlt} fetchPriority="high" /></figure>}
    </section>
    <section className="page-section featured"><div className="section-heading"><div><p className="eyebrow">{home.selectedWork}</p><h2>{home.projectsTitle}</h2></div><Link className="text-link" to="/projects">View all projects <span aria-hidden="true">→</span></Link></div><div className="project-grid">{projects.filter(project => project.featured).map(project => <ProjectCard project={project} key={project.slug} />)}</div></section>
    <section className="page-section home-experience" aria-labelledby="home-experience-title">
      <div className="section-heading"><div><p className="eyebrow">{home.experienceEyebrow}</p><h2 id="home-experience-title">{home.experienceTitle}</h2></div>
        <Link className="text-link" to="/experience">View Industry Experience <span aria-hidden="true">→</span></Link>
      </div>
      <div className="experience-grid">{experiences.map(experience => <ExperienceCard key={experience.slug} experience={experience} compact />)}</div>
    </section>
    <section className="page-section home-skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{home.skillsTitle}</h2>
      <div className="skill-groups">{home.skillGroups.map(group => <div key={group.label}><h3>{group.label}</h3><ul className="skill-chips">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
    </section>
    <section className="home-approach"><div><p className="eyebrow">{home.approachEyebrow}</p><h2>{home.approachTitle}</h2></div><p>{home.approachBody}</p></section>
    <section className="home-contact-cta"><div><p className="eyebrow">Contact</p><h2>{home.contactTitle}</h2><p>{home.contactBody}</p></div><Link className="button button-light" to="/contact">Contact Me</Link></section>
  </main>
}
