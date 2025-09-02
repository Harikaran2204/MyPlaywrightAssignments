import test from '@playwright/test'

test("Edit lead in leaf taps", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill("GAVS Technologies")
    await page.locator("#createLeadForm_firstName").fill("Hari Karan")
    await page.locator("#createLeadForm_lastName").fill("Baskaran")
    await page.locator(".smallSubmit").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill("Neurealm")
    await page.locator("[name='submitButton']").first().click()

})