import React from 'react'
import { motion } from 'framer-motion'
import { FolderKanban } from 'lucide-react'
import FlipCard from '../components/FlipCard'
import TiltCard from '../components/TiltCard'

export default function Projects() {
  return (
    <section className="relative py-10">
      {/* Subtle background handled globally */}
      {/* color glows handled globally in App */}

      {/* Header area: Coming Soon + Upcoming side by side */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative card-surface px-8 py-12 text-center"
        >
          <div className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6">
            <FolderKanban className="text-[var(--blue)]" size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[var(--blue)] via-[var(--amber)] to-[var(--green)] bg-clip-text text-transparent">
              Projects Coming Soon
            </span>
          </h1>
          <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            My flagship project is <strong>Uru Intelligence</strong> — an AI work productivity platform I’m launching as
            CEO & founder. I’ll be sharing product details, demos, and the story behind the build here soon.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <span>ETA:</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">End of Semester</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="relative card-surface p-6 text-left"
        >
          <h3 className="text-xl font-semibold">Upcoming showcases</h3>
          <p className="text-[var(--muted)] mt-3 text-sm">More projects will appear here with animated blueprints, interactive specs, and development timelines.</p>
          <p className="text-[var(--muted)] mt-2 text-sm">Filters, 3D previews, and progress indicators are planned.</p>
        </motion.div>
      </div>

      {/* Interactive sample card */}
      <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FlipCard
          className="h-64"
          front={
            <div className="card-surface h-full w-full rounded-xl overflow-hidden border border-white/10 relative">
              <img src={`${import.meta.env.BASE_URL}images/uru-1.png`} alt="Uru Intelligence" className="absolute inset-0 size-full object-cover" />
              <div className="blueprint-grid" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />
              <div className="absolute bottom-3 left-3 text-sm px-2 py-1 rounded bg-black/40 border border-white/10">Uru Intelligence</div>
            </div>
          }
          back={
            <div className="card-surface h-full w-full rounded-xl overflow-hidden border border-white/10 p-4 text-left">
              <h3 className="text-xl font-semibold">Uru Intelligence — Specs</h3>
              <ul className="mt-3 space-y-1 text-[var(--muted)] text-sm">
                <li>• Platform: Web, multi-tenant</li>
                <li>• Focus: Workflows, collaboration, clarity</li>
                <li>• Tech: React + Vite; AI pipeline</li>
                <li>• Status: Launch in progress</li>
              </ul>
              <div className="mt-4 text-xs text-[var(--muted)]">Hover to flip • Engineering blueprint style</div>
            </div>
          }
        />
      </div>

      {/* Project Gallery with Filters */}
      <Gallery />
    </section>
  )
}


function Gallery() {
  const CATEGORIES = ['All', 'AI', 'Mechanical', 'Academic'] as const
  type Cat = typeof CATEGORIES[number]
  const ITEMS: { id: string; title: string; img: string; categories: Cat[] }[] = [
    { id: 'uru-1', title: 'Uru Intelligence · AI Platform', img: 'uru-1.png', categories: ['AI'] },
    { id: 'uru-2', title: 'Uru · Workflows', img: 'uru-2.png', categories: ['AI'] },
    { id: 'uru-3', title: 'Uru · Interfaces', img: 'uru-3.png', categories: ['AI'] },
    { id: 'mech-1', title: 'Mechanical Design Study', img: 'about-4.png', categories: ['Mechanical'] },
    { id: 'acad-1', title: 'Academic Project Brief', img: 'about-1.jpg', categories: ['Academic'] },
  ]
  const [filter, setFilter] = React.useState<Cat>('All')
  const shown = ITEMS.filter(i => filter === 'All' || i.categories.includes(filter))

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`chip ${filter===cat ? 'active' : ''}`}
            aria-pressed={filter===cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={`${import.meta.env.BASE_URL}images/${p.img}`}
                alt={p.title}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="blueprint-grid" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-sm bg-gradient-to-t from-black/40 to-transparent">
                <div className="font-medium">{p.title}</div>
                <div className="text-[var(--muted)]">{p.categories.join(' · ')} </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

