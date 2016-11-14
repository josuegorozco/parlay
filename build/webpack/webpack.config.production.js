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
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: plugins(true)
});
