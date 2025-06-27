import js from '@eslint/js';
import { flatConfigs } from 'eslint-plugin-import-x';

export default [
  js.configs.recommended,
  flatConfigs.recommended,
  {
    ignores: ['node_modules', '.turbo', '.next', 'build'],
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      // Verify that namespace imports are actually used.
      'import-x/namespace': 'off',
      // Warn against using named exports as properties of the default export.
      'import-x/no-named-as-default-member': 'off',
      // Ensure all imports point to existing modules.
      'import-x/no-unresolved': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules (like 'fs', 'path')
            'external', // npm packages
            'internal', // your project's internal modules
            ['sibling', 'parent'], // files in same or parent directory
            'index', // index files
            'unknown', // anything else
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
