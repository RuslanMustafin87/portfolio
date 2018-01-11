module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|svg)$/,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								bypassOnDebug: true,
								name: '[name].[ext]',
								outputPath: 'images/',
								mozjpeg: {
									progressive: true,
									quality: 65
								},
								optipng: {
									enabled: false,
								  },
								pngquant: {
									quality: '65-90',
									speed: 4
								  },
								gifsicle: {
									interlaced: false,
								  },
								webp: {
									quality: 75
								}
							}
						}
					]
				}
			]
		}
	};
};
