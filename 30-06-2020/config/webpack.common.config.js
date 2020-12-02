const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    filename: 'assets/js/[name][hash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'assets/images'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['main', 'vendor'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style[chunkhash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /.(js|ts)$/,
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
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /.(s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /$(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[ext]',
              outputPath: 'assets/images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        test: /.html$/i,
        use: 'html-es6-template-loader'
      }
    ]
  }
}