const{test, expect} = require('@playwright/test');
test('handle radio Button', async({page})=>
    {
        await page.goto('https://demo.nopcommerce.com/register');
        //await page.locator('#gender-male').check();
        await page.check('#gender-male');
        await page.waitForTimeout(5000);

        await expect (await page.locator('#gender-male')).toBeChecked();
        expect(await page.locator("#gender-male").isChecked()).toBeTruthy();
        expect(await page.locator('#gender-female').isChecked()).toBeFalsy();         
    });