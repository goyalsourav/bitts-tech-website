import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { getNote, notes } from '@/lib/notes'

type MarkdownBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

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

  if (!note) return { title: 'Bitts Tech' }

  return {
    title: {
      absolute: note.titleTag,
    },
    description: note.metaDescription,
    keywords: [note.focusKeyword, ...note.secondaryKeywords],
    alternates: {
      canonical: `/blog/${note.slug}`,
    },
    openGraph: {
      title: note.titleTag,
      description: note.metaDescription,
      type: 'article',
      url: `/blog/${note.slug}`,
      images: [
        {
          url: note.image,
          width: 1200,
          height: 630,
          alt: note.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.titleTag,
      description: note.metaDescription,
      images: [note.image],
    },
  }
}

function getArticleBlocks(slug: string) {
  const source = readFileSync(join(process.cwd(), 'content', 'blog', `${slug}.md`), 'utf8')
  const articleSource = source.slice(source.indexOf('\n# ') + 1).trim()
  const lines = articleSource.split(/\r?\n/)
  const blocks: MarkdownBlock[] = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim()

    if (!line) continue
    if (line.startsWith('# ')) continue
    if (line === '---') break

    if (line.startsWith('## ')) {
      blocks.push({ type: 'heading', level: 2, text: line.replace(/^##\s+/, '') })
      continue
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'heading', level: 3, text: line.replace(/^###\s+/, '') })
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []

      while (lines[index]?.trim().startsWith('- ')) {
        items.push(lines[index].trim().replace(/^-\s+/, ''))
        index += 1
      }

      index -= 1
      blocks.push({ type: 'list', items })
      continue
    }
    const paragraph = [line]

    while (
      lines[index + 1] &&
      lines[index + 1].trim() &&
      !lines[index + 1].trim().startsWith('#') &&
      !lines[index + 1].trim().startsWith('- ') &&
      lines[index + 1].trim() !== '---'
    ) {
      index += 1
      paragraph.push(lines[index].trim())
    }

    blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
  }

  return blocks
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }

    return part
  })
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const note = getNote(slug)

  if (!note) notFound()

  const blocks = getArticleBlocks(note.slug)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: note.title,
        description: note.metaDescription,
        image: `https://www.bittstech.com${note.image}`,
        author: {
          '@type': 'Organization',
          name: note.author,
          url: 'https://www.bittstech.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'BittsTech',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.bittstech.com/bitts-tech-logo.png',
          },
        },
        mainEntityOfPage: `https://www.bittstech.com/blog/${note.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.bittstech.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.bittstech.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: note.title,
            item: `https://www.bittstech.com/blog/${note.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <main className="relative overflow-x-clip bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />

      <article className="relative overflow-hidden bg-dotgrid px-[5%] pb-20 pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -right-24 top-24 size-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to all notes
          </Link>

          <div className="mt-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <BookOpen className="size-3.5" />
              {note.category} / {note.read}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {note.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {note.excerpt}
            </p>
          </div>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src={note.image}
              alt={note.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="h-fit rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Article details
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Author</dt>
                  <dd className="mt-1 font-semibold text-foreground">{note.author}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="mt-1 font-semibold text-foreground">{note.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Focus keyword</dt>
                  <dd className="mt-1 font-semibold text-foreground">{note.focusKeyword}</dd>
                </div>
              </dl>
            </aside>

            <section className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
              <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                {blocks.map((block, index) => {
                  if (block.type === 'heading' && block.level === 2) {
                    return (
                      <h2 key={index} className="mt-10 text-3xl font-semibold first:mt-0">
                        {renderInline(block.text)}
                      </h2>
                    )
                  }

                  if (block.type === 'heading' && block.level === 3) {
                    return (
                      <h3 key={index} className="mt-8 text-2xl font-semibold">
                        {renderInline(block.text)}
                      </h3>
                    )
                  }

                  if (block.type === 'list') {
                    return (
                      <ul key={index} className="my-5 list-disc space-y-2 pl-5">
                        {block.items.map((item) => (
                          <li key={item}>{renderInline(item)}</li>
                        ))}
                      </ul>
                    )
                  }

                  return (
                    <p key={index} className="mt-5 text-base leading-relaxed">
                      {renderInline(block.text)}
                    </p>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
