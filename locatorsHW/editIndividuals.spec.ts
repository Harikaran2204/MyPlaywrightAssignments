import test from '@playwright/test'

test("Edit Individuals", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator('[name=username]').fill("dilip@testleaf.com")
    await page.locator('.password').fill("Leaf@2025")
    await page.locator('[name=Login]').click()
    await page.waitForTimeout(5000)
    await page.locator('//button[@title="App Launcher"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//button[text()="View All"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//p[text()="Individuals"]').click()
    await page.waitForTimeout(5000)
    await page.locator('//a[@title="Hari Karan Baskaran"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//a[@title="Edit"]').click()
    await page.waitForTimeout(2000)
    await page.locator('(//a[@class="select"])[1]').click()
    await page.locator('//a[text()="Mr."]').click()
    await page.locator('//button[@title="Save"]').click()
    const IndividualsName = await page.locator('//span[@class="uiOutputText"]').first().innerText()

    if(IndividualsName === "Mr.  Hari Karan Baskaran"){

        console.log("Individual was edited successfully")
    }

    else{

        console.log("Individual was not edited")
    }
})