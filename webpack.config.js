var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    "quillDeltaMarkdown": "./index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'quillDeltaMarkdown'
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     query: {
    //         presets: ['es2015']
    //     }
    //   }
    // ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  devtool: 'source-map'
}
