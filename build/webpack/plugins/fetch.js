import webpack from 'webpack';

export default new webpack.ProvidePlugin({
    fetch: 'exports-loader?self.fetch!whatwg-fetch',
});
