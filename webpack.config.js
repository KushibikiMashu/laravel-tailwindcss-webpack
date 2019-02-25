const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    "css/styles": path.resolve(__dirname, './resources/css/styles.css')
  },
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
  ]
};