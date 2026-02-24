const { test, expect } = require('@playwright/test');

test('Home page loads', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  let pageTitle = await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle('STORE');
  await page.close();
});
