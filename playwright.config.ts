import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/integration',
  use: {
    baseURL: 'http://localhost:4321',
  },
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: false,
  },
});
