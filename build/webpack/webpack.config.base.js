import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: options.babelQuery,
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?sourceMap',
            }),
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?modules&importLoaders=1&sourceMap!postcss-loader!sass-loader',
            }),
        }].concat(loaders),
    },
    plugins: options.plugins.concat(plugins),
    target: 'web',
    devtool: (options.devtool || 'inline-source-map'),
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.react.js',
        ],
    },
});
