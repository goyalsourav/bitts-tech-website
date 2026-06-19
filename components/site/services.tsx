'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  AppWindow,
  Bot,
  Plug,
  LayoutTemplate,
  Gauge,
  ShieldCheck,
  MessagesSquare,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    desc: 'Fast, responsive, conversion-focused sites built from scratch for your brand.',
  },
  {
    icon: AppWindow,
    title: 'Web Applications',
    desc: 'Robust, scalable web apps that handle real business logic and growth.',
  },
  {
    icon: Bot,
    title: 'Business Automation',
    desc: 'Automate repetitive work and free your team to focus on what matters.',
  },
  {
    icon: Plug,
    title: 'API Integrations',
    desc: 'Connect payments, CRMs, and third-party tools into one smooth system.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    desc: 'High-impact pages engineered to capture leads and drive action.',
  },
  {
    icon: Gauge,
    title: 'Admin Dashboards',
    desc: 'Clear, powerful internal tools to manage and visualize your data.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Support',
    desc: 'Monitoring, maintenance, and reliable help long after launch.',
  },
  {
    icon: MessagesSquare,
    title: 'Technical Consultation',
    desc: 'Expert guidance to make confident technology decisions.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-secondary/35 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-50 mask-soft" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What We Build"
          description="A full toolkit of digital solutions, engineered to grow with your business."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative h-full rounded-2xl p-px [transform-style:preserve-3d]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/70 via-accent/60 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <div className="premium-surface relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl p-6 transition-shadow duration-500 group-hover:shadow-[0_30px_70px_-40px_rgba(40,80,200,0.65)]">
        <span className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full border border-primary/10" />
        <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary transition-colors duration-500 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </span>
        <h3 className="mt-7 font-heading text-lg font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.desc}
        </p>
        <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
          Bitts Tech
        </span>
      </div>
    </motion.div>
  )
}
