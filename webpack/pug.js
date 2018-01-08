const pug = require('pug');

module.exports = function(){
    return {
        module: {
            rules: {
                test: /\.pug$/,
                loader: 'pug-loader',
                option: {
                    pretty: true
                }
            }
        }
    }
}