import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ['js/recommended', prettierConfig],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',
      'no-else-return': 'warn',
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
      ...prettierPlugin.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'vue/require-v-for-key': 'error',
      'media-feature-range-notation': 'context',
      'number-leading-zero': 'never',
    },
  },
])
