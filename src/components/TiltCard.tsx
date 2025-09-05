import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

export default function TiltCard({ className = '', children }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [style, setStyle] = React.useState<React.CSSProperties>({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)',
  })
  const [shine, setShine] = React.useState<React.CSSProperties>({ opacity: 0 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (py - 0.5) * -10 // invert so top tilts back
    const rotY = (px - 0.5) * 10

    setStyle({
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`,
      transition: 'transform 80ms ease-out',
      willChange: 'transform',
    })

    setShine({
      opacity: 1,
      background: `radial-gradient(240px circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.15), transparent 60%)`,
    })
  }

  const onLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      transition: 'transform 180ms ease',
    })
    setShine({ opacity: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative ${className}`}
      style={style}
    >
      {/* soft highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200" style={shine} />
      {children}
    </div>
  )
}

