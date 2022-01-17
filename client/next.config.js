module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  async rewrites() {
    console.log("Rewrites called")
    return [
      {
        source: '/api/:path*',
        destination: 'https://d-cms-test.herokuapp.com/api/:path*',
      },
    ]
  }
};
