import { defineConfig } from 'eslint-define-config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig({
  languageOptions: {
    globals: {
      window: 'readonly',
      document: 'readonly',
      fetch: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  plugins: {
    prettier, // Подключение плагина Prettier
  },
  rules: {
    'prettier/prettier': 'error', // Ошибка если форматирование не соответствует правилам Prettier
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
});
