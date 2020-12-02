const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.d.ts', '.scss', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Dev Server',
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
    }),
    new MiniCssExtractPlugin({
      filename: 'style[chunkhash].css'
    }),
    new CleanWebpackPlugin()
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
        test: /.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            filename: '[name].[ext]',
            outputPath: 'assets/images'
          }
        }
      }
    ]
  },
}