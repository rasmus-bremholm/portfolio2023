import { Suspense, lazy } from 'react'

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
    <div className={className} data-size={size}>
      {has3D && (
        <div>
          <Suspense fallback={<div></div>}>
            <Scene
              contentType={contentType}
              enableOrbitControls={enableOrbitControls}
            />
          </Suspense>
        </div>
      )}

      {children && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}