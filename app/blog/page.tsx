import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { notes } from '@/lib/notes'

export const metadata: Metadata = {
  title: 'Blog - Bitts Tech',
  description:
    'Read practical Bitts Tech notes on websites, digital marketing, automation, integrations, and post-launch support.',
}

export default function BlogPage() {
  return (
    <main className="relative overflow-x-clip bg-background">
      <ScrollProgress />
      <Navbar />

      <section className="relative overflow-hidden bg-dotgrid px-[5%] pb-20 pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -left-24 top-24 size-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 size-[460px] rounded-full bg-accent/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px]">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mt-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Bitts Tech Notes
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Practical Thinking for Growing Teams
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Browse our latest notes on business systems, custom websites,
              automation, integrations, and support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
              <Link key={note.slug} href={`/blog/${note.slug}`} className="group block">
                <article className="premium-surface h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                      <BookOpen className="size-5" />
                    </span>
                    <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                      {note.read}
                    </span>
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {note.category}
                  </p>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-foreground">
                    {note.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {note.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read note
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
