'use client'

import {
  BarChart3,
  FileSpreadsheet,
  Globe2,
  Hand,
  LayoutDashboard,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const points = [
  {
    icon: Globe2,
    title: 'No Online Presence',
    desc: 'Your competitors are online and winning customers you never see.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Scattered Data',
    desc: 'Information lives across WhatsApp groups, Excel sheets, and memory.',
  },
  {
    icon: Hand,
    title: 'Manual Processes',
    desc: 'Work that software should handle, your team is doing by hand daily.',
  },
  {
    icon: LayoutDashboard,
    title: 'No Business Visibility',
    desc: 'No real-time view of operations, finances, or team performance.',
  },
  {
    icon: Wrench,
    title: 'Generic Off-The-Shelf Tools',
    desc: 'Paying for 100 features. Actually using 4 of them.',
  },
  {
    icon: BarChart3,
    title: 'Outdated Website',
    desc: "A website that hasn't grown with your business is losing you customers.",
  },
]

export function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sound familiar?"
          title={
            <>
              Is Your Business Still Running on{' '}
              <span className="text-gradient">Workarounds?</span>
            </>
          }
          description="Most businesses outgrow their tools long before they realize it. If any of these feel familiar, we should talk."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {points.map((point) => {
            const Icon = point.icon
            return (
              <StaggerItem key={point.title}>
                <div className="premium-surface h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.desc}
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
