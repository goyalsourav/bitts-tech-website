'use client'

import type { ReactNode } from 'react'
import { motion, useTransform, type MotionValue } from 'framer-motion'
import { Activity, Check, Cloud, Code2, Database, Layers3, Network } from 'lucide-react'

function Floaty({
  children,
  className,
  depth,
  px,
  py,
  delay = 0,
  range = 14,
}: {
  children: ReactNode
  className?: string
  depth: number
  px: MotionValue<number>
  py: MotionValue<number>
  delay?: number
  range?: number
}) {
  const x = useTransform(px, (v) => v * depth)
  const y = useTransform(py, (v) => v * depth)
  const rotateX = useTransform(py, (v) => v * -0.18 * depth)
  const rotateY = useTransform(px, (v) => v * 0.18 * depth)

  return (
    <motion.div style={{ x, y, rotateX, rotateY }} className={className}>
      <motion.div
        animate={{ y: [0, -range, 0] }}
        transition={{
          duration: 7 + depth,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/70 p-3 shadow-[0_12px_30px_-24px_rgba(30,50,110,0.7)]">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-heading text-xl font-semibold text-foreground">
        {value}
      </p>
    </div>
  )
}

export function HeroVisual({
  parallaxX,
  parallaxY,
}: {
  parallaxX: MotionValue<number>
  parallaxY: MotionValue<number>
}) {
  return (
    <>
      <MobileHeroVisual />
      <div
        className="relative mx-auto hidden aspect-square w-full max-w-[320px] sm:max-w-[440px] md:block lg:max-w-[500px]"
        style={{ perspective: '1400px' }}
      >
        <DesktopHeroVisual parallaxX={parallaxX} parallaxY={parallaxY} />
      </div>
    </>
  )
}

function MobileHeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1.05] w-full max-w-[330px] md:hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-[9%] rounded-full border border-primary/15 fine-grid mask-soft"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-[23%] rounded-full border border-accent/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      />

      <div className="absolute left-1/2 top-[43%] flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-border/75 bg-card/80 shadow-[0_28px_70px_-42px_rgba(30,50,110,0.7)] backdrop-blur-xl">
        <motion.img
          src="/bitts-tech-logo.png"
          alt=""
          className="size-24 object-contain"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      {[
        { label: 'Websites', icon: Layers3, className: 'left-2 top-10' },
        { label: 'Apps', icon: Code2, className: 'right-2 top-16' },
        { label: 'Automation', icon: Network, className: 'left-0 bottom-24' },
        { label: 'Support', icon: Cloud, className: 'right-1 bottom-20' },
      ].map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.label}
            className={`absolute ${item.className} flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3 py-2 text-xs font-semibold text-foreground shadow-[0_18px_35px_-28px_rgba(30,50,110,0.8)] backdrop-blur-xl`}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
          >
            <Icon className="size-3.5 text-primary" />
            {item.label}
          </motion.div>
        )
      })}

      <motion.div
        className="absolute inset-x-7 bottom-1 rounded-2xl border border-border/80 bg-card/92 p-4 shadow-[0_28px_65px_-38px_rgba(30,50,110,0.75)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.55 }}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Business system ready
          </span>
          <Check className="size-4 text-primary" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Plan', 'Build', 'Launch'].map((step) => (
            <div
              key={step}
              className="rounded-xl bg-secondary px-2.5 py-2 text-center text-[11px] font-semibold text-muted-foreground"
            >
              {step}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function DesktopHeroVisual({
  parallaxX,
  parallaxY,
}: {
  parallaxX: MotionValue<number>
  parallaxY: MotionValue<number>
}) {
  return (
    <div
      className="relative size-full"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full border border-primary/10 fine-grid mask-soft"
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 420 420"
        className="absolute inset-0 size-full text-primary/25"
        fill="none"
      >
        {[
          'M92 110 C 170 66, 276 82, 334 150',
          'M70 230 C 160 276, 255 164, 354 232',
          'M112 328 C 196 264, 266 328, 342 286',
          'M210 58 C 184 144, 228 244, 190 358',
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="5 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.4 + i * 0.18, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <Floaty
        depth={1.15}
        px={parallaxX}
        py={parallaxY}
        delay={0.1}
        className="absolute left-1/2 top-[48%] w-[72%] -translate-x-1/2 -translate-y-1/2"
        range={7}
      >
        <div
          className="premium-surface overflow-hidden rounded-[1.7rem]"
          style={{ transform: 'rotateX(9deg) rotateY(-12deg) rotateZ(1deg)' }}
        >
          <div className="flex items-center justify-between border-b border-border/70 bg-white/55 px-5 py-4">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-destructive/50" />
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="size-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] text-muted-foreground">
              live system
            </span>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-4 text-primary-foreground shadow-[0_20px_50px_-26px_rgba(40,80,200,0.8)]">
                <div className="flex items-center gap-2 text-xs font-medium opacity-90">
                  <Layers3 className="size-4" />
                  Product Core
                </div>
                <div className="mt-8 h-2 w-3/4 rounded-full bg-white/45" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-white/25" />
              </div>
              <div className="space-y-3">
                <Metric label="speed" value="98" />
                <Metric label="uptime" value="99.9%" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: Database, label: 'Data' },
                { icon: Network, label: 'API' },
                { icon: Cloud, label: 'Cloud' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.55 }}
                    className="rounded-xl border border-border/70 bg-background/65 p-3"
                  >
                    <Icon className="size-4 text-primary" />
                    <div className="mt-4 h-1.5 rounded-full bg-foreground/12" />
                    <p className="mt-2 text-xs font-medium text-muted-foreground">
                      {item.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Floaty>

      <Floaty
        depth={2.4}
        px={parallaxX}
        py={parallaxY}
        delay={0.25}
        className="absolute left-0 top-12 hidden w-[42%] sm:block"
        range={8}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy text-[10px] leading-relaxed shadow-[0_30px_70px_-35px_rgba(20,30,70,0.75)] sm:text-xs">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-white/70">
            <Code2 className="size-3.5 text-accent" />
            <span className="font-mono">workflow.ts</span>
          </div>
          <div className="space-y-1.5 p-3 font-mono">
            {[
              ['const', ' launch', ' = ship({'],
              ['  design', ': "premium",'],
              ['  motion', ': "smooth",'],
              ['})', '', ''],
            ].map((parts, i) => (
              <motion.div
                key={`${parts[0]}-${i}`}
                initial={false}
                whileInView={{ x: [-6, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.16 }}
                className="flex"
              >
                <span className="mr-3 select-none text-white/30">{i + 1}</span>
                <span className="text-accent">{parts[0]}</span>
                <span className="text-white/80">{parts[1]}</span>
                <span className="text-white/50">{parts[2]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Floaty>

      <Floaty
        depth={3}
        px={parallaxX}
        py={parallaxY}
        delay={0.5}
        range={10}
        className="absolute right-0 bottom-14 w-[38%]"
      >
        <div className="rounded-2xl border border-border/80 bg-card/88 p-4 shadow-[0_30px_60px_-34px_rgba(30,50,110,0.7)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Activity className="size-3.5 text-primary" /> Growth
            </span>
            <span className="text-xs font-semibold text-primary">+38%</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[42, 62, 50, 82, 66, 96, 78].map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.08, duration: 0.55 }}
              />
            ))}
          </div>
        </div>
      </Floaty>

      <Floaty
        depth={3.7}
        px={parallaxX}
        py={parallaxY}
        delay={0.2}
        range={7}
        className="absolute right-5 top-8"
      >
        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card/85 px-3 py-2 text-xs font-medium shadow-[0_18px_35px_-24px_rgba(30,50,110,0.7)] backdrop-blur-xl">
          <Cloud className="size-4 text-accent" /> API Connected
          <Check className="size-3.5 text-primary" />
        </div>
      </Floaty>

      <Floaty
        depth={3.2}
        px={parallaxX}
        py={parallaxY}
        delay={0.7}
        range={7}
        className="absolute bottom-10 left-6 sm:left-8"
      >
        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card/85 px-3 py-2 text-xs font-medium shadow-[0_18px_35px_-24px_rgba(30,50,110,0.7)] backdrop-blur-xl">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Production ready
        </div>
      </Floaty>
    </div>
  )
}
