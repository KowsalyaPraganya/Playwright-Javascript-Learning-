const{test, expect} = require('@playwright/test')
test('Locating multiple Elements', async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    //  const links = await page.$$('//a');
    //  const length = links.length;
    //  console.log(length);
    //  console.log(typeof(links));
    //  for(const l of links)
    //  {
    //     const linkText = await l.textContent();
    //     console.log(linkText);
    //  }
    await page.waitForSelector("//div[@id ='tbodyid']//div//h4//a");
    const products = await page.$$("//div[@id ='tbodyid']//div//h4//a");
    console.log(typeof(products));
    for(const product of products)
    {
        const text = await product.textContent();
        console.log(text);
    }
})