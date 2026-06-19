'use client'

import { Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-4 py-28 sm:px-6 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-45" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-border bg-card/80 p-6 shadow-[0_44px_100px_-58px_rgba(30,50,110,0.75)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Ready to build?
          </span>
          <h2 className="mt-5 max-w-xl font-heading text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Let us turn your idea into a reliable digital product.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you need. We will respond quickly with a practical next
            step, not a generic pitch.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:contact@bittstech.com" className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              contact@bittstech.com
            </a>
            <a href="tel:+917358550765" className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-4" />
              </span>
              +91 73585 50765
            </a>
          </div>
        </div>

        <form className="grid gap-3">
          {['Your Name', 'Mobile Number', 'Email Address (optional)'].map((label) => (
            <label key={label} className="sr-only">
              {label}
            </label>
          ))}
          <input
            aria-label="Your Name"
            placeholder="Your Name"
            className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
          />
          <input
            aria-label="Mobile Number"
            placeholder="Mobile Number"
            className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
          />
          <input
            aria-label="Email Address"
            placeholder="Email Address (optional)"
            className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
          />
          <textarea
            aria-label="Business Query"
            placeholder="Business Query (optional)"
            rows={5}
            className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(40,80,200,0.3)] transition-transform hover:-translate-y-0.5"
          >
            Send My Request
            <Send className="size-4" />
          </button>
        </form>
      </motion.div>
    </section>
  )
}
