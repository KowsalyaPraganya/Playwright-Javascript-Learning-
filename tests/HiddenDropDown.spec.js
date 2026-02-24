const{test, expect } = require('@playwright/test');
test('Auto Suggest DropDown', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(10000);
     await page.locator("//input[@placeholder='Username']").click();
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator(" //input[@placeholder='Password']").click();
    await page.locator(" //input[@placeholder='Password']").fill('admin123');
     await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(3000);
    await page.locator("//a[@class='oxd-main-menu-item active']").click();
 await page.waitForTimeout(3000);
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    await page.waitForTimeout(3000);
    const jobTitles = await page.$$("//div[@role ='listbox']//span");
    for(let jobtitle of jobTitles)
    {
        const value = await jobtitle.textContent();
        console.log("Job Title is : ", value);
        if(value.includes("QA Engineer"))
        {
            jobTitle.click();
            break;
        }
    }


});