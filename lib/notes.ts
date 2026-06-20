export const notes = [
  {
    slug: 'business-automation-reduces-manual-work',
    category: 'Automation',
    read: '10min',
    title: 'How Business Automation Reduces Daily Manual Work',
    excerpt:
      'A practical look at repetitive work, handoffs, reminders, and the systems that can remove daily drag.',
  },
  {
    slug: 'prepare-before-building-custom-website',
    category: 'Web Apps',
    read: '8min',
    title: 'What to Prepare Before Building a Custom Website',
    excerpt:
      'A simple planning guide for goals, pages, workflows, content, and decisions before development starts.',
  },
  {
    slug: 'post-go-live-support-matters',
    category: 'Support',
    read: '7min',
    title: 'Why Post Go-live Support Matters for Software Teams',
    excerpt:
      'Launch is only the beginning. Support keeps products stable, useful, and aligned with real users.',
  },
] as const

export type Note = (typeof notes)[number]

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}
