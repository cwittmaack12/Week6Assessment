
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots appears when draw is clicked', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(3000)
    const card = await driver.findElement(By.id('choices'))
    expect(card).toHaveReturned()
})

test('First bot button works', async () => {
    const bot1 = await driver.findElement(By.xpath('//div/button'))
    await bot1.click()
    await driver.sleep(3000)
    const player = await driver.findElement(By.className('container'))
    expect (player).toHaveReturned()
})


///////unable to get tests to work/////// I believe I'm using the wrong method (toHaveReturned doesn't seem to work.)

