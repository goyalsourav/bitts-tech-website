import type { MetadataRoute } from 'next'
import { notes } from '@/lib/notes'
import { services } from '@/lib/services'
import { workProjects } from '@/lib/work-projects'

const baseUrl = 'https://www.bittstech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/blog', '/privacy-policy', '/terms'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const workRoutes = workProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = notes.map((note) => ({
    url: `${baseUrl}/blog/${note.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes]
}
