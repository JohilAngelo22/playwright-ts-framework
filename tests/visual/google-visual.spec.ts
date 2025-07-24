import { test, expect } from '@playwright/test';

test.describe('@visual Google Visual Tests', () => {
  test('should match full page snapshot', async ({ page }) => {
    await page.goto('https://www.google.com');
    expect(await page.screenshot()).toMatchSnapshot({
      name: 'google-homepage.png'
    });
  });

  test('should match search input snapshot', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchInput = page.locator('textarea[name="q"]');
    expect(await searchInput.screenshot()).toMatchSnapshot({ name: 'google-search-input.png'});
  });
});