const{test, expect} = require('@playwright/test');
test('handle input box', async({page})=>
    {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(await page.getByRole('textbox', {name: 'username'})).toBeEmpty();
    await expect(await page.getByRole('textbox', {name: 'username'})).toBeVisible();
    await expect(await page.getByRole('textbox', {name: 'username'})).toBeEnabled();
    await expect(await page.getByRole('textbox', {name: 'username'})).toBeEditable();
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(5000);


});