module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								bypassOnDebug: true,
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
								svgo: {

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
