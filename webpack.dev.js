const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'bmetal.local',
      notify: false,
      open: true
    })
  ]
})
