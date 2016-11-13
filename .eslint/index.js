module.exports = {
    installedESLint: true,
    extends: [
        'eslint-config-airbnb-base',
        './rules/react-a11y'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    ecmaFeatures: {
        jsx: true
    },
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    plugins: [
        'react',
        'jsx-a11y',
        'import'
    ],
    rules: {
        quotes: [2, 'single'],
        indent: [2, 4],
        'no-console': 1,
        'max-length': 0,
        'comma-dangle': 0
    }
};
