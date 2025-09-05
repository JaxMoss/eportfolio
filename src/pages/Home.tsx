import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* background effects handled globally in App */}
      <div className="relative w-full">
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
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[var(--muted)] text-lg max-w-2xl mx-auto"
          >
            I’m Jackson — CEO & founder of Uru Intelligence. I’m launching an AI work productivity platform. I also study Mechanical Engineering at Texas A&M.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <Link to="/projects">
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)]"
              >
                Explore My Work
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Featured: Uru Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="card-surface p-6 md:p-8 mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Uru Intelligence</h2>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            I’m building Uru Intelligence — an AI work productivity platform designed to make teams faster, clearer,
            and more effective. It blends smart automation with clean communication so your work moves forward without friction.
          </p>
          <div className="mt-4">
            <Link to="/projects">
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)]"
              >
                Learn more
              </MagneticButton>
            </Link>
          </div>
        </motion.div>

        {/* Intro */}
        <div className="card-surface p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-semibold">Welcome</h2>
          <p className="text-[var(--muted)] mt-3">
            I like building useful things with a clear purpose. Uru Intelligence is the best example of that — a tool that
            helps people work smarter, communicate better, and get results faster. Along the way, I’m studying Mechanical
            Engineering at Texas A&M and staying hands-on with design, systems, and communication.
          </p>
          <p className="text-[var(--muted)] mt-3">
            My background includes Program Director at New England Sci‑Tech (STEM education center for kids), FIRST Robotics,
            SOLIDWORKS design, BlueStamp Engineering, NASA Space Camp Advanced Training, and Aggies Invent — plus a lot of
            writing that turns complex ideas into something people can actually use.
          </p>
        </div>
      </div>
    </section>
  )
}
