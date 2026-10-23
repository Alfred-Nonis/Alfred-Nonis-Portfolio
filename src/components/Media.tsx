import { useState } from 'react'
import type { MediaFit, ProjectImage } from '../types/project'

export const assetUrl = (src: string) => /^(?:\/|https?:|data:|blob:)/.test(src) ? src : `${import.meta.env.BASE_URL}${src}`

export function ImageTile({ image, onOpen, priority = false, fit }: { image: ProjectImage; onOpen?: () => void; priority?: boolean; fit?: MediaFit }) {
  const [missingSrc, setMissingSrc] = useState<string | null>(null)
  const mediaClassName = image.src.endsWith('.png') ? 'media cad-image' : 'media'
  const mediaButtonClassName = image.src.endsWith('.png') ? 'media-button cad-image' : 'media-button'
  const content = missingSrc === image.src ? (
    <div className="image-placeholder" aria-label={`${image.caption || image.alt}. Image to be added`}>
      <span>ENGINEERING IMAGE</span>
      <strong>{image.caption || 'Image to add'}</strong>
      <small>{image.src}</small>
    </div>
  ) : <img src={assetUrl(image.src)} alt={image.alt} loading={priority ? 'eager' : 'lazy'} decoding="async" draggable={false} style={{ objectFit: fit ?? image.mediaFit ?? 'contain' }} onError={() => setMissingSrc(image.src)} />
  return onOpen ? <button className={mediaButtonClassName} type="button" onClick={onOpen} aria-label={`Open ${image.alt}`}>{content}</button> : <div className={mediaClassName}>{content}</div>
}
