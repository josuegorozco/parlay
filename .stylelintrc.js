module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'block-no-empty': null,
        'string-quotes': 'single',
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'declaration-block-trailing-semicolon': 'always',
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'global',
                ],
            },
        ],
        'property-no-unknown': [
            true,
            {
                ignoreProperties: [
                    'composes',
                ],
            },
        ],
    },
};
