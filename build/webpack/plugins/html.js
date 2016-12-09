import HtmlWebpackPlugin from 'html-webpack-plugin';

export default isProduction => (new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: true,
    trackJSToken: isProduction ? '' : '',
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLS: true,
    },
}));
