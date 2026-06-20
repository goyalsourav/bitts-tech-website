import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'What kinds of businesses do you work with?',
    a: 'We work with businesses of all sizes, from solo founders to growing SMBs. If you have a process, workflow, or customer journey that needs a digital solution, we can build it.',
  },
  {
    q: 'How long does a typical project take?',
    a: "A standard website takes 2-4 weeks. A web application or custom system typically takes 6-12 weeks depending on complexity. We'll give you a clear timeline after our discovery call.",
  },
  {
    q: 'Do I need any technical knowledge to work with you?',
    a: 'None at all. We translate your business requirements into technical solutions. You just need to know your business.',
  },
  {
    q: "What's the difference between custom software and off-the-shelf tools?",
    a: 'Off-the-shelf tools make you fit their process. Custom software fits your process. The difference is efficiency, ownership, and software that actually grows with you.',
  },
  {
    q: 'What happens after my product launches?',
    a: "We don't disappear. We provide live support, monitor the product, and continue improving it based on your feedback.",
  },
  {
    q: 'How does your support work?',
    a: 'You get direct access to our team via WhatsApp and email. No ticket queues, no bots, real responses.',
  },
  {
    q: 'Can you improve my existing website or software?',
    a: "Yes. Revamps are one of our core services. We audit what you have, identify what's holding it back, and rebuild it right.",
  },
  {
    q: 'Do I own all the code after the project?',
    a: 'Completely. You receive full source code, deployment access, and ownership of all data. No lock-in.',
  },
]

export function FAQ() {
  return (
    <section id="faqs" className="relative overflow-hidden bg-secondary/35 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-45 mask-soft" />
      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQs"
          title="Common Questions"
          description="Clear answers before we start building together."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card/75 p-5 shadow-[0_22px_60px_-50px_rgba(30,50,110,0.65)] backdrop-blur-xl"
            >
              <summary className="cursor-pointer list-none font-heading text-base font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
