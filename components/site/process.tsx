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

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12" stagger={0.06}>
          {phases.map((phase, index) => (
            <StaggerItem
              key={phase.title}
              className={getProcessPlacement(index)}
            >
              <ProcessCard phase={phase} index={index} featured={index === 3} />
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
  featured = false,
}: {
  phase: (typeof phases)[number]
  index: number
  featured?: boolean
}) {
  const Icon = phase.icon

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`premium-surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ${
        featured ? 'min-h-[250px] lg:p-8' : 'min-h-[220px]'
      }`}
    >
      {featured && (
        <span className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      )}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex items-center justify-center rounded-xl bg-gradient-to-br transition-colors duration-500 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground ${
            featured
              ? 'size-14 from-primary to-accent text-primary-foreground shadow-[0_18px_40px_-24px_rgba(40,80,200,0.9)]'
              : 'size-11 from-primary/10 to-accent/15 text-primary'
          }`}
        >
          <Icon className={featured ? 'size-6' : 'size-5'} />
        </span>
        <span className="font-mono text-sm font-semibold text-primary/45">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={featured ? 'mt-10 flex flex-1 flex-col' : 'mt-8 flex flex-1 flex-col'}>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {phase.label}
        </span>
        <h3 className={`mt-2 font-heading font-semibold text-foreground ${featured ? 'text-2xl' : 'text-lg'}`}>
          {phase.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-muted-foreground ${featured ? 'max-w-2xl text-base' : 'text-sm'}`}>
          {phase.desc}
        </p>
      </div>
    </motion.article>
  )
}

function getProcessPlacement(index: number) {
  const placements = [
    'sm:col-span-1 lg:col-span-4',
    'sm:col-span-1 lg:col-span-4',
    'sm:col-span-1 lg:col-span-4',
    'sm:col-span-2 lg:col-span-6 lg:col-start-4',
    'sm:col-span-1 lg:col-span-4',
    'sm:col-span-1 lg:col-span-4',
    'sm:col-span-2 lg:col-span-4',
  ]

  return placements[index]
}
