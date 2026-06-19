'use client'

import { ArrowRight, BookOpen } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const notes = [
  {
    category: 'Automation',
    read: '10min',
    title: 'How Business Automation Reduces Daily Manual Work',
  },
  {
    category: 'Web Apps',
    read: '8min',
    title: 'What to Prepare Before Building a Custom Website',
  },
  {
    category: 'Support',
    read: '7min',
    title: 'Why Post Go-live Support Matters for Software Teams',
  },
]

export function Notes() {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Our Latest Notes"
            title="Practical Thinking for Growing Teams"
            description="Short reads from the BittsTech team on automation, web apps, and support."
          />
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Explore all
            <ArrowRight className="size-4" />
          </a>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.08}>
          {notes.map((note) => (
            <StaggerItem key={note.title}>
              <article className="premium-surface group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                    <BookOpen className="size-5" />
                  </span>
                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                    {note.read}
                  </span>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <span>BT</span>
                  <span>BittsTech Team</span>
                  <span>2026</span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {note.category}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                  {note.title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
