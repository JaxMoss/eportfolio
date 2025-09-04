import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const cards = [
    { t: 'Engineering Documentation', d: 'Technical reports, design documentation, and SOLIDWORKS presentations' },
    { t: 'Innovation Projects', d: 'Aggies Invent challenges and engineering design solutions' },
    { t: 'Platform Development', d: 'Uru platform contributions and dashboards' },
    { t: 'Academic Projects', d: 'Course assignments and research presentations' },
    { t: 'Visual Communication', d: 'Engineering diagrams and technical infographics' },
    { t: 'Professional Development', d: 'BlueStamp, NASA Space Camp, and more' },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-[var(--muted)] mt-3 max-w-2xl mx-auto">
          This section showcases technical communication and engineering design work demonstrating the intersection of
          technical expertise and effective communication.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="card-surface p-5 hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold">{c.t}</h3>
            <p className="text-[var(--muted)] mt-2">{c.d}</p>
            <div className="mt-4 text-sm text-[var(--muted)]">Preview coming soon</div>
          </motion.div>
        ))}
      </div>

      <div className="card-surface p-5 border border-dashed border-muted">
        <p className="text-[var(--muted)] text-center">
          <strong>Portfolio Update:</strong> This projects section will be completed and populated with detailed
          descriptions, process documentation, and reflections at the end of the semester.
        </p>
      </div>
    </section>
  )
}
