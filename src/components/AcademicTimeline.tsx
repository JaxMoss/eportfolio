import React from 'react'
import { motion } from 'framer-motion'

export type TimelineItem = {
  title: string
  subtitle?: string
  period?: string
  description?: string
}

type Props = {
  items: TimelineItem[]
  className?: string
}

export default function AcademicTimeline({ items, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" aria-hidden />
      <ul className="space-y-6">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative pl-10"
          >
            <span className="absolute left-2 top-1.5 size-4 rounded-full bg-[var(--blue)] shadow-[0_0_0_3px_rgba(59,130,246,0.25)]" />
            <div className="card-surface p-4 border border-white/10 rounded-lg">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-lg">{it.title}</h4>
                {it.period && <span className="text-xs text-[var(--muted)]">• {it.period}</span>}
              </div>
              {it.subtitle && <div className="text-sm text-[var(--muted)] mt-0.5">{it.subtitle}</div>}
              {it.description && <p className="text-sm text-[var(--muted)] mt-2">{it.description}</p>}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

