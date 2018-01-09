module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(woff2|woff)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font/'
                    }
                }
            ]
        }
    };
};