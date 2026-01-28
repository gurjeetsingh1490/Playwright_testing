import {test,Expect, expect} from "@playwright/test"
test.describe("Test script to fill ui fields",async()=>{
 test("Test script UIs",async({page})=>{
await test.step("Test steps to fill and submit Text Box LHM",async()=>{
await page.goto("https://demoqa.com/")
await page.click("(//div[contains(@class,'card mt-4 top-card')])[2]")
await page.getByText("Elements").click();
await page.getByText("Text Box").click();
await page.getByPlaceholder("Full Name").fill("Helen Rose")
await page.getByPlaceholder("name@example.com").fill("helenrose23@yahoo.com")
await page.getByPlaceholder("Current Address").fill("22 elmtree cres clyde 7865")
await page.locator("(//div[@class='col-md-9 col-sm-12']/child::textarea)[2]").fill("21 jersey parade carnegie 3163")
await page.getByRole("button",{name:"Submit"})
})
await test.step("Test steps to click and verify Check Box LHM",async()=>{
await page.getByText("Check Box").click();
await page.check("//span[@class='rct-checkbox']")
await expect(page.getByText("You have selected :")).toHaveText("You have selected : ")
})
await test.step("Test steps to click and verify Radio Button LHM",async()=>{
await page.getByText("Radio Button").click();
await page.getByText("Impressive").click();
await expect(page.locator("//span[contains(text(),'Impressive')]")).toContainText("Impressive")

})
await test.step("Test steps to click on Buttons LHM",async()=>{
await page.getByText("Buttons").click()
await page.getByRole("button",{name:"Double Click Me"}).dblclick()
await page.getByRole("button",{name:"Click Me"}).click
// right click on button
await page.getByRole("button",{name:"Right Click Me"}).click({button:'right'})
})



})
})