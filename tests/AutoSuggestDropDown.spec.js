const{test, expect } = require('@playwright/test');
test('Auto Suggest DropDown', async({page})=>{
   await page.goto('https://www.redbus.in/');
   //1. Check Delhi is present
   //a)
   // const text = 'Delhi';
   // await page.locator("//input[@id='srcinput']").fill('Delhi');
   // await page.waitForTimeout(3000);
   // await page.waitForSelector("//div[@role = 'listbox']//div[@role ='option']");
   // const suggestions = await page.locator("//div[@role = 'listbox']//div[@role ='option']").allTextContents();
   // console.log('Suggestions: ', suggestions);
   // if(suggestions.includes('Delhi Airport'))
   // {
   //    console.log("Present...");
   // }
   // else{
   //    console.log("Not present");
   // }

   //b)Check Delhi is present- Anotherway
   const text = 'Delhi';
   await page.locator("//input[@id='srcinput']").fill('Delhi');
   await page.waitForTimeout(3000);
   await page.waitForSelector("//div[@role = 'listbox']//div[@role ='option']//div[1]//div[@role ='heading']");
   const suggestions = await page.$$("//div[@role = 'listbox']//div[@role ='option']//div[1]//div[@role ='heading']");
   for(let suggest of suggestions){
      console.log(await suggest.textContent());
      if((await suggest.textContent()).includes("Delhi Airport"))
      {
        console.log("Delhi Airport is present");
        await page.selectOption();
        break;
      }
      else{
console.log("Delhi Airport is not present");
      }
   }

})

