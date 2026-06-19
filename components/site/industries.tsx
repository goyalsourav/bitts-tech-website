'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export function Industries() {
  const isDesktop = useIsDesktop()

  return (
    <section id="industries" className="relative overflow-hidden bg-secondary/35">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            Industries
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            Solutions for Every Growing Business
          </h2>
        </div>
      </div>

      {isDesktop ? <HorizontalScroll /> : <MobileCarousel />}
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

function HorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const raw = useTransform(scrollYProgress, [0, 1], ['2%', '-72%'])
  const x = useSpring(raw, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative mt-12 h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.ul style={{ x }} className="flex gap-5 px-[8vw]">
          {industries.map((item) => (
            <li key={item.title} className="w-[360px] shrink-0">
              <Card item={item} />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

function MobileCarousel() {
  return (
    <div className="relative mt-10 pb-24">
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6">
        {industries.map((item) => (
          <li
            key={item.title}
            className="w-[80%] shrink-0 snap-center sm:w-[45%]"
          >
            <Card item={item} />
          </li>
        ))}
      </ul>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Swipe to explore
      </p>
    </div>
  )
}
