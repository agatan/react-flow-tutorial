module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  devServer: {
    contentBase: 'public',
  },
  devtool: 'source-map',
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
}
