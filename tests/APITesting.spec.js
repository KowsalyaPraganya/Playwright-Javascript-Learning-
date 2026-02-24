import {test, expect, request} from '@playwright/test';


test.skip('Get', async({request})=>{
const response = await request.get('https://dummyjson.com/products');
console.log(await response.json());
await expect(await response.status()).toBe(200);
})

test.skip('POST', async({request})=>{
    const response = await request.post('https://dummyjson.com/products/add', 
        {
            data:{"title": "BMW Mono", "colour": "Red"},
            headers:{"Accept": "application/json" }
        }
    )
   console.log(await response.status());
   console.log(await response.json());
})
test.skip('POST Request', async({request})=>{
   const response=  await request.post('https://dummyjson.com/products/add', {
                                                          data:{"title": "Tata", "colour": "red", "window":"monochrome"},
                                                          headers: {"Accept":"application/json"} 
                                                       })
console.log(await response.json());
console.log(await response.status());
await expect(await response.status()).toBe(201);
})

test.skip("PUT Request" ,async({request})=>{
    //Get Single Product
    const getResponse =await request.get('https://dummyjson.com/products/1');
    console.log(await getResponse.json());
    console.log(await getResponse.status());

    //Update the Product
    const putResponse =await request.put('https://dummyjson.com/products/1', {data: {"title": "Honor x9b"},
                                                           headers: {"Accept": "application/json"} });
    console.log(await putResponse.json());
    console.log("Update status" , await putResponse.status());
    });

test("Delete", async({request})=>{
    //delete product
    const response = await request.delete('https://dummyjson.com/products/1');
    console.log("Delete Statusm: ", await response.status());
    //await expect(await response.status()).toBe(204);

    //Check deleted product
    const getResponse = await request.get('https://dummyjson.com/products/1');
    console.log(await getResponse.json());
    console.log(await getResponse.status());
})
                                