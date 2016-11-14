import dedupe from './dedupe';
import uglifyjs from './uglifyjs';
import html from './html';
import chunk from './chunk';
import md5hash from './md5-hash';
import css from './css';

export default [
    md5hash,
    css,
    chunk,
    html(true),
    dedupe,
    uglifyjs
];
