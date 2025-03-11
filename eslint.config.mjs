import stencil from '@stencil/eslint-plugin';

export default [
    stencil.configs.flat.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
