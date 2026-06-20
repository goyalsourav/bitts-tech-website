'use client'

import {
  Headphones,
  SearchCheck,
  KeyRound,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'
import { ArcLines } from './decor'

const reasons = [
  {
    icon: Headphones,
    title: '24/7 Live Support',
    desc: 'Real humans, any time. Not a ticketing queue.',
  },
  {
    icon: SearchCheck,
    title: 'We Learn First',
    desc: 'We understand your business before writing any code.',
  },
  {
    icon: KeyRound,
    title: 'You Own Everything',
    desc: 'All code, data, and access handed to you fully.',
  },
]

export function Why() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-50" />
      <ArcLines className="pointer-events-none absolute -top-10 left-0 h-72 w-full text-primary/40" />

      <div className="relative mx-auto max-w-[1500px] px-[5%]">
        <SectionHeading
          eyebrow="Why Teams Choose"
          title="Why Teams Choose BittsTech"
          description="Support, ownership, and a business-first process from first call to go-live."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, index) => {
            const Icon = r.icon
            return (
              <StaggerItem key={r.title}>
                <div className="premium-surface group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-primary/45">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
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
