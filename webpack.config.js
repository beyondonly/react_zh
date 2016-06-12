var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader")},
    ]
  },
  plugins: [
    new CommonsChunkPlugin('app.js'),
    new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' }),
    new ExtractTextPlugin("app.css")
  ]
};