var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname),
    filename: 'react-comments.js',
    libraryTarget: 'umd',
    library: 'Comments'
  },

  modules: [path.resolve(__dirname, 'src'), 'node_modules'],

  devServer: {
    inline: true,
    port: 8008
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
          test: /(\.js)|(\.jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-0']
          }
      }
    ]
  },

  plugins: [
      new webpack.ProvidePlugin({
        'React': 'react'
      })
  ]
};
