const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                    }
                            }
                        ]
                    }
                )
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                            publicPath: '../',
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        minimize: true
                                        }
                                },
                                'sass-loader'
                            ]
                        }
                    )
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./css/[name].css')
        ]
    };
};