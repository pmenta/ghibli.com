/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
  },
}

module.exports = nextConfig
