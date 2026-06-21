import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { getWorkProject, workProjects } from '@/lib/work-projects'

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getWorkProject(slug)

  if (!project) {
    return {
      title: 'Bitts Tech',
    }
  }

  return {
    title: 'Bitts Tech',
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - BittsTech`,
      description: project.summary,
      url: `/work/${project.slug}`,
      type: 'article',
    },
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getWorkProject(slug)

  if (!project) notFound()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        about: project.industry,
        creator: {
          '@type': 'Organization',
          name: 'BittsTech',
          url: 'https://www.bittstech.com',
        },
        url: `https://www.bittstech.com/work/${project.slug}`,
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
            name: 'Work',
            item: 'https://www.bittstech.com/#showcase',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `https://www.bittstech.com/work/${project.slug}`,
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

      <section className="relative overflow-hidden bg-navy px-[5%] pb-12 pt-28 text-background lg:pb-14 lg:pt-30">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="pointer-events-none absolute -right-20 top-20 size-[440px] rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#showcase"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-background/75 transition-colors hover:text-background"
            >
              <ArrowLeft className="size-4" />
              Back to work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              Build something similar
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {project.category}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-[3.4rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-background/72 sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="font-heading text-2xl font-semibold text-accent">
                  {result.value}
                </p>
                <p className="mt-1 text-sm text-background/68">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background px-[5%] py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-3">
            <SnapshotItem label="Industry" value={project.industry} />
            <SnapshotItem label="Platform" value={project.platform} />
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Case study
              </p>
              <h2 className="mt-3 max-w-md font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                From scattered work to a reliable operating system.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A clear look at the business gap, the system direction, and the product modules we shaped for this workflow.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid gap-5 md:grid-cols-2">
                <TextPanel eyebrow="The problem" title="What was slowing the business down">
                  {project.problem}
                </TextPanel>
                <TextPanel eyebrow="The need" title="What the system had to solve">
                  {project.need}
                </TextPanel>
              </div>

              <section>
                <SectionKicker eyebrow="Pain points" title="Operational gaps we designed around" />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.painPoints.map((point) => (
                    <div key={point} className="flex gap-3 border-t border-border py-4">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-border bg-secondary/40 p-6 sm:p-8">
                <SectionKicker eyebrow="The solution" title="What BittsTech built" />
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </section>

              <section>
                <SectionKicker eyebrow="Core features" title="The product modules" />
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <article key={feature.title} className="rounded-2xl border border-border bg-card p-5 shadow-[0_18px_60px_-52px_rgba(30,50,110,0.75)]">
                      <span className="font-mono text-sm font-semibold text-primary/50">
                        0{index + 1}
                      </span>
                      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-3 font-heading text-xl font-semibold text-foreground">
        {value}
      </p>
    </div>
  )
}

function SectionKicker({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

function TextPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <article className="border-l border-primary/30 pl-5">
      <SectionKicker eyebrow={eyebrow} title={title} />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </p>
    </article>
  )
}
