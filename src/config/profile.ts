// EDIT PROFILE AND HOME HERO TEXT HERE
// Select an existing photo by filename; it does not need to be renamed.
const heroImages = import.meta.glob<string>('../assets/home/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}', { eager: true, query: '?url', import: 'default' })
const heroImage = ['jpg', 'jpeg', 'png', 'webp']
  .map(extension => heroImages[`../assets/home/hero-welding.${extension}`])
  .find(Boolean)

export const profile = {
  name: 'Alfred Nonis',
  title: 'B.S. Mechanical Engineering, December 2027',
  school: 'The University of Texas at Austin',
  degree: 'B.S. Mechanical Engineering',
  email: 'nonis.alfred@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alfred-nonis-21a52a244',
  github: 'https://github.com/Alfred-Nonis',
  resume: 'resume/Resume 2026-2027 Alfred Nonis.pdf',
  // Uses the first present hero-welding.jpg/.jpeg/.png/.webp file; missing photos stay hidden.
  heroImage,
  heroAlt: 'TIG welding during chassis fabrication',
  contactIntro: 'Feel free to reach out about engineering opportunities, project work, internships, jobs or if you just want to talk about designs!',
  bio: 'Mechanical Engineering student at The University of Texas at Austin focused on mechanical design, FEA, manufacturing, and hands-on hardware. Recent work includes Baja SAE chassis design and experimental hardware with Texas Spacecraft Laboratory.',
}
