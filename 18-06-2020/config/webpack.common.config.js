const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.css', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[chunkhash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'assets/images'
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // {
      //   test: /.(jpe?g|png|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         filename: '[name].[ext]',
      //         outputPath: 'assets/images'
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         webp: {
      //           quality: 75
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  }
}