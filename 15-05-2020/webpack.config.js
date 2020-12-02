const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/app/index.js'),
    vendor: path.resolve(__dirname, 'src/app/vendor.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style[chunkhash].css'
    })
  ],
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/typescript'
            ],
            plugins: [
              'babel-plugin-transform-class-properties'
            ]
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }

}