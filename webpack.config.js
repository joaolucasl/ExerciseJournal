const autoprefixer = require('autoprefixer')
const cssNext = require('postcss-cssnext')
const lost = require('lost');
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const prefixer = require('autoprefixer')
const pcImport = require('postcss-import')

module.exports = {
  entry: './src/app.js',
  output: { path: path.join(__dirname, 'build'), filename: 'bundle.js' },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|styl|scss)$/,
        loader: 'style!css?modules&importLoaders=1!stylus!postcss',
      },
      {
        test: /\.svg$/,
        loader: 'file',
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  postcss: [
    pcImport,
    cssNext,
    lost,
    autoprefixer({ browsers: ['> 15%'] })
  ],
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080/' }),
  ],
}