'use client'

import {
  GraduationCap,
  Plane,
  Rocket,
  Briefcase,
  Store,
  ShoppingBag,
  Building2,
  UserRound,
} from 'lucide-react'
import { StaggerGroup, StaggerItem } from './reveal'

const industries = [
  { icon: GraduationCap, title: 'Schools & Preschools', desc: 'Admissions, portals, and parent communication systems.' },
  { icon: Plane, title: 'Travel Businesses', desc: 'Booking flows, itineraries, and reservation platforms.' },
  { icon: Rocket, title: 'Startups', desc: 'MVPs and products built to launch fast and scale.' },
  { icon: Briefcase, title: 'Service Agencies', desc: 'Client portals, dashboards, and workflow automation.' },
  { icon: Store, title: 'Local Businesses', desc: 'Modern sites that bring in calls, leads, and footfall.' },
  { icon: ShoppingBag, title: 'E-commerce Brands', desc: 'Storefronts and integrations that convert and retain.' },
  { icon: Building2, title: 'Enterprises', desc: 'Robust internal tools and large-scale integrations.' },
  { icon: UserRound, title: 'Personal Brands', desc: 'Standout portfolios and personal platforms.' },
]

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-secondary/35 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            Industries
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            Solutions for Every Growing Business
          </h2>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {industries.map((item) => (
            <StaggerItem key={item.title} className="min-h-[230px]">
              <Card item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function Card({ item }: { item: (typeof industries)[number] }) {
  const Icon = item.icon

  return (
    <div className="premium-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
      <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-gradient-to-br from-primary/10 to-accent/15 blur-2xl transition-opacity group-hover:opacity-100" />
      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <Icon className="size-6" />
      </span>
      <div className="mt-10">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.desc}
        </p>
      </div>
    </div>
  )
}
