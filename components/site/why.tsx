'use client'

import {
  BrainCircuit,
  Layers,
  Sparkles,
  HeartHandshake,
  Boxes,
  TimerReset,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'
import { ArcLines } from './decor'

const reasons = [
  {
    icon: BrainCircuit,
    title: 'We understand business before writing code',
    desc: 'Strategy comes first. We learn your goals so technology actually serves them.',
  },
  {
    icon: Layers,
    title: 'We build scalable systems',
    desc: 'Architecture designed to handle growth without rebuilding from scratch.',
  },
  {
    icon: Sparkles,
    title: 'We focus on clean UI and smooth UX',
    desc: 'Interfaces that feel intuitive, premium, and effortless to use.',
  },
  {
    icon: HeartHandshake,
    title: 'We support after launch',
    desc: 'A long-term technical partner, not a one-and-done vendor.',
  },
  {
    icon: Boxes,
    title: 'We create custom solutions, not templates',
    desc: 'Every build is tailored to your exact workflow and brand.',
  },
  {
    icon: TimerReset,
    title: 'We help businesses reduce manual work',
    desc: 'Automation that saves hours and removes human error.',
  },
]

export function Why() {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-50" />
      <ArcLines className="pointer-events-none absolute -top-10 left-0 h-72 w-full text-primary/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Businesses Choose Bitts Tech"
          description="We combine engineering depth with a genuine understanding of how businesses grow."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <StaggerItem key={r.title}>
                <div className="premium-surface group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold leading-snug text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
