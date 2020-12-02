const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssEtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['main'],
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Estudo',
      template: './src/templates/estudo.html',
      filename: 'estudo.html',
      inject: true,
      chunks: ['vendor'],
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssEtractPlugin({
      filename: 'style[chunkhash].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss']
  },
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
        test: [/.css$|.scss/],
        use: [
          MiniCssEtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: [/.(png|jpg|jpeg|gif|svg)/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images'
          }
        }
      }
    ]
  }
}