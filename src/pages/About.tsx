import { profile } from '../config/profile'

const interests = ['Mechanical Design', 'Manufacturing', 'Aerospace', 'Automotive Systems', 'Structural Analysis', 'Product Development', 'Reliability', 'Energy Systems']
const tools = ['SolidWorks', 'ANSYS', 'MATLAB', 'Python', 'Excel', 'Engineering Drawings', 'FEA', 'Manufacturing', 'Fabrication', 'Prototyping']

export function About() {
  return <main className="inner-page about-page"><header className="page-intro"><h1>About</h1><p>{profile.bio}</p></header><div className="about-grid"><section><h2>Approach</h2><p>Design challenges begin with at least five distinct concepts before one direction is selected. Early concepts focus on proof of concept and the primary design requirements.</p><p>Selected concepts are then iterated toward a buildable solution through design for manufacturing, material selection, bill of materials development, cost evaluation, assembly planning, and part availability.</p><p>Experience includes vehicle chassis work, CubeSat experimental hardware, engine systems, and practical fabrication.</p></section><section><h2>Education</h2><p><strong>{profile.school}</strong><br />{profile.degree}</p></section></div><section className="two-list"><div><p className="eyebrow">Engineering interests</p><ul>{interests.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Tools & methods</p><ul>{tools.map(item => <li key={item}>{item}</li>)}</ul></div></section></main>
}
