/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Work around a Vite 8 / Rolldown CJS-interop bug: deep imports like
      // '@mui/icons-material/ArrowForward' get pre-bundled from the CJS
      // build (`exports.default = ...`) but Rolldown exports the raw
      // `exports` object instead of unwrapping `.default`, so every MUI
      // icon resolves to `{ __esModule, default }` instead of the
      // component itself. The package's ESM build doesn't need interop at
      // all, so redirect deep icon imports there.
      { find: /^@mui\/icons-material\/(.*)$/, replacement: '@mui/icons-material/esm/$1' },
    ],
  },
  build: {
    // Keep Netlify's existing publish directory ("build") working without
    // needing to touch the dashboard config.
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
