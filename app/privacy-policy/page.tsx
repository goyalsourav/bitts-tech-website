import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { ScrollProgress } from '@/components/site/scroll-progress'

export const metadata: Metadata = {
  title: 'Privacy Policy | BittsTech',
  description:
    'Privacy Policy for BittsTech covering contact form submissions, communication details, and website analytics.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-x-clip bg-background">
      <ScrollProgress />
      <Navbar />
      <section className="bg-dotgrid px-[5%] pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h1 className="font-heading text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              BittsTech collects only the information needed to respond to
              business enquiries, such as name, email address, phone number, and
              project details submitted through the contact form.
            </p>
            <p>
              We use this information to communicate with you, understand your
              requirements, prepare project recommendations, and provide support
              if you choose to work with us.
            </p>
            <p>
              We do not sell personal information. Basic analytics may be used
              to understand website performance and improve the experience.
            </p>
            <p>
              For privacy questions or data requests, contact
              bittstechinfo@gmail.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
