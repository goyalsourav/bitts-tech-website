'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { notes } from '@/lib/notes'
import { SectionHeading } from './section-heading'

export function Notes() {
  const sliderRef = useRef<HTMLDivElement>(null)

  function slide(direction: 'left' | 'right') {
    const slider = sliderRef.current
    if (!slider) return

    slider.scrollBy({
      left: direction === 'right' ? 420 : -420,
      behavior: 'smooth',
    })
  }

  return (
    <section id="notes" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Our Latest Notes"
            title="Practical Thinking for Growing Teams"
            description="Short reads from the BittsTech team on automation, web apps, and support."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous note"
              onClick={() => slide('left')}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next note"
              onClick={() => slide('right')}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/blog/${note.slug}`}
              className="group block min-w-[86%] snap-start sm:min-w-[390px] lg:min-w-[410px]"
            >
              <article className="premium-surface h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
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
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {note.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
