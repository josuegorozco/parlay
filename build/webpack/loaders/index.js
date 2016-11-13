import css from './css';

/*
|--------------------------------------------------------------------------
| Init JS Loader
|--------------------------------------------------------------------------
|
| Default javascript loader
|
*/

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel']
};

export default [
    js,
    css
];
