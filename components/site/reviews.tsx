import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from './section-heading'

const outcomes = [
  'Case studies show real operational workflows, not mock portfolio pieces.',
  'Every build includes direct communication, production handoff, and post-launch support.',
  'Client testimonials will be added only after approved public quotes are available.',
]

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-secondary/35 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-[1500px] px-[5%]">
        <SectionHeading
          eyebrow="Trust Signals"
          title="Proof Without Placeholder Reviews"
          description="Until public client quotes are approved, we show the proof we can stand behind: shipped workflows, ownership, and support."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article
              key={outcome}
              className="rounded-2xl border border-border bg-card/80 p-6 shadow-[0_24px_70px_-56px_rgba(30,50,110,0.7)] backdrop-blur-xl"
            >
              <CheckCircle2 className="size-6 text-primary" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
