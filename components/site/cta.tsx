'use client'

import type { FormEvent, InvalidEvent } from 'react'
import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const gmailComposeBase = 'https://mail.google.com/mail/?view=cm&fs=1'

export function CTA() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const mobile = String(data.get('mobile') ?? '')
    const email = String(data.get('email') ?? '')
    const query = String(data.get('query') ?? '')

    setStatus('sending')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, email, query }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to send your request.')
      }

      form.reset()
      setStatus('sent')
      setMessage('Your request has been sent. We will get back to you shortly.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Failed to send your request.')
    }
  }

  function requireDetails(event: InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Please enter the details')
  }

  function clearValidation(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('')
  }

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
            <a href={`${gmailComposeBase}&to=contact@bittstech.com`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-background">
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

        <form onSubmit={handleSubmit} className="relative z-10 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl sm:p-5">
          {['Your Name', 'Mobile Number', 'Email Address', 'Business Query'].map((label) => (
            <label key={label} className="sr-only">
              {label}
            </label>
          ))}
          <input
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            required
            onInvalid={requireDetails}
            onInput={clearValidation}
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <input
            name="mobile"
            type="tel"
            aria-label="Mobile Number"
            placeholder="Mobile Number"
            required
            onInvalid={requireDetails}
            onInput={clearValidation}
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <input
            name="email"
            type="email"
            aria-label="Email Address"
            placeholder="Email Address"
            required
            onInvalid={requireDetails}
            onInput={clearValidation}
            className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <textarea
            name="query"
            aria-label="Business Query"
            placeholder="Business Query"
            rows={5}
            required
            onInvalid={requireDetails}
            onInput={clearValidation}
            className="resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/45 focus:border-accent"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-navy shadow-[0_10px_30px_rgba(0,174,239,0.28)] transition-transform hover:-translate-y-0.5"
          >
            {status === 'sending' ? 'Sending...' : 'Send My Request'}
            <Send className="size-4" />
          </button>
          {message && (
            <p
              className={`text-sm ${
                status === 'sent' ? 'text-accent' : 'text-red-200'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
