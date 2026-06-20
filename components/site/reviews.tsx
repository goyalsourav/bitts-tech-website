'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const reviews = [
  'Review coming soon',
  'Founder feedback',
  'Product team note',
  'Operations team review',
  'Agency partner quote',
  'Client success story',
]

export function Reviews() {
  const flow = [...reviews, ...reviews, ...reviews]

  return (
    <section className="relative overflow-hidden bg-secondary/35 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="Client Words Will Live Here"
          description="We will add real client reviews here as the work goes live."
        />

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {flow.map((review, index) => (
              <article
                key={`${review}-${index}`}
                className="w-[300px] rounded-2xl border border-border bg-card/80 p-5 shadow-[0_24px_70px_-56px_rgba(30,50,110,0.7)] backdrop-blur-xl sm:w-[360px]"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{review}. This space is prepared for a concise client quote and outcome."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    B
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">BittsTech Client</p>
                    <p className="text-xs text-muted-foreground">Review placeholder</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
