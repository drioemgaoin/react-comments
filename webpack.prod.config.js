const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'app', 'app');

const combineLoaders = require('webpack-combine-loaders');

module.exports = {
    devtool: 'source-map',

    entry: mainPath,

    resolve: {
      extensions: ['', '.js', '.jsx', '.es6.jsx', '.scss', '.css']
    },

    output: {
        path: buildPath,
        filename: 'bundle.js'
    },

    module: {
      loaders: [
        {
          test: /(\.css)|(\.scss)$/,
          loader: combineLoaders([
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
            exclude: [nodeModulesPath],
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
    plugins: [
        new Webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new Webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: true
          }
        })
    ]
};
