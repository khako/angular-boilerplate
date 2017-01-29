var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackBase = require('./webpack.base.js');

var prodConfig = merge(webpackBase, {
  module: {
    loaders: [
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap') },
      { test: /\.(css)$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../client/index.html'),
      minify: {
        caseSensitive: true,
        collapseWhitespace: true
      }
    }),
    new WebpackCleanupPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ]
});

module.exports = prodConfig;
