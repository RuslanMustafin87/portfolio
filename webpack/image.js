module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			]
		}
	};
};
