import path from 'path';
import plugins from './plugins';
import loaders from './loaders';

const rootPath = path.resolve(__dirname, '../../');

export default {
    debug: true,
    target: 'web',
    noInfo: false,
    devtool: 'inline-source-map',
    entry: [
        path.resolve(rootPath, 'app/index')
    ],
    output: {
        path: path.resolve(rootPath, 'app'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins,
    module: {
        loaders
    }
};
