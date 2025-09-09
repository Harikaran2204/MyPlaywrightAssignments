import test, { expect } from '@playwright/test'

test("Handling frames", async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")

    //Handling frames using ID
    const frames = page.frames()
    console.log("Total number of frames in the page is "+frames.length)
    const firstFrame = frames[1]
    await firstFrame.locator("#Click").first().click()
    await page.waitForTimeout(2000)
    const message1 = await firstFrame.locator("#Click").first().innerText()
    expect(message1).toContain("Hurray! You Clicked Me.")

    //Handling frames using locator
    await page.frameLocator("(//iframe)[3]").frameLocator("(//iframe)[1]").locator("#Click").last().click()
    await page.waitForTimeout(2000)
    const message2 = await page.frameLocator("(//iframe)[3]").frameLocator("(//iframe)[1]").locator("#Click").last().innerText()
    expect(message2).toContain("Hurray! You Clicked Me.")

})