import { useEffect, useRef, useState } from 'react'

/**
 * Observes an element and reports whether it is near the viewport.
 * `inView` starts as `initiallyVisible` so above-the-fold canvases can
 * render immediately without waiting for the first IntersectionObserver tick.
 */
export default function useInView(rootMargin = '200px', initiallyVisible = false) {
  const ref = useRef(null)
  const [inView, setInView] = useState(initiallyVisible)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
