import { useState } from 'react'
import type { ProjectImage } from '../types/project'

export const assetUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`

export function ImageTile({ image, onOpen, priority = false }: { image: ProjectImage; onOpen?: () => void; priority?: boolean }) {
  const [missing, setMissing] = useState(false)
  const mediaClassName = image.src.endsWith('.png') ? 'media cad-image' : 'media'
  const mediaButtonClassName = image.src.endsWith('.png') ? 'media-button cad-image' : 'media-button'
  const content = missing ? (
    <div className="image-placeholder" aria-label={`${image.caption || image.alt}. Image to be added`}>
      <span>ENGINEERING IMAGE</span>
      <strong>{image.caption || 'Image to add'}</strong>
      <small>{image.src}</small>
    </div>
  ) : <img src={assetUrl(image.src)} alt={image.alt} loading={priority ? 'eager' : 'lazy'} onError={() => setMissing(true)} />
  return onOpen ? <button className={mediaButtonClassName} type="button" onClick={onOpen} aria-label={`Open ${image.alt}`}>{content}</button> : <div className={mediaClassName}>{content}</div>
}
