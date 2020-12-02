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
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Template - Estudo',
      filename: 'estudo.html',
      template: './src/templates/template.html',
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
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
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
        test: [/.css$|.scss$/],
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