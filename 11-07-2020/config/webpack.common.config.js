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
    filename: '[name][hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.ts']
  },
  plugins: [
    new CleanWebpackPlugin(),
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
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Carousel',
      chunks: ['main'],
      inject: true,
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
      }
    ]
  }
}