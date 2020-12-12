import { PracticePage } from './../PracticePage';
// import { PracticePage } from "./PracticePage";

import { WebDriver, Builder, Capabilities, until } from "selenium-webdriver";


const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new PracticePage(driver);



  describe("POM", async ()=>{
    jest.setTimeout(15000);
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });

    test("Load the page", async()=>{
        await driver.wait(until.elementLocated(page.header));
        expect(await (await driver.findElement(page.header)).getText()).toBe("Explore topics");
    })

    test("User can use search bar", async()=>{
        await driver.wait(until.elementsLocated(page.searchButton));
        await driver.findElement(page.searchButton).sendKeys("Art\n");
    })

  })