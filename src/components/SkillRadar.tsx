import React from 'react'
import { motion } from 'framer-motion'

type Skill = { label: string; value: number }

type Props = {
  skills: Skill[]
  size?: number
  className?: string
}

export default function SkillRadar({ skills, size = 260, className = '' }: Props) {
  const n = skills.length
  const cx = size / 2
  const cy = size / 2
  const margin = 24
  const r = size / 2 - margin

  const points = skills.map((s, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const rr = r * Math.max(0, Math.min(1, s.value / 100))
    const x = cx + Math.cos(angle) * rr
    const y = cy + Math.sin(angle) * rr
    return `${x},${y}`
  }).join(' ')

  const ring = (factor: number) => new Array(n).fill(0).map((_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const rr = r * factor
    const x = cx + Math.cos(angle) * rr
    const y = cy + Math.sin(angle) * rr
    return `${x},${y}`
  }).join(' ')

  const prefersReduced = React.useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  return (
    <div className={className}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block mx-auto">
        {/* axes */}
        {skills.map((_, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2
          const x2 = cx + Math.cos(angle) * r
          const y2 = cy + Math.sin(angle) * r
          return <line key={`axis-${i}`} x1={cx} y1={cy} x2={x2} y2={y2} stroke="rgba(148,163,184,0.25)" strokeWidth={1} />
        })}

        {/* grid rings */}
        {[0.33, 0.66, 1].map((f, idx) => (
          <polygon key={`ring-${idx}`} points={ring(f)} fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth={1} />
        ))}

        {/* data polygon */}
        {prefersReduced ? (
          <polygon points={points} fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth={2} />
        ) : (
          <motion.polygon
            points={points}
            initial={{ opacity: 0, scale: 0.92, originX: cx, originY: cy }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            fill="rgba(59,130,246,0.18)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        )}

        {/* labels */}
        {skills.map((s, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2
          const x = cx + Math.cos(angle) * (r + 12)
          const y = cy + Math.sin(angle) * (r + 12)
          const anchor = Math.cos(angle) > 0.1 ? 'start' : (Math.cos(angle) < -0.1 ? 'end' : 'middle')
          return (
            <text key={`label-${i}`} x={x} y={y} textAnchor={anchor as any} dominantBaseline="middle" fill="var(--muted)" fontSize={12}>
              {s.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

