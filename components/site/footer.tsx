import { Logo } from './logo'
import { AtSign, Globe, Share2, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Services',
    links: [
      'Custom Websites',
      'Web Applications',
      'Business Automation',
      'API Integrations',
      'Production Support',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Process', 'Industries', 'Careers', 'Contact'],
  },
]

const socials = [
  { icon: AtSign, label: 'Twitter / X', href: '#' },
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: Share2, label: 'Share', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@bittstech.com' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bitts Tech builds custom websites, web applications, automations,
              and reliable technical solutions for growing businesses — from
              startups to enterprises.
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
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Bitts Tech. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span>hello@bittstech.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
