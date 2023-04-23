const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    port: 8888,
    compress: true,
    historyApiFallback: true,
  }
});
