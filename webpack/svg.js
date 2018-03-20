module.exports = () => {
  return {
		module: {
			rules: [
				{
					test: /\.svg$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			]
		}
	}
}