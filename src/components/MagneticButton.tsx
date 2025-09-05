import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  strength?: number // px max translate
}

export default function MagneticButton({ strength = 12, className = '', children, onMouseMove, onMouseLeave, ...rest }: Props) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [style, setStyle] = React.useState<React.CSSProperties>({})

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const dx = ((x - midX) / midX) * strength
    const dy = ((y - midY) / midY) * strength
    setStyle({ transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)` })
    onMouseMove?.(e)
  }

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setStyle({ transform: 'translate(0, 0)' })
    onMouseLeave?.(e)
  }

  return (
    <button
      ref={ref}
      className={className}
      style={{ transition: 'transform 120ms ease', willChange: 'transform', ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </button>
  )
}

