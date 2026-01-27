import {expect,test} from "@playwright/test"
import { describe } from "node:test"
describe("Count and print links", async()=>{
test("Test case to count and print the links",async({page})=>{
    await page.goto("https://demoqa.com/books")
await test.step("Verify the TOTAL COUNT of the links", async()=>{
 const Cntlnk= await page.locator("//div[@class='ReactTable -striped -highlight']/child::div/child::div/child::div")

console.log("Total count is = ", await Cntlnk.count())
})

await test.step("Print the links",async()=>{
const prtlnk=await page.$$("//div[@class='ReactTable -striped -highlight']/child::div/child::div/child::div")
for(const pLk of prtlnk){

    console.log(await pLk.textContent())
}


})
})
})