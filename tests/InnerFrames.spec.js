const{test, expect} = require('@playwright/test');
test('Inner Frames', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //Number of frames
    const frames = await page.frames();
    console.log("Number of frames: ", frames.length);

    //Number of inner frames
    for(let frame of frames)
    {
        const childFrames = await frame.childFrames();
        console.log("Child Frames : "+childFrames.length);
    }

   const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
   await frame3.locator("//input[@name = 'mytext3']").fill("Kowsalya");
   const frame3ChildFrames = await frame3.childFrames();
   console.log("Frame 3 - No of child frames : "+ frame3ChildFrames.length);
   frame3ChildFrames[0].locator("//div[@aria-label ='Web Testing']").check();
   await page.waitForTimeout(5000);

});