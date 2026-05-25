/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['dist/**/*.css', 'build/**/*.css', '**/*.min.css'],
  rules: {
    // 'selector-class-pattern': '^[a-z][a-z0-9]*(?:__[a-z0-9]+(?:--[a-z0-9]+)?)?$',
    'selector-class-pattern': '^[a-z][a-z0-9_-]*$',
  },
}
