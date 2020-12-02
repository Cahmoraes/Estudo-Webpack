const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'assets/js/[name][hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Stater Pack',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/',
          to: 'assets/'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-optional-chaining'
            ]
          }
        }
      }
    ]
  }
}