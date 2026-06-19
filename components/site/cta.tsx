'use client'

import { Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-45" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(0,174,239,0.28),transparent_34%),linear-gradient(135deg,#06162f_0%,#082c63_48%,#020918_100%)] p-6 text-background shadow-[0_44px_100px_-58px_rgba(0,20,60,0.9)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 size-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Ready to build?
          </span>
          <h2 className="mt-5 max-w-xl font-heading text-3xl font-bold leading-tight text-background text-balance sm:text-4xl lg:text-5xl">
            Let us turn your idea into a reliable digital product.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-background/72">
            Tell us what you need. We will respond quickly with a practical next
            step, not a generic pitch.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:contact@bittstech.com" className="flex items-center gap-3 text-sm font-medium text-background">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-accent">
                <Mail className="size-4" />
              </span>
              contact@bittstech.com
            </a>
            <a href="tel:+917358550765" className="flex items-center gap-3 text-sm font-medium text-background">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-accent">
                <Phone className="size-4" />
              </span>
              +91 73585 50765
            </a>
          </div>
        </div>

        <form className="relative z-10 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl sm:p-5">
          {['Your Name', 'Mobile Number', 'Email Address (optional)'].map((label) => (
            <label key={label} className="sr-only">
              {label}
            </label>
          ))}
          <input
            aria-label="Your Name"
            placeholder="Your Name"
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <input
            aria-label="Mobile Number"
            placeholder="Mobile Number"
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <input
            aria-label="Email Address"
            placeholder="Email Address (optional)"
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <textarea
            aria-label="Business Query"
            placeholder="Business Query (optional)"
            rows={5}
            className="resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-navy shadow-[0_10px_30px_rgba(0,174,239,0.28)] transition-transform hover:-translate-y-0.5"
          >
            Send My Request
            <Send className="size-4" />
          </button>
        </form>
      </motion.div>
    </section>
  )
}
