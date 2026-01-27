import {Expect,test} from "@playwright/test"
test.describe("TEST CASES", async()=>{
test("TestCase-1",async({page})=>{

    await test.step("Test-case1",async()=>{
        await page.goto(" https://testautomationpractice.blogspot.com/")
        await page.getByRole("textbox",{name:'Enter Name'}).fill("MICHEAL WOOD")
       const lnkcnt= page.locator("(//div[@class='widget-content'])[1]/child::ul/child::li")
console.log("Total count is = ",await lnkcnt.count())

const lnkXpth=await page.$$("(//div[@class='widget-content'])[1]/child::ul/child::li")

for(const lnks of lnkXpth)
{
     console.log(await lnks.textContent())
}

    })
})

})
