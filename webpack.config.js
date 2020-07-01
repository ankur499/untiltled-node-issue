const webpack = require('webpack')

module.exports = {
  target: "node",
  mode: "development",
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
    extensions: ['.ts', '.js', '.json','.node','.mjs']
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]'
    }),

    new webpack.HotModuleReplacementPlugin() // !!!!!!! remove this line, the warning will not display
  ]
};
