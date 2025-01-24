/** @format */

import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      'next/typescript',
      'next/core-web-vitals',
      'prettier',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': ['error'],
    },
    plugins: ['prettier'],
  }),
];

export default eslintConfig;
