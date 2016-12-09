module.exports = {
    installedESLint: true,
    extends: [
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    plugins: [
        'redux-saga',
        'react',
        'jsx-a11y',
        'import'
    ],
    rules: {
        quotes: [2, 'single'],
        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 0,
            MemberExpression: 1,
            FunctionDeclaration: {
                body: 1,
                parameters: 2
            },
            FunctionExpression: {
                body: 1,
                parameters: 2
            }
        }],
        'comma-dangle': [2, 'always-multiline'],
        'class-methods-use-this': 0,
        'require-yield': 0,
        'no-console': 1,
        'max-length': 0,
        'max-len': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        'import/no-named-default': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
    }
};
