import { patch } from '../../Users/user/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/semver';

const path = require('path');
const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dest')
}

const config = {
  entry: {
    'index': './src/scripts/index.js',
    'blog': './src/scripts/blog.js'
  },
  output: {
    filename: 'script/[name].js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquire',
      jQuery: 'jquery'
    })
  ]
};

module.exports = config;