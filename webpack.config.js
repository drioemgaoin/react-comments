const path = require('path');
const CombineLoaders = require('webpack-combine-loaders');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-comments.js',
    libraryTarget: 'umd',
    library: 'Comments'
  },

  devServer: {
    inline: true,
    port: 8008
  },

  resolve: {
      extensions: ['.js', '.jsx', '.es6.jsx', '.scss']
  },

  module: {
    loaders: [
      {
        test: /(\.css)|(\.scss)$/,
        loader: CombineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ])
      },
      {
          test: /(\.js)|(\.jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-0']
          }
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom'
      }
    }
]//,

  // plugins: [
  //     new webpack.ProvidePlugin({
  //       'React': 'react'
  //     })
  // ]
};
