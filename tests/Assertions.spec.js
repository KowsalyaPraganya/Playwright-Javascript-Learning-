const{test, expect} = require('@playwright/test');
test('Assertions', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    const searchBox = await page.getByPlaceholder('Search store');
    await expect(searchBox).toBeEnabled();

    const radioButton = await page.locator('#gender-male');
    await radioButton.click()
    await expect(radioButton).toBeChecked();

    const newsLettercheckBox = await page.locator('#NewsLetterSubscriptions_0__IsActive');
    await expect(newsLettercheckBox).toBeChecked();

    const registerButton = await page.locator('#register-button');
    expect(registerButton).toHaveAttribute('name', 'register-button');

    const headingRegister = page.locator('.page-title h1');
    expect(headingRegister).toHaveText('Register');
    expect(headingRegister).toContainText('Reg');

    const emailtextbox = page.locator('#Email');
    await emailtextbox.fill('test@demo.com');
    await expect(emailtextbox).toHaveValue('test@demo.com');

})