import webpack from 'webpack';

export default new webpack.ProvidePlugin({
    fetch: 'exports?self.fetch!whatwg-fetch'
});
