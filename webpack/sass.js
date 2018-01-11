module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						},
						'sass-loader'
					]
				}
			]
		}
	};
};
