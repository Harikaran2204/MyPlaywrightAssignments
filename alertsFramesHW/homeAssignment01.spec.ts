import test, { expect } from '@playwright/test'

test("Automating Alert and Frame Interactions using farme ID", async({page})=>{

    page.on('dialog',alert=>{

        const type = alert.type()
        const msg = alert.message()
        console.log("The alert type is '"+type+"'")
        console.log("The message displaying in the alert is '"+msg+"'")
        alert.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    // Handling frames using ID
    const frameCount = page.frames()
    const frame = frameCount[4]
    await frame.locator("//button[text()='Try it']").click()
    console.log(await frame.locator("#demo").innerText())
    await expect(frame.locator("#demo")).toContainText("You pressed OK!")

})

test("Automating Alert and Frame Interactions using frame locator", async({page})=>{

    page.on('dialog',alert=>{

        const type = alert.type()
        const msg = alert.message()
        console.log("The alert type is '"+type+"'")
        console.log("The message displaying in the alert is '"+msg+"'")
        alert.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    // Handling frames using locator
    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()
    await expect(page.frameLocator("//iframe[@id='iframeResult']").locator("#demo")).toContainText("You pressed OK!")
    
})