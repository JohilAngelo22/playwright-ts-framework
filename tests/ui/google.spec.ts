import { test, expect } from '@playwright/test';
import { GoogleHomePage } from '../../pages/GoogleHomePage';


test.describe('@ui Google Search Tests', () => {
    test('Check number of images > 1', async ({ page }) => {
        const googleHomePage = new GoogleHomePage(page);
        await googleHomePage.navigateToHomePage();

        const images = await page.$$eval('img', elements => elements.length);
        expect(images).toBeGreaterThan(1);
    });
})