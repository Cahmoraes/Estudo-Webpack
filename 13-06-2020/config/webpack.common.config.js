const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'assets/js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/style/style[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: './src/assets/images/',
    //       to: 'assets/images/[name].[ext]',
    //     },
    //   ],
    //   options: {
    //     concurrency: 100,
    //   }
    // }),
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.(jpe?g|png|gif|svg)$/,
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