import { test, expect } from '@playwright/test';

test.describe('@api API Tests', () => {
    test('GET request - Google homepage', async ({ request }) => {
        const response = await request.get('https://www.google.com');
        expect(response.status()).toBe(200);
    });
});
