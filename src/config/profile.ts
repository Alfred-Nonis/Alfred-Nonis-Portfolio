// EDIT PROFILE AND HOME HERO TEXT HERE
const heroImages = import.meta.glob<string>('../assets/home/hero-welding.jpg', { eager: true, query: '?url', import: 'default' })

export const profile = {
  name: 'Alfred Nonis',
  title: 'B.S. Mechanical Engineering, December 2027',
  school: 'The University of Texas at Austin',
  degree: 'B.S. Mechanical Engineering',
  email: 'nonis.alfred@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alfred-nonis-21a52a244',
  github: 'https://github.com/Alfred-Nonis',
  resume: 'resume/alfred-nonis-resume.pdf',
  // Copy the welding photograph here; no code change is needed.
  heroImage: heroImages['../assets/home/hero-welding.jpg'],
  heroAlt: 'TIG welding during chassis fabrication',
  contactIntro: 'Feel free to reach out about engineering opportunities, project work, internships, jobs or if you just want to talk about designs!',
  bio: 'Mechanical Engineering student at The University of Texas at Austin focused on mechanical design, FEA, manufacturing, and hands-on hardware. Recent work includes Baja SAE chassis design and experimental hardware with Texas Spacecraft Laboratory.',
}
