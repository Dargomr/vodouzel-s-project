/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'number-leading-zero': 'always',
    // 'selector-class-pattern': '^[a-z][a-z0-9]*(?:__[a-z0-9]+(?:--[a-z0-9]+)?)?$',
    'selector-class-pattern': '^[a-z][a-z0-9_-]*$',
  },
}
