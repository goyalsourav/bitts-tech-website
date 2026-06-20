export const notes = [
  {
    slug: 'why-websites-are-important',
    category: 'Web Development / Digital Marketing',
    read: '12min',
    title: 'Why Websites Are Important: The Complete Guide for Modern Businesses',
    titleTag: 'Why Websites Are Important: The Complete 2026 Guide for Businesses',
    metaDescription:
      'Why is a website important for your business? See the research-backed reasons, real conversion data, and the essential elements every website needs to win customers.',
    excerpt:
      'A field guide to what a website does, why it matters, and what yours actually needs.',
    focusKeyword: 'why websites are important',
    secondaryKeywords: [
      'importance of a website for business',
      'benefits of having a website',
      'why every business needs a website',
      'what should a website contain',
      'website essentials checklist',
      'online presence for business',
      'website credibility',
    ],
    image: '/blog/why-websites-are-important-featured.png',
    imageAlt: 'business owner reviewing website analytics dashboard',
    author: 'BittsTech Team',
    year: '2026',
  },
] as const

export type Note = (typeof notes)[number]

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}
