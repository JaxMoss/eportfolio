import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'
import TiltCard from '../components/TiltCard'
import TypewriterText from '../components/TypewriterText'

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-visible">
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
            <TypewriterText
              text="Jax Moss"
              className="bg-gradient-to-r from-[var(--blue)] via-[var(--amber)] to-[var(--green)] bg-clip-text text-transparent"
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[var(--muted)] text-lg max-w-2xl mx-auto"
          >
            Mechanical Engineering Student at Texas A&M University
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
                View My Work
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Introduction */}
        <div className="card-surface p-6 md:p-8 mt-6">
          <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
          <p className="text-[var(--muted)] mt-3">
            Welcome to my personal portfolio website! I'm Jax Moss, a Mechanical Engineering student at Texas A&M University. 
            This site showcases my work as a Technical Communicator, featuring projects I've completed throughout my 
            COMM 205 course. Here you'll find examples of my writing, presentations, and multimedia work that demonstrate 
            my ability to communicate complex ideas clearly and effectively. From analogy papers to FAQ documents, 
            speech presentations to podcasts, each project represents my growth in professional communication skills.
          </p>
        </div>

        {/* Quick Links to Projects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="card-surface p-6 md:p-8 mt-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Work</h2>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            Explore my technical communication projects including written documents, speech presentations, and audio content. 
            Each piece demonstrates different aspects of effective professional communication.
          </p>
          
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Analogy Paper', desc: 'Written Communication' },
              { title: 'FAQ Document', desc: 'User-Focused Writing' },
              { title: 'Speech Presentations', desc: 'Visual & Oral Communication' },
              { title: 'Podcast', desc: 'Audio Communication' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 h-32 flex flex-col justify-center text-center">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm mt-1">{item.desc}</p>
                  <div className="blueprint-grid" />
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Link to="/projects">
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)]"
              >
                View All Projects
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
