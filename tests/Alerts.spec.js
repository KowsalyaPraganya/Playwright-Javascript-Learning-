const{test ,expect}= require('@playwright/test');
test.skip('Alert with OK Button', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

   // Enabling Dialog Window handler
    await page.on('dialog', async dialog=>{
             expect(dialog.type()).toContain('alert');
             expect(dialog.message()).toContain('I am an alert box!');
             await dialog.accept();
        });
    await page.locator("//button[@id='alertBtn']").click();
});

test.skip('Alert with OK and Cancel Button', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async d=>{
        await expect(d.message()).toContain('Press a button!');
        await expect(d.type()).toContain('confirm');
        await d.dismiss();
    })
    await page.locator("//button[@id='confirmBtn']").click();
    const result = await page.locator("//p[@id ='demo']").allTextContents();
    console.log("result is : ", result);
    await expect(result).toContain('You pressed Cancel!');

});

test('Prompt Alert', async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async v=>{
        await expect(v.message()).toContain("Please enter your name:");
        await expect(v.defaultValue()).toBe("Harry Potter");
        await v.accept("John");
    })
    await page.click("//button[@id ='promptBtn']");
    await expect(page.locator("//p[@id ='demo']")).toHaveText("Hello John! How are you today?");
})