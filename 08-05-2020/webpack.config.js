const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack starter pack',
      template: './src/index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CopyWebpackPlugin([
      {
        from: '.src/app/assets/images',
        to: 'assets/images'
      }
    ])
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: [/\.js$|\.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/typescript'
            ]
          }
        }
      },
      {
        test: [/\.css$|\.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  }
}