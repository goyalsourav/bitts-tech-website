import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div
      className={`flex flex-col ${alignment} ${
        align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl'
      } ${className ?? ''}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:whitespace-nowrap lg:text-[2.55rem] lg:leading-[1.06] xl:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg lg:whitespace-nowrap">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
