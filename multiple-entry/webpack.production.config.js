var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  // entry: path.resolve(__dirname, 'app/main.js'),
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    mobile: path.resolve(__dirname, 'app/mobile.js'),
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: [node_modules_dir],
      loaders: ['babel']
    }, {
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: [node_modules_dir],
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}