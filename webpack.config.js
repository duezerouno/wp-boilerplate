const path = require('path')
const packages = require('./package.json')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'style.css'
})

module.exports = {
  entry: {
    app: './src/js/index.js',
    vendor: Object.keys(packages.dependencies)
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              ['transform-class-properties']
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer'),
                  require('cssnano')
                ]
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new CopyWebpackPlugin(
      [
        {
          from: './src',
          to: './',
          force: true
        }
      ],
      {
        ignore: [
          '*.js',
          '*.scss',
          '.DS_Store'
        ]
      }
    ),
    new BrowserSyncPlugin({
      proxy: 'wpboilerplate.dev',
      notify: false,
      open: true
    })
  ]
}
