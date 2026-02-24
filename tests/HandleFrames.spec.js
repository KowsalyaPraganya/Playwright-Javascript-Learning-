const{test ,expect}= require('@playwright/test');
test('Handling Frames', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //total frames in a page
    const allFrames = await page.frames();
    console.log(allFrames.length);

    //approach 1 --> Using name or url
    // const frame = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // frame.locator("//input[@name ='mytext1']").fill('Kowsalya');

    //approach 2 --> using framelocator
    // const loc = await page.frameLocator("//frame[@src ='frame_1.html']").locator("//input[@name ='mytext1']");
    // loc.fill("Kavitha");
    //OR below
    await page.frameLocator("//frame[@src ='frame_1.html']").locator("//input[@name ='mytext1']").fill("Kavitha");
    await page.waitForTimeout(5000); 
  
});
