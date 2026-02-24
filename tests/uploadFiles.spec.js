const{test, expect} = require('@playwright/test');
test('Upload Files', async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Single File upload
  await page.locator("#singleFileInput").setInputFiles('tests/uploadFiles/TestSample1.txt');
  await page.locator("//button[text()='Upload Single File']").click();
  console.log(await page.locator("#singleFileStatus").textContent());
  await expect(await page.locator("#singleFileStatus")).toHaveText("Single file selected: TestSample1.txt, Size: 0 bytes, Type: text/plain");
//Multiple  File upload

await page.locator("#multipleFilesInput").setInputFiles(['tests/uploadFiles/TestSample1.txt','tests/uploadFiles/Testsample2.txt']);
  await page.waitForTimeout(10000);
  await page.locator("//button[text()='Upload Multiple Files']").click();
  console.log(await page.locator("#multipleFilesStatus").textContent());
  await expect(await page.locator("#multipleFilesStatus")).toHaveText("Multiple files selected: TestSample1.txt, Size: 0 bytes, Type: text/plain Testsample2.txt, Size: 0 bytes, Type: text/plain");

})