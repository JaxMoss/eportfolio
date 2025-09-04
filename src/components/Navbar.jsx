import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Jackson Moss
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
