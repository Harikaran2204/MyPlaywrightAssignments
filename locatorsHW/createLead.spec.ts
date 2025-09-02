import test from '@playwright/test';

test("Create Lead", async({page})=>{

     await page.goto("https://login.salesforce.com/")
    // Using Css Selectors
    await page.locator('[name=username]').fill("dilip@testleaf.com")
    await page.locator('.password').fill("Leaf@2025")
    await page.locator('[name=Login]').click()
    await page.waitForTimeout(5000)
    await page.locator('//button[@title="App Launcher"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//button[text()="View All"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//p[text()="Sales"]').click()
    await page.waitForTimeout(5000)
    await page.locator('//a[contains(@class,"context-bar")]/span[text()="Leads"]').click()
    await page.locator('//a[@title="New"]').click()
    await page.waitForTimeout(4000)
    await page.locator('[name="salutation"]').click()
    await page.locator('//span[text()="Mr."]').click()
    await page.locator('[name="lastName"]').fill("Baskaran")
    await page.locator('[name="Company"]').fill("Neurealm (Formerly GAVS)")
    await page.locator('[name="SaveEdit"]').click()
    const leadName = await page.locator('[name="primaryField"]').innerText()

    if(leadName === "Mr. Baskaran"){

        console.log("Create lead was successfull")
    }

    else{

        console.log("Create lead was not successfull")        
    }

})