var path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'quillDeltaMarkdown.js',
    libraryTarget: 'umd',
    library: 'quillDeltaMarkdown'
  },
  stats: {
    colors: true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map'
}
