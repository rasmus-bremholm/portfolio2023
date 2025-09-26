'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Scene from './Scene'

interface ScrollingThreeContainerProps {
  currentSection?: number
}

export default function ScrollingThreeContainer({ currentSection = 0 }: ScrollingThreeContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll to horizontal positions (alternating left/right)
  const xPosition = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['50%', '0%', '50%', '0%', '50%'])

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Fixed 3D container that follows scroll */}
      <motion.div
        style={{
          position: 'fixed',
          top: '50%',
          right: xPosition,
          transform: 'translateY(-50%)',
          width: '50%',
          height: '50vh',
          zIndex: 10,
          pointerEvents: 'none', // Allow clicks to pass through to content
        }}
      >
        <Scene
          enableOrbitControls={false} // Disable for scroll-controlled version
        />
      </motion.div>
    </div>
  )
}