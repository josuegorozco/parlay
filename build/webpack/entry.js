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

export default {
    vendor: path.resolve(rootPath, 'app/vendor'),
    main: path.resolve(rootPath, 'app/index')
};
