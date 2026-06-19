'use client'

import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Code2,
  Compass,
  Paintbrush,
  Search,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const phases = [
  {
    icon: Search,
    label: '01',
    title: 'Discover',
    desc: 'We understand your business, users, goals, and bottlenecks before suggesting tech.',
  },
  {
    icon: Compass,
    label: '02',
    title: 'Define',
    desc: 'Scope, tech plan, and timeline are agreed and documented upfront.',
  },
  {
    icon: Paintbrush,
    label: '03',
    title: 'Design',
    desc: 'We turn requirements into user flows, screens, and a development-ready plan.',
  },
  {
    icon: Code2,
    label: '04',
    title: 'Build',
    desc: 'We ship responsive, secure features with regular progress updates.',
  },
  {
    icon: ClipboardCheck,
    label: '05',
    title: 'Support',
    desc: 'We monitor, improve, and support your product after it goes live.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title="Simple Process. No Surprises."
          description="Clear scope, clean delivery, and support that stays after launch."
        />

        <StaggerGroup className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-10" stagger={0.06}>
          {phases.map((phase, index) => (
            <StaggerItem
              key={phase.title}
              className={getProcessPlacement(index)}
            >
              <ProcessCard phase={phase} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function ProcessCard({
  phase,
}: {
  phase: (typeof phases)[number]
}) {
  const Icon = phase.icon

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="premium-surface group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary transition-colors duration-500 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
          <Icon className="size-5" />
        </span>
        <span className="font-mono text-sm font-semibold text-primary/45">
          {phase.label}
        </span>
      </div>

      <div className="mt-8 flex flex-1 flex-col">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Step {phase.label}
        </span>
        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
          {phase.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {phase.desc}
        </p>
      </div>
    </motion.article>
  )
}

function getProcessPlacement(index: number) {
  const placements = [
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-2 lg:col-span-2',
  ]

  return placements[index]
}
