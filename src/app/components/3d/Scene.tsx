'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import ThreeShape from './ThreeShape'

interface SceneProps {
  position?: [number, number, number]
  enableOrbitControls?: boolean
}

export default function Scene({ position = [0, 0, 0], enableOrbitControls = true }: SceneProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45
      }}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    >
      <Suspense fallback={null}>
        {/* Basic lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />

        {/* Orbit controls for development/header */}
        {enableOrbitControls && <OrbitControls enableZoom={false} />}

        {/* Main 3D shape */}
        <ThreeShape position={position} />
      </Suspense>
    </Canvas>
  )
}