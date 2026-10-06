import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ProjectImage, ProjectSection } from '../types/project'
import { ImageTile } from './Media'

function Lightbox({ image, close }: { image: ProjectImage; close: () => void }) {
  useEffect(() => { const key = (event: KeyboardEvent) => event.key === 'Escape' && close(); window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key) }, [close])
  return <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}><motion.figure initial={{ scale: .96 }} animate={{ scale: 1 }} onClick={event => event.stopPropagation()}><button type="button" onClick={close} aria-label="Close image">×</button><ImageTile image={image} priority /><figcaption>{image.caption || image.alt}{image.description && ` — ${image.description}`}</figcaption></motion.figure></motion.div>
}

function Gallery({ images }: { images: ProjectImage[] }) {
  const [selected, setSelected] = useState<ProjectImage | null>(null)
  return <><div className="gallery">{images.map((image, index) => <figure key={image.src}><ImageTile image={image} onOpen={() => setSelected(image)} priority={index < 2} /><figcaption>{image.caption || image.alt}</figcaption></figure>)}</div><AnimatePresence>{selected && <Lightbox image={selected} close={() => setSelected(null)} />}</AnimatePresence></>
}

export function ProjectSectionRenderer({ section }: { section: ProjectSection }) {
  if (section.type === 'image-grid' && (!Array.isArray(section.images) || section.images.length === 0)) return null
  let content: ReactNode
  switch (section.type) {
    case 'text': content = <>{section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</>; break
    case 'bullets': content = <ul className="technical-list">{section.items.map(item => <li key={item}>{item}</li>)}</ul>; break
    case 'metrics': content = <div className="metrics">{section.items.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span>{item.note && <small>{item.note}</small>}</div>)}</div>; break
    case 'process': content = <ol className="process-list">{section.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>; break
    case 'image-grid': content = <>{section.intro && <p className="section-intro">{section.intro}</p>}<Gallery images={section.images} /></>; break
  }
  return <motion.section className={`project-section section-${section.type}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .35 }}><h2>{section.title}</h2>{content}</motion.section>
}
