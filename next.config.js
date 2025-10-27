/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Replit compatibility
  env: {
    HOSTNAME: '0.0.0.0',
  },
  // Allow Replit to serve the app
  experimental: {
    serverActions: {
      allowedOrigins: ['*.replit.dev', '*.repl.co'],
    },
  },
}

module.exports = nextConfig
