const path = require('path');
const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dest')
}

const config = {
  entry: {
    'index': PATHS.source + './pages/index/index.js',
    'blog': PATHS.source + './pages/blog/blog.js'
  },
  output: {
    filename: PATHS.build + './js/[name].js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquire',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + './pages/index/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: PATHS.source + './pages/blog/blog.pug'
    })
  ]
};

module.exports = config;