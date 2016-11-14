import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css?sourceMap')
};
