export class HomePage{
constructor(page){
    this.page = page;
    this.productItemsList = "//div[@id ='tbodyid']//h4//a";
    this.addToCartButton = "//a[text()='Add to cart']";
    this.cartLink = "//a[text()='Cart']";
}
// async addProductToCart(Expectedproduct){
//  const productList = await this.page.$$(this.productItemsList);
//  for(let actProduct of productList){
//     console.log(await actProduct.textContent());
//     if(await actProduct.textContent() == Expectedproduct)
//     {
//         console.log(await actProduct.textContent());
//         await actProduct.click();
//         await this.page.waitForTimeout(3000);
//         break;
//     }
//  }
//  await this.page.waitForTimeout(3000);
// this.page.once('dialog', async dialog => {
//    console.log('Dialog window opened');
//    const message = dialog.message();
//    console.log('Dialog message:', message);
//    if (message.includes('added')) {
//        console.log('Product is successfully added');
//    }
//    await dialog.accept();
// });

// await this.page.locator(this.addToCartButton).click();
// //await this.page.locator("//a[text()='Add to cart']").click();
// await this.page.locator(this.cartLink).click();

// }



async addProductToCart(expectedProduct) {

  const productList = await this.page.$$(this.productItemsList);

  for (let actProduct of productList) {
    const productName = await actProduct.textContent();
    console.log(productName);

    if (productName.trim() === expectedProduct) {
      await actProduct.click();
      await this.page.waitForLoadState('load');
      break;
    }
  }

  // Wait for dialog properly
  
  const dialogPromise = this.page.waitForEvent('dialog');

  await this.page.locator(this.addToCartButton).click();

  const dialog = await dialogPromise;

  console.log('Dialog window opened');
  console.log('Dialog message:', dialog.message());

  if (dialog.message().includes('added')) {
    console.log('Product is successfully added');
  }

  await dialog.accept();
}
  async goTocart(){
    // Now go to cart AFTER dialog is handled
await this.page.locator(this.cartLink).click();
await this.page.waitForLoadState('load');
  }  
}

