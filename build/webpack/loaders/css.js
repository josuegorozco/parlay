import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
    })
};
