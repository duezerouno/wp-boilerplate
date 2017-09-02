const webpack = require('webpack')
const path = require('path')
const packages = require('./package.json')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
        use: ExtractTextPlugin.extract({
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
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
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
    )
  ]
}
