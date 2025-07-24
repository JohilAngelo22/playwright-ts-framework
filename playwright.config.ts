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
        viewport: null,
        trace: 'on',
        headless: false, // Enable headed mode
    },
    projects: [
        {
            name: 'API Tests',
            grep: /@api/, 
            use: {
                baseURL: 'https://httpbin.org',
            },
        },
        {
            name: 'Chromium',
            grep: /@ui/, 
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Firefox',
            grep: /@ui/, 
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'WebKit',
            grep: /@ui/, 
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Visual Tests',
            grep: /@visual/, 
            use: { ...devices['Desktop Chrome'] },
            snapshotDir: '././visual-baseline',
        }
    ],
});
