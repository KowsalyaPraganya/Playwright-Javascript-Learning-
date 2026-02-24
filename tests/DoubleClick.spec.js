const{test, expect} = require('@playwright/test');
test('DoubleClick Action', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const copyTextEle = await page.locator("//button[normalize-space()='Copy Text']");
    await copyTextEle.dblclick();
    await expect(await page.locator('#field2')).toHaveValue("Hello World!");
   

})
