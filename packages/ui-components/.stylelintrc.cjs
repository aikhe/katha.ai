/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['@katha-core/stylelint-config'],
  ignoreFiles: ['dist/**/*.css'],
  rules: {
    // We need complex `:not()` for headings with anchor
    'selector-not-notation': null,
  },
};
