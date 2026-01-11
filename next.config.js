/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // No trailing slash - consistent with current canonical URL strategy
  // GitHub Pages works better without trailing slashes
  // Matches existing canonical: https://rikulauttia.com (not https://rikulauttia.com/)
  trailingSlash: false,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // No base path needed - deploying to root domain
  // basePath: '',

  // React strict mode for better development experience
  reactStrictMode: true,

  // Performance optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
