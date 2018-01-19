const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyJS = require('./webpack/uglifyJS');
const babel = require('./webpack/babel');
const merge = require('webpack-merge');
const server = require('./webpack/devserver');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const lintCSS = require('./webpack/sass.lint');
const extractCSS = require('./webpack/css.extract');
const image = require('./webpack/image');
// const sprite = require('./webpack/sprite');
const font = require('./webpack/font');
const lintJS = require('./webpack/js.lint');
const favicon = require('./webpack/favicon');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

const config = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'blog': PATHS.source + '/pages/blog/blog.js',
			'about': PATHS.source + '/pages/about/about.js'
		},
		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				jquery: 'jquery'
			  }),
			new CleanWebpackPlugin('dist'),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index',
					'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['blog',
					'common'],
				template: PATHS.source + '/pages/blog/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.html',
				chunks: ['about',
					'common'],
				template: PATHS.source + '/pages/about/about.pug'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			})
		],
	},
	lintJS(PATHS.source),
	// lintCSS(),
	uglifyJS(),
	babel(),
	pug(),
	image(),
	// sprite(PATHS.source),
	favicon(),
	font()
]);

module.exports = function(env){
	if (env === 'production') {
		return merge([
			config,
			extractCSS()
		]);
	}
	if (env === 'development') {
		return merge([
			config,
			css(),
			sass(),
			server()
		]);
	}
};
