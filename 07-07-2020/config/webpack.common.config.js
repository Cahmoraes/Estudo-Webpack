const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'nome',
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style[chunkhash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'assets/images'
        }
      ]
    })
  ],
  module: {
    rules: [
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
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      },
      {
        test: /.html$/i,
        loader: 'html-es6-template-loader'
      }
    ]
  }
}
