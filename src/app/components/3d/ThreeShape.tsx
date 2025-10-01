'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface ThreeShapeProps {
  contentType?: 'skills' | 'about' | 'projects' | 'contact' | 'default'
  autoRotate?: boolean
}

export default function ThreeShape({ contentType = 'default', autoRotate = true }: ThreeShapeProps) {
  const meshRef = useRef<Mesh>(null)

  // Auto-rotation animation (can be disabled for orbit controls)
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y += 0.008
    }
  })

  // Content-specific shapes and materials
  const getShapeConfig = () => {
    switch (contentType) {
      case 'skills':
        return {
          geometry: <icosahedronGeometry args={[1.2, 1]} />,
          color: "#03a678",
          roughness: 0.2,
          metalness: 0.8
        }
      case 'about':
        return {
          geometry: <sphereGeometry args={[1.1, 24, 16]} />,
          color: "#1c6bba",
          roughness: 0.4,
          metalness: 0.6
        }
      case 'projects':
        return {
          geometry: <boxGeometry args={[1.4, 1.4, 1.4]} />,
          color: "#ffa200",
          roughness: 0.3,
          metalness: 0.7
        }
      case 'contact':
        return {
          geometry: <cylinderGeometry args={[1, 1, 1.8, 8]} />,
          color: "#bf2012",
          roughness: 0.5,
          metalness: 0.4
        }
      default:
        return {
          geometry: <torusGeometry args={[1, 0.4, 12, 24]} />,
          color: "#03a678",
          roughness: 0.3,
          metalness: 0.7
        }
    }
  }

  const shapeConfig = getShapeConfig()

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {shapeConfig.geometry}
      <meshStandardMaterial
        color={shapeConfig.color}
        roughness={shapeConfig.roughness}
        metalness={shapeConfig.metalness}
      />
    </mesh>
  )
}