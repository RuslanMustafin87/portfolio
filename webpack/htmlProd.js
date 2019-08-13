const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const path = require('path');

const PATHS = {
	source: path.join(__dirname, '..', 'src'),
	build: path.join(__dirname, '..', 'dist')
};

module.exports = function() {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.pug',
				chunks: ['index',
					'common'
				],
				template: PATHS.source + '/pages/index/index.pug',
				minify: false
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.pug',
				chunks: ['blog',
					'common'
				],
				template: PATHS.source + '/pages/blog/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.pug',
				chunks: ['about',
					'common'
				],
				template: PATHS.source + '/pages/about/about.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio.pug',
				chunks: ['portfolio',
					'common'
				],
				template: PATHS.source + '/pages/portfolio/portfolio.pug'
			})
			// new HtmlWebpackPugPlugin({
			// 	filename: 'index.pug',
			// 	chunks: ['index',
			// 		'common'
			// 	],
			// 	template: PATHS.source + '/pages/index/index.pug',
			// }),
			// new HtmlWebpackPugPlugin({
			// 	filename: 'blog.pug',
			// 	chunks: ['blog',
			// 		'common'
			// 	],
			// 	template: PATHS.source + '/pages/blog/blog.pug'
			// }),
			// new HtmlWebpackPugPlugin({
			// 	filename: 'about.pug',
			// 	chunks: ['about',
			// 		'common'
			// 	],
			// 	template: PATHS.source + '/pages/about/about.pug'
			// }),
			// new HtmlWebpackPugPlugin({
			// 	filename: 'portfolio.pug',
			// 	chunks: ['portfolio',
			// 		'common'
			// 	],
			// 	template: PATHS.source + '/pages/portfolio/portfolio.pug'
			// })
		]
	}
}