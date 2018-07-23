module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.mp4$/,
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