module.exports = {
  publicPath: '/jjw/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};
