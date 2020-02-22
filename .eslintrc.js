module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        Blog: true,
        document: true,
        FormData: true,
        FileReader: true,
        localStorage: true,
        navigator: true,
        window: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'import/extensions': 0,
        // 'import/no-relative-parent-imports': 'error',
        'import/prefer-default-export': 0,
        'import/named': 2,
        'no-console': 'warn',
        // disallow class components
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        // allow jsx in .ts and .tsx files
        'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
        // all prettier file errors
        'prettier/prettier': 'error',
        // turn off propType validation
        'react/prop-types': 0,
        // turn off button type checking
        'react/button-has-type': 0,
        // allow array indexes be react keys
        'react/no-array-index-key': 0,
        //formLabel
        'jsx-a11y/label-has-for': [
            2,
            {
                components: ['Label'],
                required: {
                    some: ['nesting', 'id'],
                },
                allowChildren: true,
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
