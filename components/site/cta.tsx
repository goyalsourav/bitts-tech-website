'use client'

import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { useState } from 'react'
import { AlertCircle, CheckCircle2, Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const gmailComposeBase = 'https://mail.google.com/mail/?view=cm&fs=1'
const contactEmail = 'bittstechinfo@gmail.com'
const fieldNames = ['name', 'mobile', 'email', 'query'] as const

type FieldName = (typeof fieldNames)[number]
type FormValues = Record<FieldName, string>
type FieldState = Record<FieldName, boolean>
type ValidationErrors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
  name: '',
  mobile: '',
  email: '',
  query: '',
}

const initialTouched: FieldState = {
  name: false,
  mobile: false,
  email: false,
  query: false,
}

function validateForm(values: FormValues) {
  const errors: ValidationErrors = {}
  const name = values.name.trim()
  const mobile = values.mobile.trim()
  const email = values.email.trim()
  const query = values.query.trim()

  if (!name) {
    errors.name = 'Please enter your name.'
  }

  if (!mobile) {
    errors.mobile = 'Please enter your mobile number.'
  } else {
    const digits = mobile.replace(/\D/g, '')
    const plusCount = mobile.split('+').length - 1
    const hasInvalidCharacters = /[^\d+\s().-]/.test(mobile)
    const hasMisplacedPlus = mobile.includes('+') && !mobile.startsWith('+')

    if (hasInvalidCharacters || plusCount > 1 || hasMisplacedPlus) {
      errors.mobile = 'Use digits only, with optional +, spaces, hyphens, or brackets.'
    } else if (digits.length < 10 || digits.length > 15) {
      errors.mobile = 'Mobile number must contain 10 to 15 digits.'
    } else if (/^(\d)\1+$/.test(digits)) {
      errors.mobile = 'Please enter a real mobile number.'
    }
  }

  if (!email) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!query) {
    errors.query = 'Please enter your business query.'
  }

  return errors
}

function hasErrors(errors: ValidationErrors) {
  return fieldNames.some((field) => Boolean(errors[field]))
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null

  return (
    <p id={id} role="alert" className="flex items-start gap-1.5 text-xs font-medium text-red-200">
      <AlertCircle className="mt-0.5 size-3.5 shrink-0" />
      <span>{message}</span>
    </p>
  )
}

export function CTA() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [values, setValues] = useState<FormValues>(initialValues)
  const [touched, setTouched] = useState<FieldState>(initialTouched)
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const errors = validateForm(values)

  function visibleError(field: FieldName) {
    return touched[field] || submitAttempted || values[field].trim()
      ? errors[field]
      : undefined
  }

  function inputClass(field: FieldName) {
    const error = visibleError(field)

    return `rounded-xl border bg-white/10 px-4 text-sm text-background outline-none transition-colors placeholder:text-background/45 ${
      error ? 'border-red-300/70 focus:border-red-200' : 'border-white/10 focus:border-accent'
    }`
  }

  function handleChange(field: FieldName) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [field]: event.currentTarget.value,
      }))

      if (status === 'sent' || status === 'error') {
        setStatus('idle')
        setMessage('')
      }
    }
  }

  function handleBlur(field: FieldName) {
    return (_event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched((currentTouched) => ({
        ...currentTouched,
        [field]: true,
      }))
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitAttempted(true)
    setTouched({
      name: true,
      mobile: true,
      email: true,
      query: true,
    })

    const nextErrors = validateForm(values)

    if (hasErrors(nextErrors)) {
      setStatus('error')
      setMessage('Please fix the highlighted details before sending.')
      return
    }

    const payload = {
      name: values.name.trim(),
      mobile: values.mobile.trim(),
      email: values.email.trim(),
      query: values.query.trim(),
    }

    setStatus('sending')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to send your request.')
      }

      setValues(initialValues)
      setTouched(initialTouched)
      setSubmitAttempted(false)
      setStatus('sent')
      setMessage('Your request has been sent. We will get back to you shortly.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Failed to send your request.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-[5%] py-20 lg:py-24">
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
            <a href={`${gmailComposeBase}&to=${contactEmail}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-background">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-accent">
                <Mail className="size-4" />
              </span>
              {contactEmail}
            </a>
            <a href="tel:+917358550765" className="flex items-center gap-3 text-sm font-medium text-background">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-accent">
                <Phone className="size-4" />
              </span>
              +91 73585 50765
            </a>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit} className="relative z-10 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl sm:p-5">
          {['Your Name', 'Mobile Number', 'Email Address', 'Business Query'].map((label) => (
            <label key={label} className="sr-only">
              {label}
            </label>
          ))}
          {message && (
            <div
              role={status === 'error' ? 'alert' : 'status'}
              aria-live="polite"
              className={`flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm font-medium ${
                status === 'sent'
                  ? 'border-accent/40 bg-accent/15 text-background'
                  : 'border-red-300/30 bg-red-500/15 text-red-100'
              }`}
            >
              {status === 'sent' ? (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
              ) : (
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
              )}
              <span>{message}</span>
            </div>
          )}
          <input
            id="contact-name"
            name="name"
            aria-label="Your Name"
            aria-invalid={Boolean(visibleError('name'))}
            aria-describedby={visibleError('name') ? 'contact-name-error' : undefined}
            autoComplete="name"
            placeholder="Your Name"
            value={values.name}
            onBlur={handleBlur('name')}
            onChange={handleChange('name')}
            className={`h-12 ${inputClass('name')}`}
          />
          <FieldError id="contact-name-error" message={visibleError('name')} />
          <input
            id="contact-mobile"
            name="mobile"
            type="tel"
            aria-label="Mobile Number"
            aria-invalid={Boolean(visibleError('mobile'))}
            aria-describedby={visibleError('mobile') ? 'contact-mobile-error' : undefined}
            autoComplete="tel"
            inputMode="tel"
            placeholder="Mobile Number"
            value={values.mobile}
            onBlur={handleBlur('mobile')}
            onChange={handleChange('mobile')}
            className={`h-12 ${inputClass('mobile')}`}
          />
          <FieldError id="contact-mobile-error" message={visibleError('mobile')} />
          <input
            id="contact-email"
            name="email"
            type="email"
            aria-label="Email Address"
            aria-invalid={Boolean(visibleError('email'))}
            aria-describedby={visibleError('email') ? 'contact-email-error' : undefined}
            autoComplete="email"
            placeholder="Email Address"
            value={values.email}
            onBlur={handleBlur('email')}
            onChange={handleChange('email')}
            className={`h-12 ${inputClass('email')}`}
          />
          <FieldError id="contact-email-error" message={visibleError('email')} />
          <textarea
            id="contact-query"
            name="query"
            aria-label="Business Query"
            aria-invalid={Boolean(visibleError('query'))}
            aria-describedby={visibleError('query') ? 'contact-query-error' : undefined}
            autoComplete="off"
            placeholder="Business Query"
            rows={5}
            value={values.query}
            onBlur={handleBlur('query')}
            onChange={handleChange('query')}
            className={`resize-none py-3 ${inputClass('query')}`}
          />
          <FieldError id="contact-query-error" message={visibleError('query')} />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-navy shadow-[0_10px_30px_rgba(0,174,239,0.28)] transition-transform hover:-translate-y-0.5"
          >
            {status === 'sending' ? 'Sending...' : 'Send My Request'}
            <Send className="size-4" />
          </button>
        </form>
      </motion.div>
    </section>
  )
}
