import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const photos = [
    { src: 'about-1.jpg', alt: 'Outdoor event' },
    { src: 'about-2.jpg', alt: 'Portrait' },
    { src: 'about-3.jpg', alt: 'Robotics workshop' },
    { src: 'about-4.png', alt: 'CAD/Design' },
  ]
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
      else if (e.key === 'ArrowRight') setOpenIndex(i => i === null ? 0 : (i + 1) % photos.length)
      else if (e.key === 'ArrowLeft') setOpenIndex(i => i === null ? 0 : (i - 1 + photos.length) % photos.length)
    }
    if (openIndex !== null) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex])

  return (
    <section className="space-y-6">
      <div className="card-surface p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">About Me</h1>
        <div className="mt-6 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
            alt="Jax Moss headshot"
            className="size-28 md:size-36 rounded-full object-cover border-2 border-[var(--maroon)] shadow-lg"
          />
        </div>
        {/* Masonry gallery (preserves orientation) */}
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{ contain: 'content' }}
              className="relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${p.src}`}
                alt={p.alt}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="absolute inset-0 cursor-zoom-in focus:outline-none"
                aria-label="Open image"
              />
            </motion.figure>
          ))}
        </div>

        {openIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            data-lenis-prevent
            onClick={() => setOpenIndex(null)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${photos[openIndex].src}`}
              alt={photos[openIndex].alt}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpenIndex(i => i === null ? 0 : (i - 1 + photos.length) % photos.length) }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpenIndex(i => i === null ? 0 : (i + 1) % photos.length) }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl"
              aria-label="Next image"
            >
              ›
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpenIndex(null) }}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white text-2xl"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold mt-8">Who I Am</h2>
          <p className="text-[var(--muted)] mt-3">
            Hi, I'm Jax Moss — a Mechanical Engineering student at Texas A&M University with a passion for building things 
            that matter. I believe the best engineers are also great communicators, which is why I'm committed to developing 
            both my technical and communication skills throughout my academic journey.
          </p>

          <h2 className="text-2xl font-semibold mt-8">What Makes Me Unique</h2>
          <p className="text-[var(--muted)] mt-3">
            I'm not your typical engineering student. I bring a unique blend of technical expertise and entrepreneurial drive. 
            As the CEO & founder of <strong>Uru Intelligence</strong>, I'm building an AI work productivity platform while 
            balancing my engineering studies. This dual focus has taught me how to manage complex projects, communicate 
            across different audiences, and turn ideas into reality.
          </p>

          <h2 className="text-2xl font-semibold mt-8">My Personal Interests</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Technology & Innovation</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Building AI-powered tools and platforms</li>
                <li>Exploring new technologies and their applications</li>
                <li>3D design and CAD modeling with SOLIDWORKS</li>
                <li>Robotics and automation systems</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Learning & Growth</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Continuous learning through hands-on projects</li>
                <li>Attending engineering competitions like Aggies Invent</li>
                <li>Exploring aerospace through NASA Space Camp</li>
                <li>Teaching STEM concepts to younger students</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Communication & Leadership</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Translating complex ideas into clear explanations</li>
                <li>Leading teams and mentoring others</li>
                <li>Public speaking and presentation skills</li>
                <li>Writing that connects with diverse audiences</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Problem Solving</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Finding creative solutions to engineering challenges</li>
                <li>Building products that solve real problems</li>
                <li>Iterating and improving based on feedback</li>
                <li>Collaborating across disciplines</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Background & Experience</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Technical Training</h3>
              <p className="text-[var(--muted)] mt-2">
                <strong>BlueStamp Engineering</strong> — Intensive hands-on program<br/>
                <strong>NASA Space Camp</strong> — Advanced aerospace training<br/>
                <strong>FIRST Robotics</strong> — Competition robotics experience
              </p>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Leadership Roles</h3>
              <p className="text-[var(--muted)] mt-2">
                <strong>Uru Intelligence</strong> — CEO & Founder<br/>
                <strong>New England Sci-Tech</strong> — Former Program Director<br/>
                <strong>Aggies Invent</strong> — Competition participant
              </p>
            </div>
          </div>

          <p className="text-[var(--muted)] mt-6">
            What drives me is the intersection of engineering and communication. I believe the most impactful work 
            happens when great ideas are communicated clearly — and that's what I strive to achieve in everything I do.
          </p>

        </motion.div>
      </div>
    </section>
  )
}
