import { useState } from 'react'
import { projectLibrary, projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

const filters = ['All', ...Array.from(new Set(projects.map(project => project.category)))]
export function Projects() { const [filter, setFilter] = useState('All'); const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter); return <main className="inner-page"><header className="page-intro"><p className="eyebrow">{projectLibrary.eyebrow}</p><h1>{projectLibrary.title}</h1><p>{projectLibrary.intro}</p></header><div className="filter-row" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} className={filter === item ? 'selected' : ''}>{item}</button>)}</div><div className="project-grid">{visible.map(project => <ProjectCard project={project} key={project.slug} />)}</div></main> }
