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
    <section id="process" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title="Simple Process. No Surprises."
          description="Clear scope, clean delivery, and support that stays after launch."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-10" stagger={0.06}>
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
          {phase.label}
        </span>
      </div>

      <div className={featured ? 'mt-10 flex flex-1 flex-col' : 'mt-8 flex flex-1 flex-col'}>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Step {phase.label}
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
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-1 lg:col-span-2',
    'sm:col-span-2 lg:col-span-2',
  ]

  return placements[index]
}
