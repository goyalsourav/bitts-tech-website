'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { NetworkLines } from './decor'

export function CTA() {
  return (
    <section id="contact" className="relative bg-background px-4 py-28 sm:px-6 lg:py-36">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-navy px-6 py-16 text-center text-background shadow-[0_44px_100px_-48px_rgba(30,50,110,0.75)] sm:px-12 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-16 top-0 size-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 size-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 fine-grid opacity-10" />
        <NetworkLines className="pointer-events-none absolute right-6 top-6 hidden h-40 w-56 text-accent/40 sm:block" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Have an Idea? Let&apos;s Build It Into a Real Digital Product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
            Whether you need a website, web app, automation system, or technical
            partner, Bitts Tech can help you move faster with confidence.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@bittstech.com?subject=Project%20Consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(40,80,200,0.4)] transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-4" />
              Book a Free Consultation
            </a>
            <a
              href="mailto:hello@bittstech.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-white/10"
            >
              Contact Bitts Tech
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
