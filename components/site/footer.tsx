import { Mail } from 'lucide-react'
import { Logo } from './logo'

const columns = [
  {
    title: 'Quick Link',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'Service', href: '#services' },
      { label: 'Our Work', href: '#showcase' },
      { label: 'FAQs', href: '#faqs' },
    ],
  },
  {
    title: 'Useful Link',
    links: [
      { label: 'Custom Websites', href: '#services' },
      { label: 'Web Applications', href: '#services' },
      { label: 'Automation', href: '#services' },
      { label: 'Integrations', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Project Links',
    links: [
      { label: 'Travel Agency Suite', href: '#showcase' },
      { label: 'Construction Suite', href: '#showcase' },
      { label: 'Book a Project Call', href: '#contact' },
    ],
  },
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/bittstechinfo/' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/bittstech' },
  { icon: Mail, label: 'Email', href: 'mailto:contact@bittstech.com' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/917358550765' },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M5 9h3v10H5zM5 5.5h3v2.6H5zM11 9h3v1.5c.6-1 1.6-1.8 3.2-1.8 2.4 0 3.8 1.6 3.8 4.5V19h-3v-5.2c0-1.5-.6-2.3-1.8-2.3-1.4 0-2.2 1-2.2 2.6V19h-3z" fill="currentColor" />
    </svg>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M5.5 19.5 6.7 16A7 7 0 1 1 9 18.1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.4 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3 0 .5-.5.7-.5.3-1 .4-1.6.4-2.8 0-6.3-3.4-6.3-6.3 0-.5.1-1.1.3-1.3z" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build clean websites, web apps, automations, and production
              support systems that help growing businesses move faster.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved by BittsTech.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>India-based software solutions agency</span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              contact@bittstech.com
            </span>
            <span>+91 73585 50765</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
