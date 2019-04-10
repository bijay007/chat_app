const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appRoot = path.resolve(__dirname, '../');

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(appRoot, './index.web.js')
  },
  output: {
    path: path.resolve(appRoot, './web/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            babelrc: false,
            plugins: [
              "react-native-web"
            ]
          }
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appRoot, './web/public/index.html'),
    }),
  ],
}
