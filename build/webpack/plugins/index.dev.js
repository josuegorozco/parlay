import webpack from 'webpack';
import html from './html';
import css from './css';

export default [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    css,
    html(),
];
