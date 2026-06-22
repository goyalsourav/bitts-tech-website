/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/work/travel-suite',
        destination: '/work/travel-agency-management-platform',
        permanent: true,
      },
      {
        source: '/work/construction-suite',
        destination: '/work/construction-management-software',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
