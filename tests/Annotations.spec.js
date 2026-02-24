import {test, expect} from '@playwright/test';
//only
// test.only('Test 1', async({page})=>{
//     console.log("test 1...........");
// });

//skip
// test.skip('Test 2', async({page})=>{
//     console.log("test 2...........");
// });
//Skip test based on conditions
// test('test3', async({page, browserName})=>{
//     console.log("This is test 3");
//     if(browserName === 'chromium')
//     {
//         test.skip();
//     }
// })
// //Below testcase wont be skipped
// test('test4', async({page, browserName})=>{
//     console.log("This is test 3");
//     if(browserName === 'firefox'){
//         test.skip();
//     }
// })

//Fixme
// test.fixme('test5', async({page})=>{
//     console.log('test 5............');
// })
// test('test6', async({page})=>{
//     test.fixme();
//     console.log('test 6............');
// })

//Fail
//Fail ,  Pass ==> Fail
// test('test 7', async({page})=>{
//     test.fail();
//     console.log('this is test 7....');
//     expect(1).toBe(1);                          
// })
// //Fail ,  Fail ==> Pass
// test('test 8', async({page})=>{
//     test.fail();
//     console.log('this is test 8....');
//     expect(1).toBe(0);  
// })

//Failing tetscases based on conditions
// test('test 9', async({page, browserName})=>{
//    if(browserName === 'chromium'){
//       test.fail();
//     } 
// })
// test('test 10', async({page, browserName})=>{
//    if(browserName === 'firefox'){
//       test.fail();
//     } 
// })

//test.slow()
test.slow('test 11', async({page})=>{
test.setTimeout(5000)
   console.log("this is test 11........");
   await page.goto("https://www.demoblaze.com/");
})