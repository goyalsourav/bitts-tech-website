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

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
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
