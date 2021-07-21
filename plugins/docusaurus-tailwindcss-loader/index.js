module.exports = function (context, options) {
  return {
    name: 'docusaurus-tailwindcss-loader',
    configurePostCss(postcssOptions) {
      // Appends new PostCSS plugin.
      postcssOptions.plugins.push(
          require('tailwindcss'),
          require('autoprefixer'),
      )
      return postcssOptions
    },
  }
}
