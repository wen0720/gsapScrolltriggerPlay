const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
    pin: './pin.js',
    mistake1: './mistake1.js',
    mistake2: './mistake2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'scroll Trigger test 1',
      filename: 'index.html',
      template: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'pin test',
      filename: 'pin.html',
      template: './pin.html',
      chunks: ['pin'],
    }),
    new HtmlWebpackPlugin({
      title: 'mistake1',
      filename: 'mistake1.html',
      template: './mistake1.html',
      chunks: ['mistake1'],
    }),
    new HtmlWebpackPlugin({
      title: 'mistake2',
      filename: 'mistake2.html',
      template: './mistake2.html',
      chunks: ['mistake2'],
    })
  ],
  devServer: {
    hot: true
  }
}
