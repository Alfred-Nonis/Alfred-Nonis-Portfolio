import { profile } from '../config/profile'

export function Contact() {
  return <main className="contact-page"><h1>Contact</h1><p>Feel free to reach out about engineering opportunities, project work, internships, jobs or if you just want to talk about designs!</p><div className="contact-list"><a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><i aria-hidden="true">↗</i></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect on LinkedIn</strong><i aria-hidden="true">↗</i></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>View GitHub profile</strong><i aria-hidden="true">↗</i></a><a href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer"><span>Resume</span><strong>Download resume</strong><i aria-hidden="true">↗</i></a></div></main>
}
