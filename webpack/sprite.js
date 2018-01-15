const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (path) => {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    include: path + 'image/icon/',
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'sprite-[hash:6].svg'
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