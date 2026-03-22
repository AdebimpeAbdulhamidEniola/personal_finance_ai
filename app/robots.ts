import { MetadataRoute } from 'next'

// Robots.txt configuration for mykudi.vercel.app
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mykudi.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/transactions', '/dashboard/ai-insights'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
