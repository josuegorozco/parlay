import path from 'path';
import webpackBase from './webpack.config.base';
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
    babelQuery: {
        presets: ['react-hmre'],
        plugins: ['transform-runtime'],
    },
});
