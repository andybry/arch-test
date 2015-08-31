var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: ['./app.js'],

  output: {
    libraryTarget: 'var',
    library: 'Application',
    path: path.join(__dirname, '/dist/'),
    filename: 'app.js'
  },

  module: {
    loaders: [],
    preLoaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ }
    ]
  },
};
