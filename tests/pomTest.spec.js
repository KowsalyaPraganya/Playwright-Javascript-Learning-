import {test, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { cartPage } from '../pages/CartPage';
test.skip('without pom', async({page})=>{
    //----without POM------
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
})
    
test('with POM', async({page})=>{
    //With POM 
    //Login 
     const loginObj = new LoginPage(page);
   await loginObj.gotoLoginPage();
   await loginObj.loginIntoApplication('pavanol', 'test@123');  
    await page.waitForTimeout(5000);
    //Home
const homeObj = new HomePage(page);
await homeObj.addProductToCart("Nokia lumia 1520");
await homeObj.goTocart();
const cartObj = new cartPage(page);
const status = await cartObj.checkProductIsPresentInCart("Nokia lumia 1520");
await expect(status).toBe(true);


    //Logout
})
