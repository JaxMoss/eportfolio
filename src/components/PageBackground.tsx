import React from 'react'
import { useLocation } from 'react-router-dom'

const ThreeHero = React.lazy(() => import('./ThreeHero'))

export default function PageBackground() {
  const { pathname } = useLocation()

  // Decide variant by route
  const variant =
    pathname === '/' ? 'home' :
    pathname.startsWith('/about') ? 'about' :
    pathname.startsWith('/projects') ? 'projects' :
    pathname.startsWith('/contact') ? 'contact' : 'home'

  const isHome = variant === 'home'

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-visible">
      {/* ThreeHero spans the full viewport and fades when not on Home */}
      <div className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${isHome ? 'opacity-100' : 'opacity-0'}`}>
        <React.Suspense fallback={null}>
          <ThreeHero />
        </React.Suspense>
      </div>

      {/* Aurora layers vary by route */}
      {isHome && (
        <>
          <div className="aurora aurora-slow left-1/2 -translate-x-1/2 -top-1/3" />
          <div className="aurora aurora-blue right-[-10%] top-1/4" />
          <div className="aurora aurora-amber left-[-15%] bottom-0" />
          <div className="beam beam-center" />
        </>
      )}

      {variant === 'about' && (
        <>
          <div className="aurora aurora-maroon left-1/3 -top-24" />
          <div className="aurora aurora-steel right-1/4 bottom-[-10%]" />
          <div className="beam beam-diagonal" />
        </>
      )}

      {variant === 'projects' && (
        <>
          <div className="aurora aurora-violet left-[-10%] top-1/3" />
          <div className="aurora aurora-blue right-[-15%] top-1/2" />
          <div className="beam beam-wide" />
        </>
      )}

      {variant === 'contact' && (
        <>
          <div className="aurora aurora-teal left-1/2 -translate-x-1/2 bottom-[-15%]" />
          <div className="aurora aurora-blue right-[-10%] top-0" />
        </>
      )}
    </div>
  )
}

