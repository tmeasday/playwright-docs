// @ts-check
const { test, expect, takeSnapshot } = require('@chromatic-com/playwright');

test.describe('yeah', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
})
