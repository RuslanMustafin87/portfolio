const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const babel = require('./webpack/babel');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
// const lintCSS = require('./webpack/sass.lint');
const image = require('./webpack/image');
const video = require('./webpack/video');
const font = require('./webpack/font');
const lintJS = require('./webpack/js.lint');
const favicon = require('./webpack/favicon');
const argv = require('yargs').argv;

const devMode = argv.mode === 'development';

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

const config = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'blog': PATHS.source + '/pages/blog/blog.js',
			'about': PATHS.source + '/pages/about/about.js',
			'portfolio': PATHS.source + '/pages/portfolio/portfolio.js',
		},
		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},
		optimization: {
			runtimeChunk: { name: 'common' },
			splitChunks: {
				cacheGroups: {
					default: false,
					commons: {
						test: /\.(js|css)$/,
						chunks: 'all',
						minChunks: 2,
						name: 'common',
						enforce: true,
					},
			  },
			},
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
			new HtmlWebpackPlugin({
				filename: 'portfolio.html',
				chunks: ['portfolio',
					'common'],
				template: PATHS.source + '/pages/portfolio/portfolio.pug'
			}),
		],
	},
	lintJS(PATHS.source),
	// lintCSS(),
	babel(),
	pug(),
	image(),
	video(),
	css(devMode),
	favicon(),
	font(),
	{
		devServer: {
			stats: 'errors-only',
			port: 9000
		}
	},
	{
		devtool: devMode ? 'eval-source-map': ''
	}
]);

module.exports = config;
