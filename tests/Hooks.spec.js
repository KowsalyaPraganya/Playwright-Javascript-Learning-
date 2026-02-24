const{test, expect} = require('@playwright/test');

let page; 
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
})
test.afterEach(async()=>{
    await page.locator("#logout2").click();
})
test('Home Page Test', async()=>{
    await page.waitForTimeout(2000);
    const products = await page.$$(".hrefch");
    console.log("Length is ", products.length)
    await expect(products).toHaveLength(9);
})

test('Add to Cart', async()=>{
    
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    page.on('dialog', async dialog=>{
        await expect(dialog.message()).toBe("Product added.");
        await dialog.accept();
        })
})