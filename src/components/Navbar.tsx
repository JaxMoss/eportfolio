import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  const [hidden, setHidden] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const lastY = React.useRef(0)

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setHidden(y > lastY.current && y > 16)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase = 'relative text-sm md:text-base text-[var(--muted)] hover:text-[var(--text)] transition-colors'
  const linkActive = 'text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[var(--blue)]'

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-[var(--text)]">
            Jackson Moss
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu size={22} />
          </button>
          <ul className="hidden md:flex items-center gap-8">
            <li><Link to="/" className={`${linkBase} ${location.pathname === '/' ? linkActive : ''}`}>Home</Link></li>
            <li><Link to="/about" className={`${linkBase} ${location.pathname === '/about' ? linkActive : ''}`}>About</Link></li>
            <li><Link to="/projects" className={`${linkBase} ${location.pathname === '/projects' ? linkActive : ''}`}>Projects</Link></li>
            <li><Link to="/contact" className={`${linkBase} ${location.pathname === '/contact' ? linkActive : ''}`}>Contact</Link></li>
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
