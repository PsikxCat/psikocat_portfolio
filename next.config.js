/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icongr.am'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com'
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      },
    ]
  },
}

module.exports = nextConfig
