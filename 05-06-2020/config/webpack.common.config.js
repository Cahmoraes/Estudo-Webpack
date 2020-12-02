const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.d.ts', '.css', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style[chunkhash]'
    }),
    new HtmlWebpackplugin({
      title: 'Webpack Starter Pack',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackplugin({
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
        test: /.(ts|js)$/,
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}