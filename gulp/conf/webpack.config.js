/**************************************************
 * path
 *************************************************/
var path = require('path');
var src = './src/';
var dest = './release/';
var js = 'js/';
var webpack = require('webpack');


/**************************************************
 * task
 *************************************************/
module.exports = {
  entry: {
    index: src + js + 'index.js',
  },
  output: {
    path: __dirname + dest + js,
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: "riotjs-loader",
        query: {
          type: 'none'
        }
      }
    ],
    loaders: [
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.tag'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    contentBase: dest,
    inline: true
  }
};