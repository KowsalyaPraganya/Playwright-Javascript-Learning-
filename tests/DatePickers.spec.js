const{test, expect} = require('@playwright/test');
test("Date Picker", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Approach 1
    // await page.locator("#datepicker").fill("02/03/2026");
    // await page.waitForTimeout(3000);

    //Approach 2
    await page.locator("#datepicker").click();
    const Date = '03';
    const Month = 'May';
    const year = '2028';

    while(true)
    {
     const m =  await page.locator(".ui-datepicker-month").textContent();
     const y = await page.locator(".ui-datepicker-year").textContent();
     if(m == Month && y == year){
      console.log("Goto choose date and break loop");
      break;
      }
      await page.locator("//span[text()='Next']").click();
    }
    const calender = await page.$$(".ui-datepicker-calendar td  a");
    // for(let calenderDate of calender)
    // {
    //    if(await calenderDate.textContent() == Date)
    //    {
    //     await calenderDate.click();
    //     break;
    //    }
    // }

    //Instead of looping to choose date, we can use below line of code
    await page.locator("//a[ @class ='ui-state-default'][text() ='${Date}']").click();
    await page.waitForTimeout(5000);
})