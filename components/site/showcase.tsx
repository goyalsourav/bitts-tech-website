'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  'Smooth scrolling',
  'Animated hero sections',
  'Interactive cards',
  'Moving brand elements',
  'Responsive mobile flows',
  'Conversion-focused layouts',
]

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100])
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120])
  const x1 = useTransform(scrollYProgress, [0, 1], [-30, 40])
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6])
  const shellRotate = useTransform(scrollYProgress, [0, 1], [5, -4])

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative overflow-hidden bg-navy py-28 text-background lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 size-[420px] rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-accent/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            Motion Showcase
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            Websites That Do Not Just Look Good - They Feel Alive
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            className="relative h-[440px] sm:h-[520px]"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              aria-hidden="true"
              style={{ rotate: shellRotate }}
              className="absolute left-[6%] top-[8%] h-[76%] w-[78%] rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_40px_100px_-55px_rgba(22,186,240,0.7)]"
            />
            <motion.div
              style={{ y: y1, x: x1, rotate }}
              className="absolute left-0 top-8 w-[72%]"
            >
              <MockBrowser />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute right-0 top-24 w-[52%]"
            >
              <MockPhone />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-2 left-10 w-[46%]"
            >
              <MockStat />
            </motion.div>
          </div>

          <div className="lg:pl-8">
            <p className="max-w-lg text-base leading-relaxed text-background/72 sm:text-lg">
              Every project we ship is engineered for motion - fluid scroll,
              tactile interactions, and transitions that guide the eye. It looks
              like a portfolio because it performs like one.
            </p>
            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm font-medium shadow-[0_18px_40px_-34px_rgba(0,0,0,0.7)] backdrop-blur"
                >
                  <span className="size-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function MockBrowser() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-white/40" />
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-background/65">
          product view
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div className="h-24 rounded-xl bg-gradient-to-br from-primary to-accent shadow-[0_18px_50px_-28px_rgba(22,186,240,0.8)]" />
        <div className="h-2.5 w-3/4 rounded-full bg-white/25" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/15" />
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-12 rounded-lg border border-white/10 bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  )
}

function MockPhone() {
  return (
    <div className="overflow-hidden rounded-[1.7rem] border-4 border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
      <div className="space-y-2 rounded-[1.25rem] bg-navy/45 p-3">
        <div className="h-16 rounded-lg bg-gradient-to-br from-accent to-primary" />
        <div className="h-2 w-2/3 rounded-full bg-white/25" />
        <div className="h-2 w-1/2 rounded-full bg-white/15" />
        <div className="h-10 rounded-lg border border-white/10 bg-white/10" />
        <div className="h-10 rounded-lg border border-white/10 bg-white/10" />
      </div>
    </div>
  )
}

function MockStat() {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex items-end justify-between">
        <span className="text-xs text-background/70">Conversions</span>
        <span className="text-sm font-bold text-accent">+62%</span>
      </div>
      <div className="mt-3 flex h-12 items-end gap-1">
        {[50, 70, 45, 85, 65, 95].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
          />
        ))}
      </div>
    </div>
  )
}
