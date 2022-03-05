/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
   */
  pageExtensions: ['page.tsx', 'page.ts'],
  /**
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   * @see https://zenn.dev/steelydylan/articles/nextjs-with-i18n
   */
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
