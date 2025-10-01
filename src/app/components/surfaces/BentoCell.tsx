import { Suspense, lazy } from 'react'
import styles from "@/app/styles/components/surfaces/BentoCell.module.scss"

// Lazy load Scene component for performance
const Scene = lazy(() => import('../3d/Scene'))

interface BentoCellProps {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xl'
  has3D?: boolean
  contentType?: 'skills' | 'about' | 'projects' | 'contact' | 'default'
  enableOrbitControls?: boolean
  className?: string
}

export default function BentoCell({
  children,
  size = 'medium',
  has3D = false,
  contentType = 'default',
  enableOrbitControls = false,
  className
}: BentoCellProps) {
  return (
    <div className={`${styles.bentoCell} ${styles[size]} ${className || ''}`} data-size={size}>
      {has3D && (
        <div className={styles.threeDContainer}>
          <Suspense fallback={<div className={styles.threeDFallback}></div>}>
            <Scene
              contentType={contentType}
              enableOrbitControls={enableOrbitControls}
              className={styles.threeScene}
            />
          </Suspense>
        </div>
      )}

      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  )
}