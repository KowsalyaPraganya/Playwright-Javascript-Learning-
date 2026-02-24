const { test, expect, chromium } = require('@playwright/test');

test('Handling Window/Tab', async () => {
//This opens the browser (like opening Chrome).
  const browser = await chromium.launch({ headless: false });
  //This creates a new clean session. Like opening the browser in incognito mode.
  const context = await browser.newContext();
  //This opens a new tab.
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

  console.log(await page.title());
  await expect(page).toHaveTitle("Automation Testing Practice");

//Approach 1
//Promise.all returns array, in result[0] -> hold new page object, result[1] -> hold undefined
const result= await Promise.all
([context.waitForEvent('page'),  page.getByText('Blogger').click()]);
//We need new Page object, so we consider only result[0]
const newPage = result[0];
await newPage.waitForLoadState(); // To ensure page is fully loaded

//Approach 2
  // Correct way to handle new tab
  //Because if we don’t wait properly, we may miss the new tab.
//   const [newPage] = await Promise.all([      //Promise.all() → Do both at the same time       
//     context.waitForEvent('page'),       //waitForEvent('page') → “Wait! A new tab is coming!”          
//     page.locator("//a[text()='Blogger']").click()  //click() → Click the link
//   ]);

  console.log(await newPage.title());
  await expect(newPage).toHaveTitle(
    "Blogger.com - Create a unique and beautiful blog easily."
  );

  await page.waitForTimeout(5000);
});
