const{test, expect} = require('@playwright/test');
test('DragAndDrop Action', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const SrcEle = await page.locator("#draggable");
    const targetEle = await page.locator("#droppable");
    
    //Approach 1
    // await SrcEle.hover();
    // await page.mouse.down(); //Doing mouse click action
    // await targetEle.hover();
    // await page.mouse.up();   //Releasing mouse
    // await page.waitForTimeout(5000);
//Approach 2
await SrcEle.dragTo(targetEle);




})

