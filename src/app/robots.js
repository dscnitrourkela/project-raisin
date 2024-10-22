export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/events', '/register', '/refundPolicy'],
      disallow: [],
    },
    sitemap: 'https://innonitrkl.in/sitemap.xml',
  };
}
