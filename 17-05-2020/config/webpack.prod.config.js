const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.common.config.js')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(WebpackBaseConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
})