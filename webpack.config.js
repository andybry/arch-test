module.exports = {
  module: {
    loaders: [],
    preLoaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ }
    ]
  },
};
