/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'host.docker.internal'],
  },
}

export default withPlaiceholder(nextConfig)
