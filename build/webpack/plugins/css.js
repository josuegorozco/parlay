import ExtractTextPlugin from 'extract-text-webpack-plugin';

/*
|--------------------------------------------------------------------------
| CSS files
|--------------------------------------------------------------------------
|
| Generate an external css file with a hash in the filename.
|
*/

export default new ExtractTextPlugin('[name].[contenthash].css');
