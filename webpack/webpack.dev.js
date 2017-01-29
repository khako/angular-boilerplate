var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

var webpackBase = require('./webpack.base.js');

module.exports = merge(webpackBase, {
  devtool: '#eval-source-map',
  module: {
    loaders: [
      { test: /\.(sass|scss)$/, loader: 'style!css!postcss!sass?sourceMap' },
      { test: /\.(css)$/, loader: 'style!css!postcss' }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build/'),
    historyApiFallback: true,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    },
    port: 3333,
    quiet: false,
    open: true,
    inline: true
  },
  plugins: [
    new DashboardPlugin(),

    new WebpackBuildNotifierPlugin({
      title: 'Webpack build',
      suppressSuccess: true,
      sound: false
    }),

    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '../')
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../client/index.html')
    }),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.NoErrorsPlugin()
  ]
});
