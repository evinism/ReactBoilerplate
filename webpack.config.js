module.exports = {
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
}