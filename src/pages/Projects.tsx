import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

const filters = ['All', ...Array.from(new Set(projects.map(project => project.category)))]
export function Projects() { const [filter, setFilter] = useState('All'); const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter); return <main className="inner-page"><header className="page-intro"><p className="eyebrow">Project library</p><h1>Engineering work with context.</h1><p>Each project summarizes its objective, key decisions, process, and supporting evidence.</p></header><div className="filter-row" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} className={filter === item ? 'selected' : ''}>{item}</button>)}</div><div className="project-grid">{visible.map(project => <ProjectCard project={project} key={project.slug} />)}</div></main> }
