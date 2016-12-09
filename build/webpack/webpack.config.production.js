import path from 'path';
import webpackBase from './webpack.config.base';
import plugins from './plugins';

/*
|--------------------------------------------------------------------------
| Root Path
|--------------------------------------------------------------------------
|
| Init root path
|
*/
// {{{

const rootPath = path.resolve(__dirname, '../../');

// }}}

export default webpackBase({
    entry: [
        path.join(rootPath, 'app/vendor.js'),
        path.join(rootPath, 'app/app.js'),
    ],
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },
    plugins: plugins(true),
});
