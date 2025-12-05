import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Presentation, Mic, HelpCircle } from 'lucide-react'
import TiltCard from '../components/TiltCard'

export default function Projects() {
  return (
    <section className="relative py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[var(--blue)] via-[var(--amber)] to-[var(--green)] bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            Welcome to my portfolio of technical communication work from COMM 205. 
            Below you'll find my written documents, speech presentations, and multimedia projects.
          </p>
        </div>

        {/* Analogy Paper Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-surface p-6 md:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--blue)]/20 border border-[var(--blue)]/30">
              <FileText className="text-[var(--blue)]" size={24} />
            </div>
            <h2 className="text-2xl font-semibold">Analogy Paper</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[var(--muted)] mb-4">
                Analogies are powerful tools that help audiences understand complex concepts by connecting unfamiliar ideas to everyday experiences.
                In my paper <strong>"Reshaping Robots, Reshaping the World"</strong>, I compare modular robots to water drops merging and splitting, and their coordination to a college group project, making cutting-edge robotics accessible to any reader.
              </p>
              <a 
                href="https://docs.google.com/document/d/1yRGeGwLBunIUJP95s5Kvg8ss7FPNci08-1OlLSq0eO8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)] transition-all"
              >
                <FileText size={18} />
                View Analogy Paper
              </a>
            </div>
            <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                alt="Robot technology representing modular robotics"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="blueprint-grid" />
            </TiltCard>
          </div>
        </motion.div>

        {/* FAQ Paper Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-surface p-6 md:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--amber)]/20 border border-[var(--amber)]/30">
              <HelpCircle className="text-[var(--amber)]" size={24} />
            </div>
            <h2 className="text-2xl font-semibold">FAQ Paper</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[var(--muted)] mb-4">
                FAQs anticipate reader questions and provide clear, organized answers that address common concerns and misconceptions.
                My FAQ document on <strong>"Nuclear Thermal Propulsion for Mars Missions"</strong> tackles key questions like safety, speed, and feasibility, explaining how nuclear rockets could cut travel time in half and reduce radiation exposure for astronauts.
              </p>
              <a 
                href="https://docs.google.com/document/d/1jwwaCrqS-YeZmnGR413Op3vYKPGkJ2IpcHvIir2udJY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--amber)] text-white hover:shadow-lg hover:shadow-[rgba(245,158,11,0.35)] transition-all"
              >
                <FileText size={18} />
                View FAQ Paper
              </a>
            </div>
            <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=400&fit=crop"
                alt="Mars and space exploration"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="blueprint-grid" />
            </TiltCard>
          </div>
        </motion.div>

        {/* Speech Presentations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--green)]/20 border border-[var(--green)]/30">
              <Presentation className="text-[var(--green)]" size={24} />
            </div>
            <h2 className="text-2xl font-semibold">Speech Presentations</h2>
          </div>
          
          <p className="text-[var(--muted)] mb-6">
            Below are the slides that accompanied my speeches for COMM 205.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Speech 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="card-surface p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Swimming Cyborgs</h3>
              <p className="text-[var(--muted)] mb-4 text-sm">
                Scientists are turning jellyfish into ocean-exploring robots. Yes, really. This was my intro speech 
                about how we're hacking biology to explore the deep sea in ways traditional robots can't.
              </p>
              <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&h=300&fit=crop"
                  alt="Jellyfish representing biohybrid robotics"
                  className="w-full h-36 object-cover"
                />
                <div className="blueprint-grid" />
              </TiltCard>
              <a 
                href="https://docs.google.com/presentation/d/1k0cL5MUQD0QBos6KfyDWfGAZmC_1qjgXa0Kdgza_5Pk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--green)] text-white hover:shadow-lg transition-all text-sm"
              >
                <Presentation size={16} />
                View Slides
              </a>
            </motion.div>

            {/* Speech 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-surface p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Reshaping Robots</h3>
              <p className="text-[var(--muted)] mb-4 text-sm">
                What if robots could rearrange themselves like Transformers? My informative speech dives into 
                modular robots that can literally rebuild their own bodies to tackle different jobs.
              </p>
              <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=300&fit=crop"
                  alt="Robotic arm representing modular robotics"
                  className="w-full h-36 object-cover"
                />
                <div className="blueprint-grid" />
              </TiltCard>
              <a 
                href="https://docs.google.com/presentation/d/1qRnLiQB2fWwGHK2-v3ZuHgF6eJwIoIEtTNGG6aWEISE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--green)] text-white hover:shadow-lg transition-all text-sm"
              >
                <Presentation size={16} />
                View Slides
              </a>
            </motion.div>

            {/* Speech 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="card-surface p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Which Way to Mars?</h3>
              <p className="text-[var(--muted)] mb-4 text-sm">
                For my persuasive speech, I made the case for nuclear rockets over traditional ones. Faster trips, 
                less radiation for astronauts, and NASA's already working on it. Pretty convincing stuff.
              </p>
              <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=300&fit=crop"
                  alt="Rocket launch representing Mars missions"
                  className="w-full h-36 object-cover"
                />
                <div className="blueprint-grid" />
              </TiltCard>
              <a 
                href="https://docs.google.com/presentation/d/1BMoAEMxvwJ3xjhzOXBrWIf13-pvxLBau/edit?usp=sharing&ouid=104618900628430264429&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--green)] text-white hover:shadow-lg transition-all text-sm"
              >
                <Presentation size={16} />
                View Slides
              </a>
            </motion.div>

            {/* Speech 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-surface p-6"
            >
              <h3 className="text-xl font-semibold mb-2">WATE: Teleportation Pitch</h3>
              <p className="text-[var(--muted)] mb-4 text-sm">
                Our group did a Shark Tank-style pitch for WATE, a fictional teleportation company. We had to sell 
                investors on technology that doesn't exist yet.
              </p>
              <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop"
                  alt="Futuristic technology representing teleportation"
                  className="w-full h-36 object-cover"
                />
                <div className="blueprint-grid" />
              </TiltCard>
              <a 
                href="https://docs.google.com/presentation/d/1j1mLlAEyXP4QlvWG6ECQo97ScZC7dpCL/edit?usp=sharing&ouid=104618900628430264429&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--green)] text-white hover:shadow-lg transition-all text-sm"
              >
                <Presentation size={16} />
                View Slides
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Podcast Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="card-surface p-6 md:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--maroon)]/20 border border-[var(--maroon)]/30">
              <Mic className="text-[var(--maroon)]" size={24} />
            </div>
            <h2 className="text-2xl font-semibold">Podcast</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[var(--muted)] mb-4">
                Podcasts are a great way to share ideas through conversation and make complex topics easier to understand.
                In my podcast <strong>"The Future of Work"</strong>, I discuss Uru Intelligence, the AI workspace platform I'm building, and explore why we spend too much time moving information between apps instead of doing meaningful work.
              </p>
              <a 
                href="https://drive.google.com/file/d/1wdR8Xp09F_Ye_PunvsvzPBc6k1ILYy66/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--maroon)] text-white hover:shadow-lg hover:shadow-[rgba(80,0,0,0.35)] transition-all"
              >
                <Mic size={18} />
                Listen to Podcast
              </a>
            </div>
            <TiltCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={`${import.meta.env.BASE_URL}images/uru-1.png`}
                alt="Uru Intelligence platform"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="blueprint-grid" />
            </TiltCard>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
