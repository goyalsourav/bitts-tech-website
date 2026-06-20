'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Building2, Plane } from 'lucide-react'
import { workProjects } from '@/lib/work-projects'

const icons = {
  'travel-suite': Plane,
  'construction-suite': Building2,
}

export function Showcase() {
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
    <section id="showcase" className="relative overflow-hidden bg-navy py-20 text-background lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 size-[420px] rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-accent/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-[5%]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              What we have built
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl lg:whitespace-nowrap lg:text-[2.55rem] lg:leading-[1.06] xl:text-[2.85rem]">
              Real Products for <span className="text-accent">Real Businesses</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg lg:whitespace-nowrap">
              We do not just talk about building software. Here is what we have
              already shipped for growing teams.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous work"
              onClick={() => slide('left')}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next work"
              onClick={() => slide('right')}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition-colors hover:bg-white/10"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {workProjects.map((item) => {
            const Icon = icons[item.slug]
            return (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group block min-w-[86%] snap-start sm:min-w-[440px] lg:min-w-[520px]"
              >
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-accent">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-background/70">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-semibold text-background">
                    {item.cardTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">
                    {item.cardDescription}
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
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
