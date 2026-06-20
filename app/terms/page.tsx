import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'

export const metadata: Metadata = {
  title: 'Terms | BittsTech',
  description:
    'Terms for using the BittsTech website and contacting BittsTech for websites, web apps, automation, and software services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="relative overflow-x-clip bg-background">
      <ScrollProgress />
      <Navbar />
      <section className="bg-dotgrid px-[5%] pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h1 className="font-heading text-4xl font-bold text-foreground">
            Terms
          </h1>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              The content on this website is provided for general information
              about BittsTech services, projects, and contact options.
            </p>
            <p>
              Submitting an enquiry does not create a project agreement. Project
              scope, pricing, timelines, ownership, support, and deliverables are
              confirmed separately in writing before work begins.
            </p>
            <p>
              Case studies and service descriptions are examples of the types of
              work BittsTech can provide. Final outcomes depend on project scope,
              content readiness, integrations, and business requirements.
            </p>
            <p>
              For questions about these terms, contact bittstechinfo@gmail.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
