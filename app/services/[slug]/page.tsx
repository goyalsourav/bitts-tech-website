import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { getService, services } from '@/lib/services'
import { workProjects } from '@/lib/work-projects'
import { notes } from '@/lib/notes'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return { title: 'Bitts Tech' }

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: 'website',
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://www.bittstech.com/services/${service.slug}#service`,
        name: service.title,
        description: service.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'BittsTech',
          url: 'https://www.bittstech.com',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        url: `https://www.bittstech.com/services/${service.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
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
            name: 'Services',
            item: 'https://www.bittstech.com/#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://www.bittstech.com/services/${service.slug}`,
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

      <section className="relative overflow-hidden bg-dotgrid px-[5%] pb-20 pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -right-24 top-24 size-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>

          <div className="mt-12 max-w-4xl">
            <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              BittsTech Services
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                What this service includes
              </h2>
              <div className="mt-6 grid gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 border-t border-border py-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="h-fit rounded-3xl border border-border bg-secondary/45 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Ready to discuss?
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                Book a Website / Software Consultation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us what you are building, improving, or automating. We will
                recommend the right next step.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book consultation
                <ArrowRight className="size-4" />
              </Link>
            </aside>
          </div>

          <section className="mt-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Related work
              </p>
              <div className="mt-5 space-y-4">
                {workProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="block rounded-2xl border border-border p-4 transition-colors hover:border-primary/35"
                  >
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Related reading
              </p>
              <div className="mt-5 space-y-4">
                {notes.map((note) => (
                  <Link
                    key={note.slug}
                    href={`/blog/${note.slug}`}
                    className="block rounded-2xl border border-border p-4 transition-colors hover:border-primary/35"
                  >
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{note.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
