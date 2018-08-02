const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(devMode){
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						devMode ? 'style-loader': MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
			})
		],
	};
}