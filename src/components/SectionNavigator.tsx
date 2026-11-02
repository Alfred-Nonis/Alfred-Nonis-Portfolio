import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import type { ProjectSection } from '../types/project'

// Title-based IDs survive chapter reordering; only main chapters enter the rail.
export const chapterId = (title: string) => `chapter-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`

export function DetailSections({ sections, children }: { sections: ProjectSection[]; children: ReactNode }) {
  const items = [{ id: 'overview', title: 'Overview' }, ...sections.filter(section => section.type === 'chapter').map(section => ({ id: chapterId(section.title), title: section.title }))]
  return <div className="detail-layout">
    <SectionNavigator key={items.map(item => item.id).join('|')} items={items} />
    <div className="detail-content">{children}</div>
  </div>
}

function SectionNavigator({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0].id)
  const [headerHeight, setHeaderHeight] = useState(66)
  const nav = useRef<HTMLElement>(null)
  const { pathname, search } = useLocation()

  useEffect(() => {
    const element = nav.current
    const layout = element?.parentElement
    const header = document.querySelector<HTMLElement>('.site-header')
    if (!element || !layout || !header) return
    const targets = items.map(item => document.getElementById(item.id)).filter((target): target is HTMLElement => !!target)
    let observer: IntersectionObserver | undefined
    let endObserver: IntersectionObserver | undefined
    const measure = () => {
      observer?.disconnect()
      endObserver?.disconnect()
      const headerSize = header.getBoundingClientRect().height
      const horizontal = window.matchMedia('(max-width: 1279px)').matches
      const offset = headerSize + (horizontal ? element.getBoundingClientRect().height : 0) + 20
      setHeaderHeight(headerSize)
      layout.style.setProperty('--section-offset', `${offset}px`)
      const update = () => {
        // Short final chapters may never reach the top observation band.
        if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
          setActive(items[items.length - 1].id)
          return
        }
        const current = targets.filter(target => target.getBoundingClientRect().top <= offset + 1).slice(-1)[0]
        setActive(current?.id ?? items[0].id)
      }
      // A narrow band tracks the chapter under the sticky navigation, including
      // long chapters, without a continuously running scroll handler.
      observer = new IntersectionObserver(update, { rootMargin: `-${offset}px 0px -${Math.max(0, window.innerHeight - offset - 1)}px 0px`, threshold: 0 })
      targets.forEach(target => observer!.observe(target))
      const footer = document.querySelector('.site-footer')
      if (footer) {
        // The small margin accounts for fractional CSS pixels at the page end.
        endObserver = new IntersectionObserver(update, { rootMargin: '0px 0px 2px 0px', threshold: [0, 1] })
        endObserver.observe(footer)
      }
      update()
    }
    const resize = new ResizeObserver(measure)
    resize.observe(element)
    resize.observe(header)
    window.addEventListener('resize', measure)
    measure()
    return () => { observer?.disconnect(); endObserver?.disconnect(); resize.disconnect(); window.removeEventListener('resize', measure) }
  }, [items])

  useEffect(() => {
    const element = nav.current
    const link = element?.querySelector<HTMLElement>('[aria-current="location"]')
    if (!element || !link) return
    // Scroll only the bar itself; scrollIntoView here could move the document.
    const left = link.getBoundingClientRect().left - element.getBoundingClientRect().left + element.scrollLeft - (element.clientWidth - link.offsetWidth) / 2
    element.scrollTo({ left, behavior: 'instant' })
  }, [active])

  return <nav ref={nav} className="section-navigator" aria-label="Page sections" style={{ '--header-height': `${headerHeight}px` } as CSSProperties}>
    <span className="section-nav-label">On this page</span>
    {items.map(item => <a key={item.id} href={`#${pathname}${search}#${item.id}`} aria-current={active === item.id ? 'location' : undefined}
      onClick={event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        const target = document.getElementById(item.id)
        if (!target) return
        window.history.replaceState(window.history.state, '', `#${pathname}${search}#${item.id}`)
        target.focus({ preventScroll: true })
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
      }}>{item.title}</a>)}
  </nav>
}
