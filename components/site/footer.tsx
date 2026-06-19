import { AtSign, Globe, Mail, Share2 } from 'lucide-react'
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
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: Share2, label: 'Share', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:contact@bittstech.com' },
]

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
