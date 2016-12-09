import globals from './globals';
import uglifyjs from './uglifyjs';
import html from './html';
import md5hash from './md5-hash';
import css from './css';

export default [
    md5hash,
    globals,
    css,
    html(true),
    uglifyjs,
];
