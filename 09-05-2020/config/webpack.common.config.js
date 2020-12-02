const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssEtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/app/exercises/ex-1.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack Starter Pack',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'estudo.html',
      template: './src/app/estudo/estudo.html',
      title: 'Estudo',
      inject: true,
      chunks: ['vendor'],
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssEtractPlugin({
      filename: 'style.[chunkhash].css'
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: 'assets/images'
    }]),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: [/\.js$|\.ts/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: [/\.css$|\.scss/],
        use: [
          MiniCssEtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      }
    ]
  }
}