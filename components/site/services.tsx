'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe,
  AppWindow,
  Bot,
  Plug,
  RefreshCw,
  Building2,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'
import { services } from '@/lib/services'

const icons = {
  'custom-website-development': Globe,
  'web-application-development': AppWindow,
  'business-automation': Bot,
  'website-revamp': RefreshCw,
  'business-management-system': Building2,
  'api-integrations': Plug,
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-secondary/35 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-50 mask-soft" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="relative mx-auto max-w-[1500px] px-[5%]">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Services We Provide with{' '}
              <span className="text-gradient">Real Execution</span>
            </>
          }
          description="From idea to production, BittsTech helps businesses design, build, automate, and support reliable digital products."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  const Icon = icons[service.slug]
  return (
    <motion.div whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="group relative h-full rounded-2xl p-px [transform-style:preserve-3d]">
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/70 via-accent/60 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <Link href={`/services/${service.slug}`} className="premium-surface relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl p-6 transition-shadow duration-500 group-hover:shadow-[0_30px_70px_-40px_rgba(40,80,200,0.65)]">
        <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary transition-colors duration-500 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </span>
        <h3 className="mt-7 font-heading text-lg font-semibold text-foreground">
          {service.shortTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <span className="mt-auto pt-6 text-sm font-semibold text-primary">
          View service
        </span>
      </Link>
    </motion.div>
  )
}
