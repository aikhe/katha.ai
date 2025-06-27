const CUSTOM_AT_RULES = [
  // Tailwind-specific at-rules
  'apply',
  'layer',
  'responsive',
  'reference',
  'utility',
  'theme',
  'custom-variant',
  'screen',
  'source',
  'tailwind',
  'variants',
];

export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        // Allow Tailwind-based CSS Rules
        'at-rule-no-unknown': [true, { ignoreAtRules: CUSTOM_AT_RULES }],
      },
    ],
  },
};
