/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  styledComponents: {
    ssr: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
