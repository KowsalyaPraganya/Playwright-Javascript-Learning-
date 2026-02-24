//Here I have updated playwright config file use and kept screenshot as on
import {test, expect} from '@playwright/test';
test('Login', async({page})=>{
 await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(await page.locator("#logout2")).toBeVisible();
})