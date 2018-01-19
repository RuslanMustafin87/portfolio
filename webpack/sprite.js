const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (path) => {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    include: path + 'icon/',
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'icons/sprite.svg'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
              new SpriteLoaderPlugin()
        ]
    }
}