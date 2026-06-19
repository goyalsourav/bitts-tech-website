'use client'

import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Code2,
  Compass,
  LifeBuoy,
  Paintbrush,
  Rocket,
  Search,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const phases = [
  {
    icon: Search,
    label: 'Listen',
    title: 'Discovery Call',
    desc: 'We understand the business, users, blockers, and the result you want.',
  },
  {
    icon: Compass,
    label: 'Map',
    title: 'Requirement Planning',
    desc: 'Scope, features, priorities, and technical direction are made clear.',
  },
  {
    icon: Paintbrush,
    label: 'Shape',
    title: 'UI/UX Design',
    desc: 'We turn the plan into clean screens and a natural user journey.',
  },
  {
    icon: Code2,
    label: 'Build',
    title: 'Development',
    desc: 'The product is engineered with scalable, maintainable code.',
  },
  {
    icon: ClipboardCheck,
    label: 'Verify',
    title: 'Testing',
    desc: 'We check behavior, performance, responsiveness, and polish.',
  },
  {
    icon: Rocket,
    label: 'Ship',
    title: 'Launch',
    desc: 'Deployment, domain setup, and go-live happen with confidence.',
  },
  {
    icon: LifeBuoy,
    label: 'Care',
    title: 'Maintenance & Support',
    desc: 'We keep improving, monitoring, and supporting after launch.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Process"
          title="Our Process Is Simple, Clear, and Reliable"
          description="A transparent path from first conversation to long-term partnership."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {phases.map((phase, index) => (
            <StaggerItem
              key={phase.title}
              className={index === phases.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <ProcessCard phase={phase} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function ProcessCard({
  phase,
  index,
}: {
  phase: (typeof phases)[number]
  index: number
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
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-8">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {phase.label}
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
