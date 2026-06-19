'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const phases = [
  { title: 'Discovery Call', desc: 'We learn your goals, challenges, and vision.' },
  { title: 'Requirement Planning', desc: 'We define scope, features, and a clear roadmap.' },
  { title: 'UI/UX Design', desc: 'We craft intuitive, on-brand interfaces.' },
  { title: 'Development', desc: 'We build clean, scalable, well-tested code.' },
  { title: 'Testing', desc: 'We validate quality across every device.' },
  { title: 'Launch', desc: 'We deploy smoothly and go live with confidence.' },
  { title: 'Maintenance & Support', desc: 'We keep things running and evolving.' },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 26 })

  return (
    <section id="process" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Process"
          title="Our Process Is Simple, Clear, and Reliable"
          description="A transparent path from first conversation to long-term partnership."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2">
            <motion.div
              style={{ scaleY }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-primary to-accent"
            />
          </div>

          <ol className="space-y-10">
            {phases.map((p, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={p.title}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-[18px] top-1.5 z-10 flex size-5 -translate-x-1/2 items-center justify-center md:top-2 ${
                      left
                        ? 'md:left-auto md:right-0 md:translate-x-1/2'
                        : 'md:left-0 md:-translate-x-1/2'
                    }`}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="size-4 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_oklch(0.55_0.214_258_/_0.12)]"
                    />
                  </span>

                  <Reveal direction={left ? 'left' : 'right'}>
                    <div className="premium-surface rounded-2xl p-5">
                      <span className="text-xs font-bold text-accent">
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
