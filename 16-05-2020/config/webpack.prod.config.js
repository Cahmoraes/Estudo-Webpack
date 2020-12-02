const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.common.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(WebpackBaseConfig, {
  optmization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  }
})