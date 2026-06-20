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
  {
    slug: 'why-seo-is-important-business-growth',
    category: 'Digital Marketing / SEO',
    read: '13min',
    title: 'Why SEO Is Important: How It Drives Long-Term Business Growth',
    titleTag: 'Why SEO Is Important: How It Drives Business Growth in 2026',
    metaDescription:
      "Why is SEO important for business growth? See the data on organic traffic, ranking CTR, and ROI versus paid ads — plus what's necessary for SEO and where to focus first.",
    excerpt:
      'A field guide to what SEO does, why it compounds, and where to focus first.',
    focusKeyword: 'why SEO is important',
    secondaryKeywords: [
      'importance of SEO for business',
      'how to improve SEO',
      'SEO ranking factors',
      'on-page vs off-page SEO',
      'local SEO benefits',
      'SEO for business growth',
      'what is necessary for SEO',
    ],
    image: '/blog/why-seo-is-important-featured.png',
    imageAlt:
      'Google search results page with ranking positions and click-through rates labeled',
    author: 'BittsTech Team',
    year: '2026',
  },
] as const

export type Note = (typeof notes)[number]

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}
