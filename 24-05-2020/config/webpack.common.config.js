const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

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
    extensions: ['.ts', '.js', '.scss', '.css']
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
      title: 'Template',
      filename: './estudo/estudo.html',
      template: './src/templates/template.html',
      inject: true,
      excludeChunks: ['main'],
      chunks: 'vendor.js',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCSSExtractPlugin({
      filename: './assets/style[chunkhash].css'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.js$|.ts$/,
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
        test: /.css$|.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            filename: '[name].[ext]'
          }
        }
      }
    ]
  }
}