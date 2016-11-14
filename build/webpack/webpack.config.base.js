import path from 'path';
import loaders from './loaders';
import plugins from './plugins/index.base';

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

export default options => ({
    entry: options.entry,
    // output: options.output,
    output: Object.assign({
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/'
    }, options.output),
    module: {
        loaders: loaders.concat(options.module && options.module.loaders ? options.module.loaders : [])
    },
    plugins: options.plugins.concat(plugins),
    target: 'web',
    noInfo: false,
    devtool: 'inline-source-map'
});
