import React from 'react'
import { motion } from 'framer-motion'
import { FolderKanban } from 'lucide-react'

export default function Projects() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background handled globally */}
      <div className="glow glow-blue left-1/2 -translate-x-1/2 -top-40" />
      <div className="glow glow-green -left-40 top-40" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative card-surface px-8 py-12 text-center max-w-3xl mx-auto"
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
    </section>
  )
}
