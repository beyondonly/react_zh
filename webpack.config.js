var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['webpack/hot/dev-server','./app/index.js'],
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['','.js', '.less','.css'],
  },
  module: {
    loaders:[
      { test: /\.js$/, exclude:/node_modules/,loader: 'babel',query: {presets: ['react', 'es2015']}},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
      { test: /\.png|.svg$/, loader: "file-loader?name=/aset/[hash:8].[name].[ext]" }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('./dist/Commons.js'),
    new OpenBrowserPlugin({ url: 'http://127.0.0.1:1234' }),
    new ExtractTextPlugin("./dist/style.css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};