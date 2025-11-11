interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export default function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}