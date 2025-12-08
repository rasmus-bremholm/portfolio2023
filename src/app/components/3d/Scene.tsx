'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import ThreeShape from './ThreeShape'

interface SceneProps {
  contentType?: 'skills' | 'about' | 'projects' | 'contact' | 'default'
  enableOrbitControls?: boolean
  autoRotate?: boolean
  className?: string
}

export default function Scene({
  contentType = 'default',
  enableOrbitControls = false,
  autoRotate = true,
  className
}: SceneProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 50
        }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting for bento cells */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={0.8} />

          {/* Optional orbit controls */}
          {enableOrbitControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={1}
            />
          )}

          {/* Content-specific 3D shape */}
          <ThreeShape contentType={contentType} autoRotate={autoRotate && !enableOrbitControls} />
        </Suspense>
      </Canvas>
    </div>
  )
}