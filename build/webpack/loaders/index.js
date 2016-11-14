import css from './css';
import fonts from './fonts';
import images from './images';
import json from './json';
import video from './video';

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
    loaders: ['babel-loader']
};

export default [
    js,
    css,
    fonts,
    images,
    json,
    video
];
