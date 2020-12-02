const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssEtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      title: 'Webpack Starter Pack',
      chunks: ['main', 'vendor'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssEtractPlugin({
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
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /.(s?css)$/,
        use: [
          MiniCssEtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.(jpe?g|svg|gif|png)$/,
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
          }
        ]
      }
    ]
  }
}