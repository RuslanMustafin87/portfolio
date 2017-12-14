const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    'index': './src/scripts/index.js',
    'blog': './src/scripts/blog.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};

module.exports = config;