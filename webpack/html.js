const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
	source: path.join(__dirname, '..', 'src'),
	build: path.join(__dirname, '..', 'dist')
};

module.exports = function() {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index',
					'common'
				],
				template: PATHS.source + '/pages/index/index.pug',
				minify: false
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['blog',
					'common'
				],
				template: PATHS.source + '/pages/blog/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.html',
				chunks: ['about',
					'common'
				],
				template: PATHS.source + '/pages/about/about.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio.html',
				chunks: ['portfolio',
					'common'
				],
				template: PATHS.source + '/pages/portfolio/portfolio.pug'
			})
		]
	}
}