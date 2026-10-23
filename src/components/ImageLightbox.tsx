import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectImage } from '../types/project'
import { ImageTile } from './Media'

export function ImageLightbox({ image, close }: { image: ProjectImage; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current!
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  // The native modal traps focus; the portal avoids the scroll chapter's transform/opacity.
  return createPortal(<dialog ref={dialog} className="lightbox" aria-label={image.alt}
    onCancel={event => { event.preventDefault(); close() }}
    onKeyDown={event => {
      // There is one interactive control; keep Tab/Shift+Tab inside the viewer.
      if (event.key === 'Tab') {
        event.preventDefault()
        dialog.current?.querySelector('button')?.focus()
      }
    }}
    onClick={event => { if (event.target === event.currentTarget) close() }}>
    <figure><button type="button" onClick={close} aria-label="Close image" autoFocus>×</button>
      <ImageTile image={image} priority fit="contain" />
      <figcaption>{image.caption || image.alt}{image.description && ` — ${image.description}`}</figcaption>
    </figure>
  </dialog>, document.body)
}
