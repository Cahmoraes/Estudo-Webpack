const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js'
  },
  resolve: {
    extensions: ['.css', '.scss', '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Webpack Starter Pack',
      chunks: ['main', 'vendor'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets',
          to: 'assets'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|ts)$/i,
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