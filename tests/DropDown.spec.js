const{test, expect} = require('@playwright/test');
const { clear } = require('node:console');
test('Handling dropdown', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Multiple ways to select value from dropdown
    //await page.locator('#country').selectOption({label : 'France'}); //Passing innertext with label
    //await page.locator('#country').selectOption('brazil');   //using Value
    //await page.locator('#country').selectOption('Brazil'); //using inner text
    //await page.locator('#country').selectOption({value : 'uk'}); //By using value
    await page.waitForSelector('#country');
    //await page.locator('#country').selectOption({index : 3}); //index starts from 1, 2, 3... Germany
    //await page.selectOption('#country',{value: 'uk'});
   // await page.selectOption('#country', 'Brazil');
   // await page.waitForTimeout(5000);

    //Assertions
    //2. Check number of options in dropdown
    //a).using page.locator
//     const options1 = await page.locator('#country option'); //CSS locator
//     console.log("Type of page.locator()  : ", typeof(options1)); //Object 
//     console.log(await options1.count());  //10
//     console.log(await options1.lengh);  //undefined
//     await expect(options1).toHaveCount(10);
//      //b).using page.$$
//     const options2 = await page.$$('#country option'); 
//     console.log("Type of page.$$() :  ", typeof(options2));    //Object, But internally it is an array
//     //console.log(await options2.count()); // Arrays don’t have count() method 
//     console.log(options2.length); //10
//     await expect(options2.length).toBe(10);

//     //3. Check presence of value in the dropdown
//    //a.
//     const options = await page.$$('#country option'); 
//    // await expect(options.includes('Brazil')).toBeTruthy(); //Error.options is containing array of objects, not values.    
//    let status = false; 
//    for(const opt of options)
//     {  
//         const value = await opt.textContent();
//         console.log("text content: "+ value);
//        if(value.includes('Brazil'))
//        {
//         console.log("Brazil country is available");
//         status = true;
//         break;
//        }
//     }
//     await expect(status).toBeTruthy();

    // //b)
    // const countryLocator = await page.locator('#country').textContent();
    // console.log("countryLocator textcontent: ", countryLocator);
    // await expect(countryLocator.includes('India')).toBeTruthy();
    // await expect(countryLocator.includes('xyzzz')).toBeFalsy();


    //3) Select value from dropdown using loop
    const coptions = await page.$$('#country option');
    for(const opt of coptions)
    {
        let v = await opt.textContent();
        console.log("Value:", v)
      if(v.includes('Brazil'))
      {
        console.log('Brazil matched');
        await page.locator('#country').selectOption('Brazil');
        break;
      }
    } 


    
})