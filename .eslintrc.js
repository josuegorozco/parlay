module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: [
        './.eslint/index.js',
    ],
    settings: {
        settings: {
            'import/resolver': {
                webpack: {
                    config: './build/webpack/webpack.config.test.babel.js',
                },
            },
        },
    },
};