const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = () => {
    return {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: './src/images/fav_night.png',
                prefix: 'images/icons-[hash]/',
                persistentCache: true,
            })
        ]
    }
}