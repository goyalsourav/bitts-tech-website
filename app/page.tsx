import type { Metadata } from 'next'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { PainPoints } from '@/components/site/pain-points'
import { Services } from '@/components/site/services'
import { Showcase } from '@/components/site/showcase'
import { Why } from '@/components/site/why'
import { Industries } from '@/components/site/industries'
import { Process } from '@/components/site/process'
import { Notes } from '@/components/site/notes'
import { Reviews } from '@/components/site/reviews'
import { FAQ } from '@/components/site/faq'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { faqs } from '@/components/site/faq'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Bitts Tech',
  description:
    'BittsTech builds custom websites, web apps, business automation systems, and software solutions for growing businesses in India. Get fast, scalable digital products.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Custom Website & Web App Development Agency in India | BittsTech',
    description:
      'Custom websites, web apps, automation systems, and software solutions for growing businesses in India.',
    url: '/',
    type: 'website',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.bittstech.com/#organization',
        name: 'BittsTech',
        url: 'https://www.bittstech.com',
        logo: 'https://www.bittstech.com/bitts-tech-logo.png',
        email: 'bittstechinfo@gmail.com',
        telephone: '+91 73585 50765',
        sameAs: [
          'https://www.instagram.com/bittstechinfo/',
          'https://www.linkedin.com/company/bittstech',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.bittstech.com/#localbusiness',
        name: 'BittsTech',
        url: 'https://www.bittstech.com',
        email: 'bittstechinfo@gmail.com',
        telephone: '+91 73585 50765',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        priceRange: '$$',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.bittstech.com/#website',
        url: 'https://www.bittstech.com',
        name: 'BittsTech',
        publisher: {
          '@id': 'https://www.bittstech.com/#organization',
        },
      },
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `https://www.bittstech.com/services/${service.slug}#service`,
        name: service.title,
        description: service.metaDescription,
        provider: {
          '@id': 'https://www.bittstech.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        url: `https://www.bittstech.com/services/${service.slug}`,
      })),
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <main className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Showcase />
      <Process />
      <Why />
      <Industries />
      <Notes />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
