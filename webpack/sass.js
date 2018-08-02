const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(devMode){
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						devMode ? 'style-loader': MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						'sass-loader'
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
};
