const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  ['entry']: {
    ['main']: './src/index.ts'
  },
  ['output']: {
    ['path']: path.resolve(__dirname, '../dist'),
    ['filename']: 'assets/js/[name][hash].js'
  },
  ['resolve']: {
    ['extensions']: ['.js', '.ts', '.scss', '.css']
  },
  ['plugins']: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      ['filename']: 'assets/css/style[chunkhash].css'
    }),
    new CopyWebpackPlugin({
      ['patterns']: [
        {
          ['from']: './src/assets/images',
          ['to']: 'assets/images'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      ['title']: 'Webpack Starter Pack',
      ['filename']: 'index.html',
      ['template']: './src/index.html',
      ['chunks']: ['main'],
      ['inject']: true,
      ['minify']: {
        ['removeComments']: true,
        ['collapseWhitespace']: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: [
          /(node_modules)/,
          /(server)/
        ],
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
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpe?g|svg|png|gif)$/,
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