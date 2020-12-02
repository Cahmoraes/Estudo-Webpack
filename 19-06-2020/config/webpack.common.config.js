const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    filename: 'assets/js/[name][hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.ts']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images/',
          to: 'assets/images/'
        }
      ]
    }),
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
    new MiniCssExtractPlugin({
      filename: 'assets/style/style[chunkhash].css'
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
      }
    ]
  }
}