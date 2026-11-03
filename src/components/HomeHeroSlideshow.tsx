import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

// Hero slideshow duration in milliseconds. 4000 = 4 seconds.
const intervalMs = 4000

export function HomeHeroSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [index, setIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (reducedMotion || !hasMultipleImages) return
    const timer = window.setInterval(() => setIndex(current => (current + 1) % images.length), intervalMs)
    return () => window.clearInterval(timer)
  }, [hasMultipleImages, images.length, reducedMotion])

  if (!images.length) return null
  const activeIndex = reducedMotion ? 0 : index % images.length
  const displayedImages = reducedMotion ? images.slice(0, 1) : images
  return <figure className="hero-photo" aria-live="off">
    {displayedImages.map((src, imageIndex) => <img key={src} src={src} alt={imageIndex === activeIndex ? alt : ''}
      className={`hero-photo-slide${imageIndex === activeIndex ? ' is-active' : ''}`} loading={imageIndex === 0 ? 'eager' : 'lazy'} decoding="async" draggable={false} />)}
  </figure>
}
