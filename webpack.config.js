const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJS = require('./webpack/terserJS');
const babel = require('./webpack/babel');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const image = require('./webpack/image');
const video = require('./webpack/video');
const font = require('./webpack/font');
const favicon = require('./webpack/favicon');
const extractCSS = require('./webpack/extractCSS');
const devServer = require('./webpack/devServer');
const devtool = require('./webpack/devtool');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'blog': PATHS.source + '/pages/blog/blog.js',
			'about': PATHS.source + '/pages/about/about.js',
			'portfolio': PATHS.source + '/pages/portfolio/portfolio.js',
			'admin': PATHS.source + '/pages/admin/admin.js',			
		},
		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},
		optimization: {
			minimize: true,
			runtimeChunk: false,
			splitChunks: {
				cacheGroups: {
					default: false,
					commons: {
						test: /\.(js|css|scss)$/,
						chunks: 'all',
						minChunks: 2,
						name: 'common',
						enforce: true,
					},
				},
			},
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index',
					'common'],
				template: PATHS.source + '/pages/index/index.pug',
				minify: false
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
			new HtmlWebpackPlugin({
				filename: 'admin.html',
				chunks: ['admin',
					'common'],
				template: PATHS.source + '/pages/admin/admin.pug'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				jquery: 'jquery'
			}),
			new FriendlyErrorsWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
			new CleanWebpackPlugin(),
			// new CompressionPlugin(
			// 	{
			// 		test: /\.(js|css|html|svg)$/,
			// 		algorithm: 'gzip',
			// 		include: /\/dist/
			// 	}
			// )
			// new BundleAnalyzerPlugin(),
		],
	},
	babel(),
	pug(),
	image(),
	video(),
	favicon(),
	font()
]);

module.exports = function(env, argv) {
	if (argv.mode === 'production') {
		return merge([
			common,
			extractCSS(),
			TerserJS()
		]);
	}
	if (argv.mode === 'development') {
		return merge([
			common,
			css(),
			devServer(),
			devtool()
		]);
	}
};
