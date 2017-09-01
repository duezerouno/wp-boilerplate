const merge = require('webpack-merge')
const common = require('./webpack.common.js');

const { UglifyJsPlugin } = require('webpack').optimize

module.exports = merge(common, {
  plugins: [
    new UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
})
