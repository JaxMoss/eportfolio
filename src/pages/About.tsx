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
          <h2 className="text-2xl font-semibold mt-8">Personal Portfolio</h2>
          <p className="text-[var(--muted)] mt-3">
            Hi, I’m Jax. I’m the CEO & founder of <strong>Uru Intelligence</strong>, an AI work productivity platform I’m
            launching. I also study Mechanical Engineering at Texas A&M. This site shares what I’m building and how I think
            about engineering, product, and clear communication.
          </p>

          <h2 className="text-2xl font-semibold mt-8">About Me</h2>
          <p className="text-[var(--muted)] mt-3">
            I like building useful, well-explained products. My focus is pairing solid engineering with writing and
            design so ideas make sense to the people who need them.
          </p>

          <h2 className="text-2xl font-semibold mt-8">My Diverse Interests and Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Engineering & Technical Innovation</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>SOLIDWORKS advanced design</li>
                <li>FIRST Robotics</li>
                <li>BlueStamp Engineering and NASA Space Camp Advanced Training</li>
                <li>Aggies Invent participation</li>
                <li>Robotics, manufacturing, and technical problem-solving</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Technical Communication Excellence</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Translating complex engineering concepts</li>
                <li>Bridging technical and non-technical audiences</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Academic Focus</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Mechanical Engineering coursework: design, systems, technical writing</li>
              </ul>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Leadership & Innovation</h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[var(--muted)]">
                <li>Uru Intelligence (CEO & Founder)</li>
                <li>Program Director, New England Sci-Tech (STEM education for kids)</li>
                <li>Financial dashboards and documentation</li>
                <li>Collaborative university projects and competitions</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Current Technical Competencies</h3>
              <p className="text-[var(--muted)] mt-2">
                <strong>CAD/Design:</strong> SOLIDWORKS<br/>
                <strong>Programming:</strong> AI platform development, financial modeling<br/>
                <strong>Coursework:</strong> Mechanical Engineering fundamentals, technical writing
              </p>
            </div>
            <div className="card-surface p-5">
              <h3 className="text-xl font-semibold">Key Experiences</h3>
              <p className="text-[var(--muted)] mt-2">
                <strong>BlueStamp Engineering</strong> — Multi-week intensive program<br/>
                <strong>NASA Space Camp</strong> — Advanced aerospace training<br/>
                <strong>Aggies Invent</strong> — Innovation competition
              </p>
            </div>
          </div>

          <p className="text-[var(--muted)] mt-6">
            I value both technical precision and clear communication. The most impactful engineers not only solve
            complex problems but also communicate their solutions effectively.
          </p>


        </motion.div>
      </div>
    </section>
  )
}
