'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Briefcase,
  Building2,
  Cog,
  Factory,
  ForkKnife,
  GraduationCap,
  HeartPulse,
  Hotel,
  Package,
  Plane,
  ShoppingCart,
  Workflow,
} from 'lucide-react'

const industries = [
  {
    scene: 'travel',
    title: 'Travel & Tourism',
    desc: 'Trips, stays, booking flows, and guest follow-ups.',
  },
  {
    scene: 'construction',
    title: 'Construction & Real Estate',
    desc: 'Sites, materials, workforce, finance, and reporting.',
  },
  {
    scene: 'shopping',
    title: 'Retail & E-commerce',
    desc: 'Storefronts, inventory, orders, and customer operations.',
  },
  {
    scene: 'health',
    title: 'Healthcare & Clinics',
    desc: 'Appointments, patients, records, and clinic workflows.',
  },
  {
    scene: 'education',
    title: 'Education & Training',
    desc: 'Admissions, portals, learning, and student management.',
  },
  {
    scene: 'food',
    title: 'Restaurants & Hospitality',
    desc: 'Bookings, orders, staff, and guest experience systems.',
  },
  {
    scene: 'services',
    title: 'Professional Services',
    desc: 'Client portals, dashboards, approvals, and automation.',
  },
  {
    scene: 'manufacturing',
    title: 'Manufacturing & Supply',
    desc: 'Production, supply chain, dispatch, and operations.',
  },
  {
    scene: 'process',
    title: 'Any Business With a Process',
    desc: 'If it has steps, we can turn it into software.',
  },
] as const

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-secondary/35 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            Industries
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
            We Build for Any Business
          </h2>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {industries.map((item) => (
            <IndustryTile key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function IndustryTile({ item }: { item: (typeof industries)[number] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group border-b border-border/70 pb-7"
    >
      <div className="flex min-h-[120px] items-center gap-5">
        <IndustryScene scene={item.scene} />
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

function IndustryScene({ scene }: { scene: (typeof industries)[number]['scene'] }) {
  return (
    <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="absolute inset-x-4 bottom-5 h-px bg-primary/15" />
      {scene === 'travel' && <TravelScene />}
      {scene === 'construction' && <ConstructionScene />}
      {scene === 'shopping' && <ShoppingScene />}
      {scene === 'health' && <HealthScene />}
      {scene === 'education' && <EducationScene />}
      {scene === 'food' && <FoodScene />}
      {scene === 'services' && <ServicesScene />}
      {scene === 'manufacturing' && <ManufacturingScene />}
      {scene === 'process' && <ProcessScene />}
    </div>
  )
}

function TravelScene() {
  return (
    <>
      <motion.div
        className="absolute left-3 top-4 text-primary"
        initial={{ x: -18, y: 18, rotate: -8, opacity: 0 }}
        whileInView={{ x: 42, y: -1, rotate: 8, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Plane className="size-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-5 text-primary"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.32 }}
      >
        <Hotel className="size-8" />
      </motion.div>
    </>
  )
}

function ConstructionScene() {
  return (
    <div className="absolute inset-0">
      {[0, 1, 2].map((floor) => (
        <motion.div
          key={floor}
          className="absolute left-8 h-3 w-11 rounded-sm border border-primary/65"
          style={{ bottom: 22 + floor * 12 }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: floor * 0.16 }}
        />
      ))}
      <motion.div
        className="absolute left-5 top-4 h-12 w-px bg-primary/70"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.18 }}
      />
      <motion.div
        className="absolute left-5 top-4 h-px w-14 bg-primary/70"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.34 }}
      />
      <Building2 className="absolute bottom-5 right-6 size-7 text-primary" />
    </div>
  )
}

function ShoppingScene() {
  return (
    <>
      <motion.div
        className="absolute bottom-5 left-5 text-primary"
        initial={{ x: -18, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <ShoppingCart className="size-8" />
      </motion.div>
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          className="absolute size-3 rounded-full border border-accent bg-background"
          style={{ left: 62 + item * 9, top: 32 + (item % 2) * 10 }}
          initial={{ pathLength: 0, scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28, delay: 0.25 + item * 0.12 }}
        />
      ))}
      <Package className="absolute right-5 top-5 size-5 text-accent" />
    </>
  )
}

function HealthScene() {
  return (
    <>
      <HeartPulse className="absolute left-5 top-8 size-8 text-primary" />
      <motion.div
        className="absolute right-5 top-11 h-px w-11 bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
      />
      <motion.span
        className="absolute right-10 top-7 size-4 rounded-full border-2 border-accent"
        animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}

function EducationScene() {
  return (
    <>
      <motion.div
        className="absolute left-6 top-5 text-primary"
        initial={{ y: -12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <GraduationCap className="size-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-6 text-accent"
        initial={{ rotateY: 80, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.22 }}
      >
        <BookOpen className="size-8" />
      </motion.div>
    </>
  )
}

function FoodScene() {
  return (
    <>
      <ForkKnife className="absolute bottom-5 left-7 size-8 text-primary" />
      {[0, 1, 2].map((steam) => (
        <motion.span
          key={steam}
          className="absolute h-4 w-px rounded-full bg-accent/80"
          style={{ left: 58 + steam * 8, top: 26 }}
          animate={{ y: [8, -5, 8], opacity: [0, 1, 0] }}
          transition={{ duration: 1.7, delay: steam * 0.18, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        className="absolute right-5 bottom-6 h-4 w-8 rounded-b-full border-x border-b border-primary/70"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.18 }}
      />
    </>
  )
}

function ServicesScene() {
  return (
    <>
      <Briefcase className="absolute bottom-5 left-5 size-8 text-primary" />
      {[0, 1, 2].map((bar) => (
        <motion.span
          key={bar}
          className="absolute right-5 h-2 rounded-full bg-primary/60"
          style={{ top: 27 + bar * 13, width: 18 + bar * 7 }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.16 + bar * 0.12 }}
        />
      ))}
    </>
  )
}

function ManufacturingScene() {
  return (
    <>
      <Factory className="absolute bottom-5 left-6 size-8 text-primary" />
      <motion.div
        className="absolute right-6 top-6 text-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        <Cog className="size-7" />
      </motion.div>
      <motion.div
        className="absolute bottom-6 right-5 h-2 w-8 rounded-full bg-primary/35"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.25 }}
      />
    </>
  )
}

function ProcessScene() {
  return (
    <>
      <Workflow className="absolute left-5 top-7 size-8 text-primary" />
      <motion.span
        className="absolute left-14 top-12 h-px w-8 bg-primary/70"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.18 }}
      />
      {[0, 1, 2].map((node) => (
        <motion.span
          key={node}
          className="absolute size-3 rounded-full bg-accent"
          style={{ right: 16 + node * 10, top: 29 + node * 11 }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28, delay: 0.32 + node * 0.12 }}
        />
      ))}
    </>
  )
}
