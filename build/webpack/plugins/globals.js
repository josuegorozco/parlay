import webpack from 'webpack';

/*
|--------------------------------------------------------------------------
| Init globals
|--------------------------------------------------------------------------
|
| Tells react to build in prod mode.
| See https://facebook.github.io/react/downloads.html
|
*/

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default new webpack.DefinePlugin(GLOBALS);
