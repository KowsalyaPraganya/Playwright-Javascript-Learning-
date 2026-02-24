const{test, expect} = require('@playwright/test');
test('RightClick Action', async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const rightClickEle = await page.locator("//span[normalize-space()='right click me']");
  await rightClickEle.click({rightClickEle: 'right'});

})