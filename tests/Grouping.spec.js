import {test, expect} from '@playwright/test';

test.beforeAll(async({})=>{
    console.log("This is before all      ")
})
test.afterAll(()=>{
     console.log("This is After all      ")
})
test.beforeEach(({page})=>{
     console.log("This is before each      ")
})
test.afterEach(({page})=>{
     console.log("This is After each      ")
})
//test.describe.skip('Group 1', ()=>{
    test.describe('Group 1', ()=>{
      test('Test1', async({page})=>{
          console.log("This is test1");
      })
      test('Test2', async({page})=>{
          console.log("This is test2");
      })
})


//test.describe.only('Group 2', ()=>{
    test.describe.only('Group 2', ()=>{
    test('Test3', async({page})=>{
       console.log("This is test3");
    })
    test('Test4', async({page})=>{
       console.log("This is test4");
    })
})





