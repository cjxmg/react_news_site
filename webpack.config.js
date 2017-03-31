module.exports = {
  entry: __dirname + '/src/js/root.js',
  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] //设定babel的转码规
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoders=1&localIdentName=[name]_[local]-[hash:base64:5]'
      }
    ]
  }
}
