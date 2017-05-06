module.exports = {
  entry: './src/main.js',
  output: { path: __dirname + '/build', filename: 'bundle.js' },
  devtool: 'source-map',
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
