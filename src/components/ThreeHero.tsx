import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Rotator({ children, speed = 0.3 }: React.PropsWithChildren<{ speed?: number }>) {
  const ref = React.useRef<THREE.Group>(null!)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * speed
    ref.current.rotation.x += dt * (speed * 0.4)
  })
  return <group ref={ref}>{children}</group>
}

function Scene() {
  // Separate spread (position) from size (geometry) so we can keep wide orbits but smaller forms
  const spread = 1.5
  const size = 0.8
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={0.6} />

      <Rotator speed={0.25}>
        <mesh position={[-1.6 * spread, 0.2 * spread, 0]}>
          <torusKnotGeometry args={[0.6 * size, 0.18 * size, 128, 16]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.9} transparent />
        </mesh>
      </Rotator>

      <Rotator speed={-0.18}>
        <mesh position={[1.8 * spread, -0.1 * spread, -0.2]}>
          <icosahedronGeometry args={[0.7 * size, 0]} />
          <meshStandardMaterial color="#f59e0b" wireframe opacity={0.8} transparent />
        </mesh>
      </Rotator>

      <Rotator speed={0.12}>
        <mesh position={[0, 0.6 * spread, -0.6]}>
          <ringGeometry args={[0.9 * size, 1.0 * size, 64]} />
          <meshStandardMaterial color="#10b981" wireframe opacity={0.6} transparent />
        </mesh>
      </Rotator>
    </>
  )
}

export default function ThreeHero() {
  const prefersReduced = React.useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  if (prefersReduced) return null

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 55 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

