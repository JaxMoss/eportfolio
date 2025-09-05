import React from 'react'

type Particle = { x: number; y: number; vx: number; vy: number }

export default function ParticleField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const prefersReduced = React.useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  React.useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let raf = 0
    const mouse = { x: -1e9, y: -1e9 }
    const M = 28 // wrap margin so particles traverse the whole background

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor((width * height) / 22000)
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height)
      const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue').trim() || '#3b82f6'
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--amber').trim() || '#f59e0b'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // mild attraction to mouse
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist2 = dx * dx + dy * dy
        if (dist2 < 18000) {
          p.vx += (dx / Math.sqrt(dist2 + 0.0001)) * 0.02
          p.vy += (dy / Math.sqrt(dist2 + 0.0001)) * 0.02
        }
        // drift + damping
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99
        // wrap around edges so nothing looks cut off
        if (p.x < -M) p.x = width + M
        else if (p.x > width + M) p.x = -M
        if (p.y < -M) p.y = height + M
        else if (p.y > height + M) p.y = -M

        // draw node
        ctx.fillStyle = 'rgba(255,255,255,0.3)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2)
        ctx.fill()

        // connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ddx = q.x - p.x
          const ddy = q.y - p.y
          const d2 = ddx * ddx + ddy * ddy
          if (d2 < 7000) {
            const a = Math.max(0, 1 - d2 / 7000)
            ctx.strokeStyle = `rgba(59,130,246,${0.22 * a})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          } else if (d2 < 15000) {
            const a = Math.max(0, 1 - (d2 - 7000) / 8000)
            ctx.strokeStyle = `rgba(245,158,11,${0.12 * a})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
  )
}

