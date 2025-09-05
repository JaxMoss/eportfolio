import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="space-y-6">
      <div className="card-surface p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">About Me</h1>
        <div className="mt-6 flex items-center justify-center">
          <div className="size-28 md:size-36 rounded-full border-2 border-[var(--maroon)] bg-gradient-to-br from-[var(--maroon)] to-[#800000] flex items-center justify-center text-3xl font-bold">
            JM
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold mt-8">Personal Portfolio</h2>
          <p className="text-[var(--muted)] mt-3">
            Hi, I’m Jackson. I’m the CEO & founder of <strong>Uru Intelligence</strong>, an AI work productivity platform I’m
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
        </div>
      </div>
    </section>
  )
}
