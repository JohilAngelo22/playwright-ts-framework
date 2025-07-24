import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: false,
    reporter: [
        ['html', { outputFolder: 'playwright-report' }],
        ['allure-playwright'],
        ['json', { outputFile: 'results.json' }],
        ['junit', { outputFile: 'results.xml' }],
    ],
    use: {
        trace: 'on',
        headless: true, // Enable headed mode
    },
    projects: [
        {
            name: 'API Tests',
            use: {
                baseURL: 'https://httpbin.org',
            },
        },
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'WebKit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
