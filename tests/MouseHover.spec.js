const{test, expect} = require('@playwright/test');
test('MouseHover Action', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const poitmeEle = await page.locator(".dropbtn");
    const MobilesEle = await page.locator("//a[text() ='Mobiles']");
    await poitmeEle.hover();
    await MobilesEle.hover();

})