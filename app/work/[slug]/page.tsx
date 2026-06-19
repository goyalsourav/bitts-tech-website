import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
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
      title: 'Work - BittsTech',
    }
  }

  return {
    title: `${project.title} - BittsTech`,
    description: project.summary,
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

  return (
    <main className="relative overflow-x-clip bg-background">
      <ScrollProgress />
      <Navbar />

      <section className="relative overflow-hidden bg-navy px-4 pb-20 pt-32 text-background sm:px-6 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="pointer-events-none absolute -right-20 top-20 size-[440px] rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#showcase"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-background/75 transition-colors hover:text-background"
          >
            <ArrowLeft className="size-4" />
            Back to work
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {project.category}
              </span>
              <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight text-background text-balance sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/72 sm:text-lg">
                {project.summary}
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              {project.results.map((result) => (
                <div key={result.label} className="rounded-2xl bg-white/[0.07] p-4">
                  <p className="font-heading text-2xl font-semibold text-accent">
                    {result.value}
                  </p>
                  <p className="mt-1 text-sm text-background/68">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-[0_28px_80px_-60px_rgba(30,50,110,0.75)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Project snapshot
            </p>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">Industry</dt>
                <dd className="mt-1 font-semibold text-foreground">{project.industry}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Platform</dt>
                <dd className="mt-1 font-semibold text-foreground">{project.platform}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-10">
            <DetailBlock eyebrow="The problem" title="What was slowing the business down">
              <p>{project.problem}</p>
            </DetailBlock>

            <DetailBlock eyebrow="The need" title="What the system had to solve">
              <p>{project.need}</p>
            </DetailBlock>

            <DetailBlock eyebrow="Pain points" title="Operational gaps we designed around">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.painPoints.map((point) => (
                  <li key={point} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock eyebrow="The solution" title="What BittsTech built">
              <p>{project.solution}</p>
            </DetailBlock>

            <DetailBlock eyebrow="Core features" title="The product modules">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <article key={feature.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </DetailBlock>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DetailBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-3xl border border-border bg-secondary/35 p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  )
}
