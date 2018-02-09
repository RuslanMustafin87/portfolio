var SvgStore = require('webpack-svgstore-plugin');

module.exports = () => {
  return {
		module: {
			rules: [
				{
					test: /\.svg$/,
					use: [
							{
								loader: 'svg-url-loader',
								options: {
									noquotes: true
								}
							},
							// {
							// 	loader: 'svgo-loader',
							// 	options: {
							// 	plugins: [
							// 			{removeTitle: true},
							// 			{convertColors: {shorthex: false}},
							// 			{convertPathData: false}
							// 		]
							// 	}
							// }
					]
				}
			]
		}
	}
}