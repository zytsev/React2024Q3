import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    coverage: {
      reportsDirectory: './tests/unit/coverage',
      provider: 'v8', // or 'v8'
      include: ['src/**/*.{js,jsx,ts,tsx}'], // specify files to include
      exclude: ['src/generated/**/*.ts'], // specify files to exclude
      reporter: ['text', 'json', 'html'], // customize reporters. don't forget to include 'html' if you use vitest-ui
    },
  },
});
