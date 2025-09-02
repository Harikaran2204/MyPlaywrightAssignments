import test, { expect } from '@playwright/test';

test("Create Individuals", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.getByLabel('Username').fill("dilip@testleaf.com")
    await page.getByLabel("Password").fill("Leaf@2025")
    await page.locator('[name=Login]').click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("Home | Salesforce")
    await expect(page).toHaveURL("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await page.click('.slds-icon-waffle')
    await page.getByText('View All').click()
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator("//mark[text()='Service']").first().click()
    await page.waitForTimeout(5000)
    await page.click("(//span[text()='Accounts'])[1]")
    await page.click("//div[@title='New']")
    await page.fill("[name='Name']", "Hari karan Baskaran")
    await page.click("[name='SaveEdit']")
    await page.waitForTimeout(3000)
    const visible = await page.locator("//span[contains(@class,'toastMessage')]").isVisible()

    if(visible === true){

        console.log("Account created toast message was displaing as expected")

    }

    else{

        console.log("Account created toast message wasn't displayed")
    }

})