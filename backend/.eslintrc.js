module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': 'error',
        'react/prop-types': 0,
    },
};
