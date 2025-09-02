import test from '@playwright/test'

test("Create lead in leaftaps", async({page})=>{

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
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")
    await page.locator("#createLeadForm_generalProfTitle").fill("Hari")
    await page.locator("#createLeadForm_annualRevenue").fill("1815000")
    await page.locator("#createLeadForm_departmentName").fill("Quality")
    await page.fill("#createLeadForm_primaryPhoneNumber", "7708388323")
    await page.click(".smallSubmit")
    const companyName = await page.innerText("#viewLead_companyName_sp")
    const firstName = await page.innerText("#viewLead_firstName_sp")
    const lastName = await page.innerText("#viewLead_lastName_sp")
    const status = await page.innerText("#viewLead_statusId_sp")

    if(companyName.includes("GAVS") && firstName === "Hari Karan" && lastName === "Baskaran" && status === "Assigned"){

        console.log("All information of create lead was valid")
        console.log("The title of the page is "+await page.title())

    }

    else{

        console.log("Incorrect information in created lead")
        console.log("The title of the page is "+await page.title())
    }

})