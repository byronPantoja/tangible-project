module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'images.squarespace-cdn.com'],
  },
}
