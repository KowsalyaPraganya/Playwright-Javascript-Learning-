const{test, expect} = require('@playwright/test');
const { clear } = require('node:console');
test('Handling Mutli select dropdown', async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/');
     
     //1. select multiple option from dropdown
    //  await page.locator('#colors').selectOption(['Green', 'Blue', 'Red']);
    //  await page.selectOption('#colors', ['Green', 'Blue', 'Red']);
    //  await page.waitForTimeout(5000);

     //2. Check number of options
     //a)
     const colorsoptions =  await page.$$('#colors option');
     console.log("length is ", colorsoptions.length);
     await expect(colorsoptions.length).toBe(7);
     //b)check number of options in dropdown using JS array
     const options =  await page.locator("#colors option");
     console.log("Count is ", await options.count());
     await expect(options).toHaveCount(7);

     //3)Check presence of value in the dropdown
     //a)
    //  const optionsArr = await page.$$('#colors option');
    //  for(const opt of optionsArr)
    //  {
    //     const value = await opt.textContent();
    //     console.log('value');
    //     if(value.includes('Red'))
    //     {
    //          console.log('Red is present ');
    //          await page.selectOption('#colors', 'Red');
    //          await page.waitForTimeout(5000);
    //          break;
    //     }
    //  }
    //b)
    //const content = await page.locator('#colors').textContent();
    const content = await page.locator('#colors').innerText();
   // await expect(content).toContain('Red');
   //Anotherway
   await expect(content.includes('Red')).toBeTruthy();
   await expect(content.includes('xxxuhgu')).toBeFalsy();
    
})