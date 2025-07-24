import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
    test('GET request - Google homepage', async ({ request }) => {
        const response = await request.get('https://www.google.com');
        expect(response.status()).toBe(200);
    });

    test('POST request - httpbin', async ({ request }) => {
        const response = await request.post('https://httpbin.org/post', {
            data: { key: 'value' },
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.json).toEqual({ key: 'value' });
    });

    test('Negative test - 404 error', async ({ request }) => {
        const response = await request.get('https://httpbin.org/nonexistent');
        expect(response.status()).toBe(404);
    });
});