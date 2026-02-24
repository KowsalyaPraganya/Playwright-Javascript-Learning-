export class cartPage{
    constructor(page)
    {
        this.page = page;
        this.productsInCart = "//tbody[@id ='tbodyid']/tr/td[2]";
    }

    async checkProductIsPresentInCart(product){
        console.log("Hi I am checking product is present inside cart or not") ;
        await this.page.waitForSelector(this.productsInCart); 
        const products = this.page.locator(this.productsInCart);
        const count = await products.count();
        console.log("count is ", count);
        
        for (let i = 0; i < count; i++) {
          const text = await products.nth(i).textContent(); 
          console.log(text);
             if (text.trim() === product) {
                console.log("Product is present in cart");
                return true;
                break;
            }
        }

//Another way
//await this.page.waitForSelector(this.productsInCart);
// await expect(this.page.locator(this.productsInCart))
//     .toContainText(product);

//Another way
//await this.page.waitForSelector(this.productsInCart);
//  const products = await this.page.$$(this.productsInCart);
//  let found = false;
// for(let p of products) {
//     const text = await p.textContent();
//     console.log('prduct is', text);
//     if (text.trim() === product) {
//         console.log('prduct matched', text);
//         found = true;
//         break;
//     }
// }
// await expect(found).toBeTruthy();
    }
}
