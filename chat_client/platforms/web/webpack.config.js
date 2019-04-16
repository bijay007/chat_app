const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appRoot = path.resolve(__dirname, '../../');
const babelConfig = require('../babelWebConfig');

// Loaders
const styleLoaderConfiguration = {
	test: /\.(s*)css$/,
	use: ["style-loader", "css-loader", "sass-loader"]
};

const imageAndSvgLoaderConfiguration = {
	test: /\.(gif|jpe?g|png|svg)$/,
	use: {
		loader: "file-loader",
		options: {
			name: "[name].[ext]"
		}
	}
};

const fontLoaderConfiguration = {
  test: /\.(woff|woff2|eot|ttf)?$/,
	use: [
		{
      loader: "url-loader",
			options: {
				name: "./fonts/[hash].[ext]"
			}
		}
	]
};

const babelModuleLoaderConfiguration = {
  test: /\.(js|jsx)$/,
  include: babelConfig.includes, // includes external React Native Packages to be compiled by Babel
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins: [
        "react-native-web"
      ]
    }
  }
};

// Main module
module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(appRoot, './index.web.js')
  },
  output: {
    path: path.resolve(appRoot, './platforms/web/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      fontLoaderConfiguration,
      styleLoaderConfiguration,
      imageAndSvgLoaderConfiguration,
      babelModuleLoaderConfiguration
    ]
  },
  resolve: {
    extensions: ['.web.js', '.js'],
    alias: babelConfig.alias
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appRoot, './platforms/web/public/index.html'),
    }),
  ],
}
