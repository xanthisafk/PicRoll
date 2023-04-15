/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
    skipWaiting: true,
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.redd.it"
      },
      {
        protocol: "https",
        hostname: "*.imgur.com"
      },
      {
        protocol: "https",
        hostname: "*.ibb.co"
      },
      {
        protocol: "https",
        hostname: "*.staticflickr.com"
      },
      {
        protocol: "https",
        hostname: "*.redditmedia.com"
      }
    ]
  }
});

module.exports = nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})




