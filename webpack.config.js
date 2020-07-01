const webpack = require('webpack')

module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.node']
  }
};
