// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})

const debug = process.env.NODE_ENV !== 'production'

module.exports.assetPrefix = !debug ? '/simultaneous_localization_and_mapping/' : '';


