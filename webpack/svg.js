module.exports = () => {
  return {
		module: {
			rules: [
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/icons/'
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