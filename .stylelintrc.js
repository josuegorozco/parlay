module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'string-quotes': 'single',
        'color-hex-case': 'lower',
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
