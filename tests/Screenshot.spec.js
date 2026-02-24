import {test, expect} from '@playwright/test';
test.skip('Page Screenshot', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path: 'tests/screenshotOfTestcases/'+Date.now()+'Homepage.jpg'});
})

test.skip('Full Page Screenshot', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path: 'tests/screenshotOfTestcases/'+Date.now()+'FullPage.jpg', fullPage: true});
})

test('Element Screenshot', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
      await page.locator("#login2").screenshot({path : 'tests/screenshotOfTestcases/'+Date.now()+'Element.jpg'})
})