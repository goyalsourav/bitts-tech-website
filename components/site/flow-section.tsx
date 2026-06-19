'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  Search,
  ClipboardList,
  PenTool,
  Hammer,
  Workflow,
  Rocket,
  LifeBuoy,
} from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Understand Your Business',
    desc: 'We start with your goals, users, and constraints - not code. Clarity first.',
  },
  {
    icon: ClipboardList,
    title: 'Plan the System',
    desc: 'Architecture, data flow, and scope mapped into a clear, scalable blueprint.',
  },
  {
    icon: PenTool,
    title: 'Design the Experience',
    desc: 'Clean, intuitive interfaces that feel effortless across every device.',
  },
  {
    icon: Hammer,
    title: 'Build the Product',
    desc: 'Robust, maintainable code engineered for performance and growth.',
  },
  {
    icon: Workflow,
    title: 'Integrate APIs & Automation',
    desc: 'Connect your tools and remove manual work with smart automations.',
  },
  {
    icon: Rocket,
    title: 'Launch Smoothly',
    desc: 'Thorough testing and a confident, zero-drama go-live.',
  },
  {
    icon: LifeBuoy,
    title: 'Support After Go-Live',
    desc: 'We stay on as your technical partner long after launch day.',
  },
]

export function FlowSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section className="relative bg-background" aria-label="Our delivery flow">
      <div ref={ref} className="relative" style={{ height: `${steps.length * 62 + 100}vh` }}>
        <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-24">
          <motion.div
            style={{ y: backgroundY }}
            className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60"
          />
          <div className="pointer-events-none absolute -right-24 top-1/4 size-[400px] rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-16 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-accent" />
                The Flow
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
                From Idea to Launch - We Build the Complete Digital Flow
              </h2>
            </div>

            <div className="relative mt-14 lg:mt-18">
              <div className="absolute left-4 top-0 h-full w-px bg-border/80 sm:left-1/2">
                <motion.div
                  style={{ scaleY: lineScale }}
                  className="absolute inset-0 origin-top bg-gradient-to-b from-primary to-accent"
                />
              </div>

              <ol className="space-y-7 sm:space-y-4">
                {steps.map((step, i) => (
                  <FlowItem
                    key={step.title}
                    step={step}
                    index={i}
                    total={steps.length}
                    progress={scrollYProgress}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowItem({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number]
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const seg = 1 / total
  const start = index * seg
  const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
  const p1 = clamp01(start - 0.04)
  const p2 = Math.max(p1, clamp01(start + 0.05))
  const p3 = Math.max(p2, clamp01(start + seg + 0.04))
  const p4 = Math.max(p3, clamp01(start + seg + 0.1))

  const opacity = useTransform(progress, [p1, p2, p3, p4], [0.22, 1, 1, 0.34])
  const x = useTransform(progress, [p1, p2], [index % 2 === 0 ? -46 : 46, 0])
  const scale = useTransform(progress, [p1, p2], [0.93, 1])
  const Icon = step.icon
  const isLeft = index % 2 === 0

  return (
    <motion.li
      style={{ opacity }}
      className={`relative flex sm:w-1/2 ${
        isLeft ? 'sm:pr-12' : 'sm:ml-auto sm:pl-12'
      }`}
    >
      <span
        className={`absolute left-4 top-6 z-10 flex size-4 -translate-x-1/2 items-center justify-center sm:top-1/2 sm:-translate-y-1/2 ${
          isLeft ? 'sm:left-auto sm:right-0 sm:translate-x-1/2' : 'sm:left-0 sm:-translate-x-1/2'
        }`}
      >
        <span className="size-3 rounded-full border-2 border-primary bg-background shadow-[0_0_0_6px_oklch(0.55_0.214_258_/_0.1)]" />
      </span>

      <motion.div
        style={{ x, scale }}
        className="premium-surface ml-10 w-full rounded-2xl p-5 sm:ml-0"
      >
        <div className="flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
            <Icon className="size-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.li>
  )
}
