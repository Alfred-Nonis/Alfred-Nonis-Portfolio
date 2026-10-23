import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { motion, transform, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'

/** A broad reading plateau keeps even tall sections fully visible while being read. */
function AnimatedChapter({ children, className }: { children: ReactNode; className: string }) {
  const target = useRef<HTMLElement>(null)
  const mobile = useMediaQuery('(max-width: 600px)')
  const [edge, setEdge] = useState(.2)
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] })
  useEffect(() => {
    const measure = () => {
      const height = target.current?.offsetHeight || 0
      setEdge(Math.min(.25, window.innerHeight * .32 / (height + window.innerHeight)))
    }
    const observer = new ResizeObserver(measure)
    if (target.current) observer.observe(target.current)
    window.addEventListener('resize', measure)
    measure()
    return () => { observer.disconnect(); window.removeEventListener('resize', measure) }
  }, [])
  // Callback transforms refresh when the breakpoint/section size changes, avoiding
  // a native scroll timeline retaining its initial desktop opacity keyframes.
  const opacityMap = useMemo(() => transform([0, edge, 1 - edge, 1], mobile ? [.7, 1, 1, .75] : [.3, 1, 1, .35]), [edge, mobile])
  const movementMap = useMemo(() => transform([0, edge, 1 - edge, 1], mobile ? [4, 0, 0, -3] : [16, 0, 0, -10]), [edge, mobile])
  const opacity = useTransform(scrollYProgress, opacityMap)
  const y = useTransform(scrollYProgress, movementMap)
  return <motion.section ref={target} className={className} style={{ opacity, y }}>{children}</motion.section>
}

export function ScrollChapter({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const classes = `project-section scroll-chapter ${className}`
  // Reduced motion installs no scroll observers and renders ordinary, fully visible content.
  return reducedMotion ? <section className={classes}>{children}</section> : <AnimatedChapter className={classes}>{children}</AnimatedChapter>
}
