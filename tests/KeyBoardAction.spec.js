const{test, expect} = require('@playwright/test');
test('Keyboard Action', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#input1").fill("Welcome Kowsalya");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.locator("#input2").click();
    await page.keyboard.press('Control+V');
    await page.keyboard.down('Tab');
    await page.keyboard.down('Tab');
    await page.keyboard.press('Control+V');
//await page.locator("[name ='input3']").fill("Hi How are you");  //CSS Selector
    await page.waitForTimeout(5000);


})