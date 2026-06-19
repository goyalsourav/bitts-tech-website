'use client'

import {
  Search,
  ClipboardList,
  PenTool,
  Hammer,
  Workflow,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import { Reveal } from './reveal'

const steps = [
  {
    icon: Search,
    title: 'Understand Your Business',
    desc: 'We start with your goals, users, and constraints - not code. Clarity first.',
  },
  {
    icon: ClipboardList,
    title: 'Plan the System',
    desc: 'Architecture, data flow, and scope mapped into a clear, scalable blueprint.',
  },
  {
    icon: PenTool,
    title: 'Design the Experience',
    desc: 'Clean, intuitive interfaces that feel effortless across every device.',
  },
  {
    icon: Hammer,
    title: 'Build the Product',
    desc: 'Robust, maintainable code engineered for performance and growth.',
  },
  {
    icon: Workflow,
    title: 'Integrate APIs & Automation',
    desc: 'Connect your tools and remove manual work with smart automations.',
  },
  {
    icon: Rocket,
    title: 'Launch Smoothly',
    desc: 'Thorough testing and a confident, zero-drama go-live.',
  },
  {
    icon: LifeBuoy,
    title: 'Support After Go-Live',
    desc: 'We stay on as your technical partner long after launch day.',
  },
]

export function FlowSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-36" aria-label="Our delivery flow">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-1/4 size-[400px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            The Flow
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            From Idea to Launch - We Build the Complete Digital Flow
          </h2>
        </div>

        <div className="relative mt-14 lg:mt-18">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-border/70 sm:left-1/2" />

          <ol className="space-y-7 sm:space-y-4">
            {steps.map((step, i) => (
              <FlowItem key={step.title} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function FlowItem({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const Icon = step.icon
  const isLeft = index % 2 === 0

  return (
    <li
      className={`relative flex sm:w-1/2 ${
        isLeft ? 'sm:pr-12' : 'sm:ml-auto sm:pl-12'
      }`}
    >
      <span
        className={`absolute left-4 top-6 z-10 flex size-4 -translate-x-1/2 items-center justify-center sm:top-1/2 sm:-translate-y-1/2 ${
          isLeft ? 'sm:left-auto sm:right-0 sm:translate-x-1/2' : 'sm:left-0 sm:-translate-x-1/2'
        }`}
      >
        <span className="size-3 rounded-full border-2 border-primary bg-background shadow-[0_0_0_6px_oklch(0.55_0.214_258_/_0.1)]" />
      </span>

      <Reveal direction={isLeft ? 'left' : 'right'} className="ml-10 w-full sm:ml-0">
        <div className="premium-surface rounded-2xl p-5">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
              <Icon className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </li>
  )
}
