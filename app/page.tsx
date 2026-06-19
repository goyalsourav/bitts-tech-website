import { ScrollProgress } from '@/components/site/scroll-progress'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { FlowSection } from '@/components/site/flow-section'
import { Services } from '@/components/site/services'
import { Showcase } from '@/components/site/showcase'
import { Why } from '@/components/site/why'
import { Industries } from '@/components/site/industries'
import { Process } from '@/components/site/process'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <FlowSection />
      <Services />
      <Showcase />
      <Why />
      <Industries />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
