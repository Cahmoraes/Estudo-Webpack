const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css', '.d.ts']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: './src/index.html',
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
        test: /.(jpe?g|png)$/,
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
        test: /\.html$/,
        use: [
          'html-es6-template-loader',
          // 'html-loader'
        ]
      },
      {
        test: /.(js|ts)$/,
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
      }
    ]
  }
}