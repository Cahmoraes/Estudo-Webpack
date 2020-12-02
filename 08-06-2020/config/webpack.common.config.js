const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssEtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.d.ts']
  },
  plugins: [
    new MiniCssEtractPlugin({
      filename: 'style[chunkhash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Estudo',
      template: './src/templates/template.html',
      filename: 'estudo.html',
      inject: true,
      chunks: ['vendor'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
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
              ['@babel/plugin-transform-runtime']
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
        test: /.(jpe?g|png|svg|gif)$/,
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
      },
      {
        test: /.html$/i,
        use: 'html-es6-template-loader'
      }
    ]
  }
}