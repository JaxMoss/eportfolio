import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import PageBackground from './components/PageBackground'
const ParticleField = React.lazy(() => import('./components/ParticleField'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router basename="/eportfolio">
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative">
        {/* Site-wide subtle grid background */}
        <div className="bg-grid fixed inset-0 z-0 pointer-events-none" />
        {/* Technical particle network (below auroras) */}
        <React.Suspense fallback={null}>
          <ParticleField />
        </React.Suspense>
        {/* Per-page background variants */}
        <PageBackground />
        <div className="bg-noise" />
        <Navbar />
        <main className="relative z-10 pt-20 pb-12">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
