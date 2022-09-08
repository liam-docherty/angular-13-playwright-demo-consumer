import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  maxFailures: 5,
  outputDir: './reports/recordings',
  reporter: [
    ['list'],
    ['junit', { outputFile: './e2e/reports/junit/results.xml' }],
    ['html', { outputFolder: './reports/html' }],
  ],
  retries: 0,
  testDir: './specs',
  timeout: 180000,
  use: {
    baseURL: 'http://localhost:4200',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: {
      mode: 'retain-on-failure',
      screenshots: false,
      snapshots: true,
      sources: false,
    },
    viewport: {
      width: 1280,
      height: 720,
    },
  },
  workers: 4,
};

export default config;
