const autoprefixer = require('autoprefixer');

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
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										browsers:['ie >= 8', 'last 4 version']
									})
								],
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
