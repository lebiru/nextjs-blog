/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/posts/first-post': { page: '/posts/first-post'},
        '/posts/second-post': { page: '/posts/second-post'}
      }
    }
}

module.exports = nextConfig;
