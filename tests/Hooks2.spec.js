const{test, expect} = require('@playwright/test');

let page; 
test.beforeAll(async({browser})=>{
    console.log("Before All");
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
})
test.afterAll(async()=>{
    console.log("After All");
    await page.locator("#logout2").click();
})
test('Home Page Test', async()=>{
    await page.waitForTimeout(2000);
    console.log("Home Page Test");
    const products = await page.$$(".hrefch");
    console.log("Length is ", await products.length)
    await expect(products).toHaveLength(9);
})

test('Add to Cart', async()=>{
    console.log("Add To Cart Test");
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    page.on('dialog', async dialog=>{
        await expect(dialog.message()).toBe("Product added.");
        await dialog.accept();
        })
})