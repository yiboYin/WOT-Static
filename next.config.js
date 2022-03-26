/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins = config.plugins || []
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader'
    })
    // alias for shared folder
    config.resolve.alias.Shared = path.resolve(__dirname, 'shared')
    return config
  },
  publicRuntimeConfig: {
    bffBaseUrl: '/bff'
  }
}

module.exports = nextConfig
