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
    context: rootPath,
    entry: options.entry,
    output: Object.assign({
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/',
    }, options.output),
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: options.babelQuery,
        }].concat(loaders),
    },
    plugins: options.plugins.concat(plugins),
    target: 'web',
    devtool: (options.devtool || 'inline-source-map'),
    resolve: {
        modules: ['app', 'node_modules'],
    },
});
