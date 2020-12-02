const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
    vendor: path.resolve(__dirname, '../src/vendor.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Estudo',
      filename: 'estudo.html',
      template: path.resolve(__dirname, '../src/estudo.html'),
      inject: true,
      chuncks: ['vendor.js'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style[chunkhash].css',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: 'assets/images'
    }])
  ],
  resolve: {
    extensions: ['.css', '.js', '.ts', '.scss']
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
              '@babel/typescript'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/proposal-class-properties", { "loose": true }]
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
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
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