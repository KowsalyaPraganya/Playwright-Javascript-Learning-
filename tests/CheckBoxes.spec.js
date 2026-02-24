const { test, expect } = require('@playwright/test');
test('Handle CheckBox', async ({ page }) => {
    await page.goto('https://practice.qabrains.com/form-submission');

    //Selecting single checkbox
    await page.locator("#Pasta").check();
    await expect(await page.locator('#Pasta')).toBeChecked();
    await expect(await page.locator('#Pasta').isChecked()).toBeTruthy();
    await expect(await page.locator("#Pizza").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

    //selecting multiple checkboxes
    const checkboxlocators = ["#Burger", "#Pizza", "#Sandwich"];
    console.log(typeof (checkboxlocators));
    for (const l of checkboxlocators) {
        await page.locator(l).check();
    }
    await page.waitForTimeout(5000);

    //unchecking the checkbox if the checkbox is checked
    await page.waitForSelector("//label[@for ='food']/parent::div//input");
    const allCheckboxlocators = await page.$$("//label[@for ='food']/parent::div//input");
    console.log(typeof (allCheckboxlocators));
    for (const f of allCheckboxlocators) {
        if (await f.isChecked()) {
            await f.uncheck();
        }
    }
    await page.waitForTimeout(5000);
})