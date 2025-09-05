import React from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const prefersReduced = React.useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  React.useEffect(() => {
    if (prefersReduced) return
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      // @ts-expect-error destroy exists at runtime
      lenis.destroy?.()
    }
  }, [prefersReduced])

  return null
}

