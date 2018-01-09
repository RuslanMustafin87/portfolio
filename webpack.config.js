const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const server = require('./webpack/devserver');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const image = require('./webpack/image');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dest')
}

const config = merge([
  {
    entry: {
      'index': PATHS.source + '/pages/index/index.js',
      'blog': PATHS.source + '/pages/blog/blog.js'
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js'
    },
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.source + '/pages/index/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog'],
        template: PATHS.source + '/pages/blog/blog.pug'
      })
    ],
  },
  pug(),
  sass(),
  image()
]);

module.exports = function(env){
  if (env === 'production') {
    return config
  };
  if (env === 'development') {
    return merge([
      config,
      server()
    ])
  };
}