import React from 'react'

function lerp(a: number, b: number, n: number) { return a + (b - a) * n }

export default function CustomCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null)
  const ringRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(false)
  const [down, setDown] = React.useState(false)

  const prefersReduced = React.useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  React.useEffect(() => {
    if (prefersReduced) return

    let raf = 0
    const dot = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: dot.x, y: dot.y }
    const target = { x: dot.x, y: dot.y }

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const loop = () => {
      // snappy dot, smoother ring
      dot.x = lerp(dot.x, target.x, 0.45)
      dot.y = lerp(dot.y, target.y, 0.45)
      ring.x = lerp(ring.x, target.x, 0.18)
      ring.y = lerp(ring.y, target.y, 0.18)

      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`

      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    const isInteractive = (el: Element | null) => !!el && !!el.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')
    const onOver = (e: MouseEvent) => setActive(isInteractive(e.target as Element))
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    document.addEventListener('mousemove', onOver, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mousemove', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <>
      <div ref={ringRef} className={`cursor-ring${active ? ' cursor-active' : ''}${down ? ' cursor-down' : ''}`} />
      <div ref={dotRef} className={`cursor-dot${active ? ' cursor-active' : ''}${down ? ' cursor-down' : ''}`} />
    </>
  )
}

