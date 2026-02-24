const {test, expect} = require('@playwright/test')
test('Locators_Builtin' , async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {type: 'submit'}).click();

    // const Username = await page.getByText('wetwFMe hfUEdV');
    // await expect(Username).toBeVisible();

    const Username =await page.locator("//p[@class ='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(Username)).toBeVisible();
})