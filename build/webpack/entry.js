import path from 'path';

/*
|--------------------------------------------------------------------------
| Init path
|--------------------------------------------------------------------------
|
| Set the root path
|
*/

const rootPath = path.resolve(__dirname, '../../');

export default [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    path.resolve(rootPath, 'app/vendor.js'),
    path.resolve(rootPath, 'app/app.js'),
];
