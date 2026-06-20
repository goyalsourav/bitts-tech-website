import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { getNote, notes } from '@/lib/notes'

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const note = getNote(slug)

  if (!note) return { title: 'Blog - BittsTech' }

  return {
    title: `${note.title} - BittsTech`,
    description: note.excerpt,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const note = getNote(slug)

  if (!note) notFound()

  return (
    <main className="relative overflow-x-clip bg-background">
      <ScrollProgress />
      <Navbar />

      <article className="relative overflow-hidden bg-dotgrid px-[5%] pb-20 pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -right-24 top-24 size-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to notes
          </Link>

          <div className="mt-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <BookOpen className="size-3.5" />
              {note.category} · {note.read}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {note.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {note.excerpt}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="h-fit rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Article details
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Author</dt>
                  <dd className="mt-1 font-semibold text-foreground">BittsTech Team</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-semibold text-foreground">Draft layout ready</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="mt-1 font-semibold text-foreground">{note.category}</dd>
                </div>
              </dl>
            </aside>

            <section className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Content coming soon
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                This note page is ready for the full article.
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Add the final blog copy here later. The page already has the route,
                  metadata, article header, sidebar details, and content container in place.
                </p>
                <p>
                  When the article is ready, this section can be replaced with real
                  headings, examples, screenshots, and calls to action.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
