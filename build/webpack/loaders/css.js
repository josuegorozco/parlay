// import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    test: /\.s?css$/,
    exclude: /node_modules/,
    loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader!sass-loader'
    // loader: ExtractTextPlugin.extract({
    //     fallbackLoader: 'style-loader',
    //     // loader: 'css-loader'
    //     loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader!sass-loader'
    // })

    // cssLoaders: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader!sass-loader',
};
