export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://www.adventcapital-uganda.com/sitemap.xml',
  };
}
