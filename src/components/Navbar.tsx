import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

function Navbar() {
  const location = useLocation()
  const [hidden, setHidden] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const lastY = React.useRef(0)

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setHidden(y > lastY.current && y > 16)
      lastY.current = y
      const scrolled = (y / ((document.body.scrollHeight - window.innerHeight) || 1)) * 100
      setProgress(Math.min(100, Math.max(0, scrolled)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase = 'relative text-sm md:text-base text-[var(--muted)] hover:text-[var(--text)] transition-colors'
  const linkActive = 'text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[var(--blue)]'

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] bg-gradient-to-r from-[var(--blue)] via-[var(--amber)] to-[var(--green)]"
        style={{ width: `${progress}%` }}
      />
      <nav className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="glass relative">
          <div className="nav-shimmer" aria-hidden />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-tight text-[var(--text)]">
              Jax Moss
            </Link>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu size={22} />
            </button>
            <ul className="hidden md:flex items-center gap-8">
              <li className="relative">
                <Link to="/" className={`${linkBase} ${location.pathname === '/' ? linkActive : ''}`}>
                  <motion.span whileHover={{ y: -1, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>Home</motion.span>
                </Link>
                {location.pathname === '/' && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--blue)]" />
                )}
              </li>
              <li className="relative">
                <Link to="/about" className={`${linkBase} ${location.pathname === '/about' ? linkActive : ''}`}>
                  <motion.span whileHover={{ y: -1, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>About</motion.span>
                </Link>
                {location.pathname === '/about' && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--blue)]" />
                )}
              </li>
              <li className="relative">
                <Link to="/projects" className={`${linkBase} ${location.pathname === '/projects' ? linkActive : ''}`}>
                  <motion.span whileHover={{ y: -1, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>Projects</motion.span>
                </Link>
                {location.pathname === '/projects' && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--blue)]" />
                )}
              </li>
              <li className="relative">
                <Link to="/contact" className={`${linkBase} ${location.pathname === '/contact' ? linkActive : ''}`}>
                  <motion.span whileHover={{ y: -1, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>Contact</motion.span>
                </Link>
                {location.pathname === '/contact' && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--blue)]" />
                )}
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jackson-moss-b76335265/" target="_blank" rel="noreferrer" className={linkBase}>
                  <motion.span whileHover={{ y: -1, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>LinkedIn</motion.span>
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-muted/20">
              <ul className="px-4 py-3 space-y-2 bg-[var(--bg-2)]">
                <li><Link onClick={() => setOpen(false)} to="/" className={`${linkBase} block py-1 ${location.pathname === '/' ? linkActive : ''}`}>Home</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/about" className={`${linkBase} block py-1 ${location.pathname === '/about' ? linkActive : ''}`}>About</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/projects" className={`${linkBase} block py-1 ${location.pathname === '/projects' ? linkActive : ''}`}>Projects</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/contact" className={`${linkBase} block py-1 ${location.pathname === '/contact' ? linkActive : ''}`}>Contact</Link></li>
                <li><a onClick={() => setOpen(false)} href="https://www.linkedin.com/in/jackson-moss-b76335265/" target="_blank" rel="noreferrer" className={`${linkBase} block py-1`}>LinkedIn</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
