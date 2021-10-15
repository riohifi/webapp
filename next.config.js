module.exports = {
  // reactStrictMode: true,
  rewrites() {
    return [
      { source: '/_next/:path*', destination: '/.next/:path*' }
    ]
  }
}
