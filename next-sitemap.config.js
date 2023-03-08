/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN,
  changefreq: 'daily',
  priority: 1.0,
  generateRobotsTxt: true,
  exclude: ['*/dpa', '*/ccpa', '*/privacy', '*/terms', '*/404'],
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_DOMAIN + '/en',
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_DOMAIN + '/ua',
      hreflang: 'ua',
    },
  ],
};
