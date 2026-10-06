import { Link } from 'react-router-dom'
export function NotFound() { return <main className="inner-page empty-state"><p className="eyebrow">404</p><h1>That page is not in this build.</h1><p>Use the project library to find the work you’re looking for.</p><Link className="button" to="/projects">View Projects</Link></main> }
