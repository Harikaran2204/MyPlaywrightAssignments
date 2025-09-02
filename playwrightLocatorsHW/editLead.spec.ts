import test from '@playwright/test'

test("Edit lead in leaftaps", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", "Demosalesmanager")
    await page.fill("#password", "crmsfa")
    await page.click(".decorativeSubmit")
    await page.click("//a[contains(text(),'CRM/SFA')]")
    await page.click("//a[text()='Leads']")
    await page.click("//a[text()='Find Leads']")
    await page.fill("(//input[@name='firstName'])[3]", "Hari karan")
    await page.click("//button[text()='Find Leads']")
    await page.click("//table[contains(@class,'row-table')]/tbody/tr[1]/td[1]//a")
    await page.click("//a[text()='Edit']")
    await page.fill("#updateLeadForm_companyName", "Neurealm")
    await page.fill("#updateLeadForm_annualRevenue", "2400000")
    await page.fill("#updateLeadForm_departmentName", "Development")
    await page.fill("#updateLeadForm_description", "Playwright Home Assignment for locators")
    await page.locator("[name='submitButton']").first().click()
    const companyName = await page.innerText("#viewLead_companyName_sp")
    const revenue = await page.innerText("#viewLead_annualRevenue_sp")
    const department = await page.innerText("#viewLead_departmentName_sp")

    if(companyName.includes("Neurealm") && revenue == "$2,400,000.00" && department === "Development"){

        console.log("All the edited lead values are updated as expected")
        console.log("The title of the page is "+await page.title())
    }

    else{

        console.log("Edited lead values are not updated")
        console.log("The title of the page is "+await page.title())

    }


})