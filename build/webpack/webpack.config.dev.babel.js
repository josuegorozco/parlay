import path from 'path';
import webpackBase from './webpack.config.base.babel';
import entry from './entry';
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
    entry,
    output: {
        path: path.resolve(rootPath, 'app'),
        publicPath: '/',
        filename: '[name].chunk.js',
    },
    plugins: plugins(),
    devtool: 'source-map',
    babelQuery: {
        presets: ['react-hmre'],
        plugins: ['transform-runtime'],
    },
});
