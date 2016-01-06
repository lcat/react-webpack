var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  // entry: path.resolve(__dirname, 'app/main.js'),
  entry: [
    'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
  }
}