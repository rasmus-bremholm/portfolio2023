import styles from "@/app/styles/components/surfaces/BentoGrid.module.scss"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export default function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={`${styles.bentoGrid} ${className || ''}`}>
      {children}
    </div>
  )
}