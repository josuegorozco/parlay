import webpack from 'webpack';
import loaders from './loaders';

export default options => ({
    debug: true,
    target: 'web',
    noInfo: false,
    devtool: 'inline-source-map',
    entry: options.entry,
    output: options.output,
    plugins: options.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]),
    module: {
        loaders: loaders.concat(options.module && options.module.loaders ? options.module.loaders : [])
    }
});
