interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function Section({ children, className = '', id, delay = 0 }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      {children}
    </section>
  )
}
