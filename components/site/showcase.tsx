'use client'

import { ArrowRight, Building2, Plane } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './reveal'

const cases = [
  {
    icon: Plane,
    category: 'Travel & Tourism',
    title: 'End-to-End Travel Agency Platform',
    desc: 'Travel agencies were managing leads, bookings, and follow-ups manually across disconnected tools.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: Building2,
    category: 'Construction & Infrastructure',
    title: 'Multi-Site Construction Management System',
    desc: 'Construction businesses had no unified way to track materials, workforce, and finances across multiple sites.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Cloud Storage'],
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-navy py-20 text-background lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 size-[420px] rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-accent/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            What we have built
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-background text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            Real Products for <span className="text-accent">Real Businesses</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg">
            We do not just talk about building software. Here is what we have
            already shipped for growing teams.
          </p>
        </div>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2" stagger={0.08}>
          {cases.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-accent">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-background/70">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-semibold text-background">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-background/75">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View Full Case Study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
