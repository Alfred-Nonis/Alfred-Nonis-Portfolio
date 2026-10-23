import { useId, useRef, useState, type PointerEvent } from 'react'
import type { MediaFit, ProjectImage } from '../types/project'
import { ImageTile } from './Media'
import { ImageLightbox } from './ImageLightbox'

export function ProjectSlideshow({ images, label, mediaFit = 'contain' }: { images: ProjectImage[]; label: string; mediaFit?: MediaFit }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const gesture = useRef<{ x: number; y: number; id: number } | null>(null)
  const suppressClick = useRef(false)
  const slideId = useId()
  const currentIndex = Math.min(index, Math.max(0, images.length - 1))
  const image = images[currentIndex]
  if (!image) return null
  const move = (direction: number) => setIndex((currentIndex + direction + images.length) % images.length)
  const finishSwipe = (event: PointerEvent<HTMLDivElement>) => {
    const start = gesture.current
    gesture.current = null
    if (!start || start.id !== event.pointerId) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4 && images.length > 1) {
      suppressClick.current = true
      move(dx < 0 ? 1 : -1)
    }
  }

  return <div className="project-slideshow" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0}
    onKeyDown={event => {
      if (lightbox || event.altKey || event.ctrlKey || event.metaKey || images.length < 2) return
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        move(event.key === 'ArrowRight' ? 1 : -1)
      }
    }}>
    <div className="slideshow-viewport"
      onPointerDown={event => {
        suppressClick.current = false
        if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return
        if (!event.isPrimary) { gesture.current = null; return }
        gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId }
        // Capture on the image button so a stationary touch still clicks it.
        const captureTarget = (event.target as Element).closest('button') ?? event.currentTarget
        captureTarget.setPointerCapture(event.pointerId)
      }}
      onPointerUp={finishSwipe} onPointerCancel={() => { gesture.current = null }}
      onClickCapture={event => {
        if (suppressClick.current && event.detail > 0) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false }
      }}>
      <figure id={slideId} className="slideshow-slide" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${images.length}`}>
        <ImageTile image={image} fit={image.mediaFit ?? mediaFit} priority={currentIndex === 0} onOpen={() => setLightbox(true)} />
        <figcaption>{image.caption || image.alt}{image.description && <span className="slide-description">{image.description}</span>}</figcaption>
      </figure>
    </div>
    {images.length > 1 && <div className="slideshow-controls">
      <button type="button" aria-label="Previous image" aria-controls={slideId} onClick={() => move(-1)}>←</button>
      <span aria-live="polite" aria-atomic="true">{currentIndex + 1} / {images.length}<span className="sr-only">: {image.caption || image.alt}</span></span>
      <button type="button" aria-label="Next image" aria-controls={slideId} onClick={() => move(1)}>→</button>
    </div>}
    {lightbox && <ImageLightbox image={image} close={() => setLightbox(false)} />}
  </div>
}
