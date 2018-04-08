module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						}
					]
				}
			]
		}
	};
}