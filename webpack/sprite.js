const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (path) => {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        // {
						// 	loader: 'file-loader',
						// 	options: {
						// 		name: '[name].[ext]',
						// 		outputPath: 'images/'
						// 	}
						// },
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'images/sprite.svg'
                            }
                        },
                    ]
                }
            ]
        },
        plugins: [
              new SpriteLoaderPlugin()
        ]
    }
}