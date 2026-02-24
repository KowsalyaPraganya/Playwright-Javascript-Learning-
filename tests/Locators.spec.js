//const{text, expect}  = require('@playwright/test')
import {test, expect} from '@playwright/test'
test('Locators', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    //click on login button, here we use property as locator
    await page.locator('id=login2').click();
   // await page.click('id=login2');

   //provide usernmae - CSS
   //await page.locator('#loginusername').fill('Kowsalya');
   await page.fill('#loginusername', 'pavanol');
   await page.locator('#loginpassword').fill('test@123');
   await page.locator("//button[normalize-space() ='Log in']").click();
   const logOutLink = await page.locator("//a[normalize-space() ='Log out']");
   await expect(logOutLink).toBeVisible();
   await page.close();
})