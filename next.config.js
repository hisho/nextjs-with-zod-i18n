/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
