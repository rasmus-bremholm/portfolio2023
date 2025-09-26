'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface ThreeShapeProps {
  position?: [number, number, number]
  morphTarget?: 'default' | 'about' | 'projects' | 'contact'
}

export default function ThreeShape({ position = [0, 0, 0], morphTarget = 'default' }: ThreeShapeProps) {
  const meshRef = useRef<Mesh>(null)

  // Gentle rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y += 0.005
    }
  })

  // Different shapes based on morph target (extendable for your content sections)
  const getGeometry = () => {
    switch (morphTarget) {
      case 'about':
        return <sphereGeometry args={[1.2, 16, 16]} />
      case 'projects':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />
      case 'contact':
        return <cylinderGeometry args={[1, 1, 2, 8]} />
      default:
        return <torusGeometry args={[1, 0.3, 8, 16]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color="#03a678"
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  )
}