'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, TimerReset, Workflow } from 'lucide-react'
import { HeroVisual } from './hero-visual'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  // Mouse parallax for the visual
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  function onMouseMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    mx.set(px * 28)
    my.set(py * 28)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-dotgrid pt-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute -left-24 top-10 size-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 size-[460px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:gap-14">
        <motion.div
          className="relative z-10 min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={false}
            whileInView={{ y: [8, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-card/75 px-4 py-1.5 text-center text-xs font-medium text-muted-foreground shadow-[0_14px_35px_-26px_rgba(30,50,110,0.7)] backdrop-blur-xl"
          >
            <Sparkles className="size-3.5 text-accent" />
            <span className="truncate sm:whitespace-normal">
              Premium Software & Digital Engineering
            </span>
          </motion.div>

          <h1 className="mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Build digital products that move{' '}
            <span className="text-gradient">businesses forward</span>
          </h1>

          <motion.p
            initial={false}
            whileInView={{ y: [10, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Bitts Tech creates custom websites, web applications, automation
            systems, integrations, and reliable technical solutions for growing
            businesses.
          </motion.p>

          <motion.div
            initial={false}
            whileInView={{ y: [10, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(40,80,200,0.3)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ y: [8, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex max-w-2xl flex-wrap gap-3 text-sm text-muted-foreground"
          >
            {[
              { icon: Workflow, label: '100% custom builds' },
              { icon: TimerReset, label: 'Post-launch support' },
              { icon: ShieldCheck, label: 'Scalable systems' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <span
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-2 backdrop-blur"
                >
                  <Icon className="size-4 text-primary" />
                  {item.label}
                </span>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-0 mx-auto mt-8 w-full max-w-[390px] md:mt-0 md:max-w-[460px] lg:max-w-[500px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.82, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual parallaxX={sx} parallaxY={sy} />
        </motion.div>
      </div>
    </section>
  )
}
