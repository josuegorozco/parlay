import webpack from 'webpack';

/*
|--------------------------------------------------------------------------
| CommonsChunk Plugin
|--------------------------------------------------------------------------
|
| Create seperate bundles. Currently:
|
| vendor.js
|
*/

export default new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    children: true,
    minChunks: 2,
    async: true
});
