module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.(mp4|webm)$/,
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