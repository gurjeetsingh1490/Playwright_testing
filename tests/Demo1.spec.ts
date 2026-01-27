import {Expect,test} from "@playwright/test"
test.describe("TEST CASES", async()=>{
test("TestCase-1",async({page})=>{

    await test.step("Test-case1",async()=>{
        await page.goto(" https://testautomationpractice.blogspot.com/")
       await page.getByRole("textbox",{name:'Enter Name'}).fill("MICHEAL WOOD")
    })
})

})