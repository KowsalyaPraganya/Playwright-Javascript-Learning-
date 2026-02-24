import {test, expect} from '@playwright/test';
test('Tracing', async({page})=>{
await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    //Giving wrong xpath to intentionally fail testcases
    //await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator("//button[normalize-space()='Log in XXXXXX']").click();
})