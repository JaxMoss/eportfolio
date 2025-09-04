import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="w-full">
        {/* Hero */}
        <div className="text-center py-10">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-[var(--blue)] via-[var(--amber)] to-[var(--green)] bg-clip-text text-transparent">
              Jackson Moss
            </span>
            <span className="type-caret" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[var(--muted)] text-lg"
          >
            Mechanical Engineering • Texas A&M University • National Merit Finalist
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
            </Link>
          </motion.div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[
            { k: 'Major', v: 'Mechanical Engineering' },
            { k: 'School', v: 'Texas A&M University' },
            { k: 'Year', v: 'Sophomore' },
            { k: 'Status', v: 'National Merit Finalist' },
            { k: 'Residence', v: 'Appelt Hall, College Station, TX' },
            { k: 'Focus', v: 'Technical Communication & Innovation' },
          ].map(({ k, v }) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="card-surface p-5"
            >
              <div className="text-sm text-[var(--muted)]">{k}</div>
              <div className="text-lg md:text-xl font-semibold mt-1">{v}</div>
            </motion.div>
          ))}
        </div>

        {/* Intro */}
        <div className="card-surface p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
          <p className="text-[var(--muted)] mt-3">
            This website showcases my journey as a Mechanical Engineering student at Texas A&M University and my
            development as a technical communicator. As a National Merit Finalist, I entered directly into the Mechanical
            Engineering program, bypassing the traditional ETAM process.
          </p>
          <p className="text-[var(--muted)] mt-3">
            I combine rigorous engineering principles with effective communication, preparing for a future where I can
            lead complex engineering projects while clearly articulating solutions to diverse stakeholders.
          </p>
          <p className="text-[var(--muted)] mt-3">
            Experience spans SOLIDWORKS design, BlueStamp Engineering, NASA Space Camp Advanced Training, Aggies Invent,
            and work on the Uru AI platform.
          </p>
        </div>
      </div>
    </section>
  )
}
